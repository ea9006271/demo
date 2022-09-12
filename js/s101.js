import DialogBox from './dialogBox.js';
import Player from './player.js';
export default class Scene1 extends Phaser.Scene
{
    constructor()
    {
        super('scene1');
    }
    /*init(data)
    {
        //console.log('init', data);
        this.status = data.status;
    }*/

    create()
    {
        let posX = imageWidth * gameScale / 2;
        let posY = imageHeight * gameScale / 2;
    
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s101-3').setScale(gameScale).setDepth(0);   //背景
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s101-1').setScale(gameScale).setDepth(100); //前景
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s101-2').setScale(gameScale).setDepth(50);  //中景
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-ground').setScale(gameScale).setDepth(70);  //地板
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-green').setScale(gameScale).setDepth(100);//光點
    
        var pic1, pic2, pic3, bag, bagLight;
        let w=323, h=802;
        posX = w*1.5*gameScale;
        posY = h/2*gameScale;
        pic1 = this.add.tileSprite(posX, posY, w, h, 'pic01').setScale(gameScale).setDepth(50);
        w=326, h=814;
        posX = ((323*1.5)+(w*0.85))*gameScale;
        posY = h/2*gameScale;
        pic2 = this.add.tileSprite(posX, posY, w, h, 'pic02').setScale(gameScale).setDepth(50);
        w=496, h=755;
        posX = ((323*1.5)+(326*2))*gameScale;
        posY = h/2*gameScale;
        pic3 = this.add.tileSprite(posX, posY, w, h, 'pic03').setScale(gameScale).setDepth(50);
    
        w = 224, h = 224;
        posX = (imageWidth-(w/2))*gameScale;
        posY =  (imageHeight-(h/2))*gameScale;
        bag = this.add.tileSprite(posX, posY, w, h, 'bag').setScale(gameScale).setDepth(100);
        bagLight = this.add.tileSprite(posX, posY, w, h, 'bag-light').setScale(gameScale).setDepth(100);
        bagLight.visible = false;

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
        anifish.setScale(gameScale).setDepth(80);
        this.anims.create({
            key: 'ani-s101-fish',
            frames: this.anims.generateFrameNumbers('ani-s101-fish', { start: 0, end: 79 }),
            frameRate: 10,
            repeat: -1
        });
        anifish.anims.play('ani-s101-fish', true);

        w=1080, h=1080;
        anigoldfish = this.physics.add.sprite(((imageWidth/2)-w/2)*gameScale, (imageHeight-(h/2))*gameScale, 'ani-s101-goldfish');
        anigoldfish.setScale(gameScale).setDepth(80);
        this.anims.create({
            key: 'ani-s101-goldfish',
            frames: this.anims.generateFrameNumbers('ani-s101-goldfish', { start: 0, end: 79 }),
            frameRate: 10,
            repeat: -1
        });
        anigoldfish.anims.play('ani-s101-goldfish', true);
        
        player = new Player(this);
        player.sprite.setDepth(80);

        dialogBox = new DialogBox(this);
        if(gameStatus == 'init'){
            //進入場景3秒顯示對話框
            this.time.delayedCall(3000, () => {
                dialogBox.start('s101-01');
            });     
        }
        else if(gameStatus == 'paint'){
            dialogBox.start('s103-01');
        }
    }

    update(time, delta)
    {
        player.update();
        dialogBox.update(time, delta);
    }
}