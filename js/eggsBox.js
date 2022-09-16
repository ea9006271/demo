export default class EggsBox{
    constructor(scene){
        this.scene = scene;

        let w = 1493, h = 203;
        let x = imageWidth*gameScale/2;
        let y = ((imageHeight-h/2)*0.95)*gameScale;
        this.box = scene.add.tileSprite(x, y, w, h, 'dialog-box-green').setScale(gameScale).setDepth(200);
        this.box.visible = false;

        w = 32, h = 24;
        x = imageWidth*gameScale/2 + (1493/2)*gameScale*0.85;
        y = (imageHeight-191*0.45)*gameScale;
        this.btn = scene.add.tileSprite(x, y, w, h, 'dialog-btn').setScale(gameScale).setDepth(200);
        this.btn.visible = false;
        this.btn.setInteractive({
            useHandCursor: true
        }).on('pointerdown', () => this.close());
        
        w = 225, h = 225;
        x = (imageWidth*gameScale/2)-(1493/2-w/2)*gameScale*1.05;
        y = ((imageHeight-h/2)*0.965)*gameScale;
        let fsize = gameScale * 30;
        let fwidth = gameScale * 1200;
        this.msg = scene.add.text(x*1.3, y*0.925, "", 
            { fontSize: fsize, fontFamily: 'cwTeXYen, sans-serif', 
            //{ fontSize: fsize, fontFamily: 'BpmfZihiOnly-R', 
            fontWeight: 'bold', fill: '#ffffff',
            wordWrap: {width: fwidth, useAdvancedWrap: true} }).setDepth(200);
        this.msg.visible = false;
    }
    start(id){
        this.result = story.filter(el => {
            return el['id'] === id;
        });
        if(this.result[0].content.length > 0){
            this.msg.text = this.result[0].content[0].words;
            this.box.visible = true;
            this.btn.visible = true;
            this.msg.visible = true;
        }
    }
        
    close(){
        this.box.visible = false;
        this.btn.visible = false;
        this.msg.visible = false;
    }
}