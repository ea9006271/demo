import DialogBox from './dialogBox.js';
import Player from './player.js';
import StartBox from './startBox.js';
import EggsBox from './eggsBox.js';
export default class Scene1 extends Phaser.Scene
{
    constructor()
    {
        super('scene1');
    }

    create()
    {
        let posX = imageWidth * gameScale / 2;
        let posY = imageHeight * gameScale / 2;
    
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s101-3').setScale(gameScale).setDepth(0);   //背景
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s101-1').setScale(gameScale).setDepth(100); //前景
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s101-2').setScale(gameScale).setDepth(50);  //中景
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-ground').setScale(gameScale).setDepth(70);  //地板
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-green').setScale(gameScale).setDepth(100);//光點
    
        var pic1, pic2, pic3, pic1_fin, pic2_fin, pic3_fin, bag;
        let w=323, h=802;
        posX = w*1.5*gameScale;
        posY = h/2*gameScale;
        pic1 = this.add.tileSprite(posX, posY, w, h, 'pic01').setScale(gameScale).setDepth(50);
        pic1_fin = this.add.tileSprite(posX, posY, w, h, 'pic01-fin').setScale(gameScale).setDepth(50);
        pic1_fin.visible = false;
        //posX = w*1.5*gameScale;
        posY = h/2*0.78*gameScale;
        this.eye1 = this.add.tileSprite(posX, posY, 140, 114, 'eye').setScale(gameScale).setDepth(100);
        this.eye1.visible = false;
        this.eye1.setInteractive({
            useHandCursor: true
        }).on('pointerdown', () => this.eyeClick(1));

        w=326, h=814;
        posX = ((323*1.5)+(w*0.85))*gameScale;
        posY = h/2*gameScale;
        pic2 = this.add.tileSprite(posX, posY, w, h, 'pic02').setScale(gameScale).setDepth(50);
        pic2_fin = this.add.tileSprite(posX, posY, w, h, 'pic02-fin').setScale(gameScale).setDepth(50);
        pic2_fin.visible = false;
        //posX = w*1.5*gameScale;
        posY = h/2*0.96*gameScale;
        this.eye2 = this.add.tileSprite(posX, posY, 140, 114, 'eye').setScale(gameScale).setDepth(100);
        this.eye2.visible = false;
        this.eye2.setInteractive({
            useHandCursor: true
        }).on('pointerdown', () => this.eyeClick(2));

        w=496, h=755;
        posX = ((323*1.5)+(326*2))*gameScale;
        posY = h/2*gameScale;
        pic3 = this.add.tileSprite(posX, posY, w, h, 'pic03').setScale(gameScale).setDepth(50);
        pic3_fin = this.add.tileSprite(posX, posY, w, h, 'pic03-fin').setScale(gameScale).setDepth(50);
        pic3_fin.visible = false;
        //posX = w*1.5*gameScale;
        posY = h/2*1.05*gameScale;
        this.eye3 = this.add.tileSprite(posX, posY, 140, 114, 'eye').setScale(gameScale).setDepth(100);
        this.eye3.visible = false;
        this.eye3.setInteractive({
            useHandCursor: true
        }).on('pointerdown', () => this.eyeClick(3));

        w = 224, h = 224;
        posX = (imageWidth-(w/2))*gameScale;
        posY =  (imageHeight-(h/2))*gameScale;
        bag = this.add.tileSprite(posX, posY, w, h, 'bag').setScale(gameScale).setDepth(100);
        this.bagLight = this.add.tileSprite(posX, posY, w, h, 'bag-light').setScale(gameScale).setDepth(100);
        this.bagLight.visible = false;

        w=180, h=180;
        posX = imageWidth/2*gameScale;
        posY = imageHeight/2*gameScale;
        this.smallbag2 = this.add.tileSprite(posX, posY, w, h, 'smallbag2').setScale(gameScale).setDepth(100);
        this.smallbag2.visible = false;

        var ani01, ani02, ani03, anifish, anigoldfish;
        w=466;
        h=454;
        ani01 = this.physics.add.sprite((imageWidth/3.3)*gameScale, (imageHeight-(h/2))*gameScale, 'ani-s101-1');
        ani01.setScale(gameScale).setDepth(55);
        this.anims.create({
            key: 'ani-s101-1',
            frames: this.anims.generateFrameNumbers('ani-s101-1', { start: 0, end: 15 }),
            frameRate: 7.5,
            repeat: -1
        });
        ani01.anims.play('ani-s101-1', true);
        
        w=394;
        h=868;
        ani02 = this.physics.add.sprite((w/2)*gameScale, (imageHeight-(h/2))*gameScale, 'ani-s101-2');
        ani02.setScale(gameScale).setDepth(55);
        this.anims.create({
            key: 'ani-s101-2',
            frames: this.anims.generateFrameNumbers('ani-s101-2', { start: 0, end: 11 }),
            frameRate: 5,
            repeat: -1
        });
        ani02.anims.play('ani-s101-2', true);
    
        w=634;
        h=1076;
        ani03 = this.physics.add.sprite((imageWidth-(w/2))*gameScale, (imageHeight-(h/2))*gameScale, 'ani-s101-3');
        ani03.setScale(gameScale).setDepth(55);
        this.anims.create({
            key: 'ani-s101-3',
            frames: this.anims.generateFrameNumbers('ani-s101-3', { start: 0, end: 15 }),
            frameRate: 5,
            repeat: -1
        });
        ani03.anims.play('ani-s101-3', true);
    
        w=1080, h=640;
        anifish = this.physics.add.sprite((imageWidth-w/2)*gameScale, (imageHeight-(h/2))*gameScale, 'ani-s101-fish');
        anifish.setScale(gameScale).setDepth(45);
        this.anims.create({
            key: 'ani-s101-fish',
            frames: this.anims.generateFrameNumbers('ani-s101-fish', { start: 0, end: 79 }),
            frameRate: 10,
            repeat: -1
        });
        anifish.anims.play('ani-s101-fish', true);

        w=1080, h=1080;
        anigoldfish = this.physics.add.sprite(((imageWidth/2)-w/2)*gameScale, (imageHeight-(h/2))*gameScale, 'ani-s101-goldfish');
        anigoldfish.setScale(gameScale).setDepth(45);
        this.anims.create({
            key: 'ani-s101-goldfish',
            frames: this.anims.generateFrameNumbers('ani-s101-goldfish', { start: 0, end: 79 }),
            frameRate: 10,
            repeat: -1
        });
        anigoldfish.anims.play('ani-s101-goldfish', true);
        
        this.audioClick = this.sound.add('audioClick');
        this.audioBag = this.sound.add('audioBag');

        player = new Player(this);
        player.sprite.setDepth(80);

        this.checkPic1 = checkGameLog('puzzle-1');
        this.checkPic2 = checkGameLog('puzzle-2');
        this.checkPic3 = checkGameLog('puzzle-3');

        this.eggsBox = new EggsBox(this);
        dialogBox = new DialogBox(this);
        if(gameStatus == _status.init){
            var startBox = new StartBox(this);
        }
        else if(gameStatus == _status.paint){
            dialogBox.start('s103-01');
        }
        else if(gameStatus == _status.puzzle){
            if(this.checkPic1){
                pic1.visible = false;
                pic1_fin.visible = true;
            }
            if(this.checkPic2){
                pic2.visible = false;
                pic2_fin.visible = true;
            }
            if(this.checkPic3){
                pic3.visible = false;
                pic3_fin.visible = true;
            }
            if(this.checkPic1 && this.checkPic2 && this.checkPic3){
                dialogBox.start('s103-02');
            }

        }
    }

    update(time, delta)
    {
        player.update();
        dialogBox.update(time, delta);
        if(gameStatus == _status.start){
            gameStatus = _status.playing;
            //3秒顯示對話框
            this.time.delayedCall(3000, () => {
                dialogBox.start('s101-01');
            });     
        }
        else{
            this.eye1.visible = Math.abs(player.sprite.x-this.eye1.x) < 50;
            this.eye2.visible = Math.abs(player.sprite.x-this.eye2.x) < 50;

            //this.eye1.visible = this.checkPic1 ? false : Math.abs(player.sprite.x-this.eye1.x) < 50;
            //this.eye2.visible = this.checkPic2 ? false : Math.abs(player.sprite.x-this.eye2.x) < 50;
            //this.eye3.visible = this.checkPic3 ? false : Math.abs(player.sprite.x-this.eye3.x) < 50;
        }
    }
    eyeClick(key)
    {
        this.audioClick.play();
        switch(key){
            case 1:
                //location.href = '3/puzzle01.html';
                this.eggsBox.start('eggs-s1-01');
                break;
            case 2:
                this.eggsBox.start('eggs-s1-02');
                //location.href = '3/puzzle02.html';
                break;
            case 3:
                //location.href = '3/puzzle03.html';
                break;
        }
    }
    getSmallbag2()
    {
        this.audioBag.play();
        this.smallbag2.visible = true;
        this.bagLight.visible = true;
        this.time.delayedCall(1000, () => {
            this.bagLight.visible = false;
            this.smallbag2.visible = false;
            this.time.delayedCall(1000, () => {
                dialogBox.start('s103-03');
            });                 
        });
    }
}