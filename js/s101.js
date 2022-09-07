import DialogBox from './dialogBox.js';
import Player from './player.js';
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
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s101-4').setScale(gameScale).setDepth(70);  //地板
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-green').setScale(gameScale).setDepth(100);//光點
    
        let w=397, h=795;
        var pic0, pic1, pic2;
        pic0 = this.add.tileSprite(w*1.5*gameScale, h/2*gameScale, w, h, 'pic01').setScale(gameScale).setDepth(50);
        pic1 = this.add.tileSprite(((w*1.5)+(w*0.8))*gameScale, h/2*gameScale, w, h, 'pic02').setScale(gameScale).setDepth(50);
        pic2 = this.add.tileSprite(((w*1.5)+(2*w*0.8))*gameScale, h/2*gameScale, w, h, 'pic03').setScale(gameScale).setDepth(50);
    
        var ani01, ani02, ani03, anifish;
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
        
        player = new Player(this);
        player.sprite.setDepth(80);
    }

    update()
    {
        player.update();
    }
}