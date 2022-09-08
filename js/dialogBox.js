export default class DialogBox{
    constructor(scene){
        this.scene = scene;

        //var box, kuso, npc01, btn;

        let w = 1163, h = 191;
        let x = imageWidth*gameScale/2;
        let y = ((imageHeight-h/2)*0.95)*gameScale;
        this.box = scene.add.tileSprite(x, y, w, h, 'dialog-box').setScale(gameScale).setDepth(100);
        this.box.visible = false;

        w = 32, h = 24;
        x = imageWidth*gameScale/2 + (1163/2)*gameScale*0.85;
        y = (imageHeight-191*0.45)*gameScale;
        this.btn = scene.add.tileSprite(x, y, w, h, 'dialog-btn').setScale(gameScale).setDepth(100);
        this.btn.visible = false;
        this.btn.setInteractive({
            useHandCursor: true
        }).on('pointerdown', () => this.next());
        
        w = 225, h = 223;
        x = (imageWidth*gameScale/2)-(1163/2-w/2)*gameScale*1.05;
        y = ((imageHeight-h/2)*0.965)*gameScale;
        this.kuso = scene.add.tileSprite(x, y, w, h, 'dialog-kuso').setScale(gameScale).setDepth(100);
        this.kuso.visible = false;

        this.npc01 = scene.add.tileSprite(x, y, w, h, 'dialog-npc01').setScale(gameScale).setDepth(100);
        this.npc01.visible = false;

        let fsize = gameScale * 30;
        let fwidth = gameScale * 820;
        this.msg = scene.add.text(x*1.3, y*0.925, "", 
            { fontSize: fsize, fontFamily: '微軟正黑體', 
            fontWeight: 'bold', fill: '#000000',
            wordWrap: {width: fwidth, useAdvancedWrap: true} }).setDepth(100);
        this.msg.visible = false;

        this.showMsg = false;
    }
    start(id){
        this.index = 0;
        this.result = story.filter(el => {
            return el['id'] === id;
        });
        if(this.result[0].content.length > 0){
            this.show();
            /*for(var i = 0; i < result[0].content.length; i++){
            }*/
        }
        /*$.each(result[0].content, function(index, values) {
            alert(values.words);
        });*/
    }
    show(){
        this.wordCounts = 0;//字數
        this.timer = 0;        
        this.words = this.result[0].content[this.index].words;
        var avatar = this.result[0].content[this.index].avatar;
        //console.log(this.words);

        // this 指稱的是所建立的 instance
        this.box.visible = true;
        this.btn.visible = true;
        if(avatar == 'kuso'){
            this.kuso.visible = true;
            this.npc01.visible = false;
        }
        
        this.msg.text = "";
        this.msg.visible = true;
        this.showMsg = true;
    }
    update(time, delta){
        //console.log(delta);
        if(this.showMsg){
            this.addText(time, delta);
        }
    }
    
    addText(time, delta){
        const delayTime = 100;
        this.timer += delta;
        while(this.timer > delayTime){
            var text = this.msg.text;
            const data = this.words.split('');
            if(this.wordCounts < data.length){
                text += data[this.wordCounts ++];
                this.msg.text = text;
            }
            else
            {
                this.showMsg = false;
            }
            this.timer -= delayTime;
        }
    }
  
    next(){
        if(this.showMsg)
            return;

        this.index++;
        if(this.index < this.result[0].content.length){
            this.show();
        }
        else{        
            this.close();
            var nextAction = this.result[0].content[this.result[0].content.length-1].next;
            if(nextAction[0] == 'load'){
                loadScene(this.scene, nextAction[1]);
            }
        }
    }
    close(){
        this.box.visible = false;
        this.btn.visible = false;
        this.kuso.visible = false;
        this.msg.visible = false;
    }
}