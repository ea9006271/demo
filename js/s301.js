import DialogBox from './dialogBox.js';
import Player from './player.js';
export default class Scene301 extends Phaser.Scene
{
    constructor()
    {
        super('scene1');
    }

    create()
    {
        let posX = imageWidth * gameScale / 2;
        let posY = imageHeight * gameScale / 2;
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s301-1').setScale(gameScale).setDepth(100);
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s301-2').setScale(gameScale).setDepth(0);

        var bag, bagLight;
        let w = 224, h = 224;
        posX = (imageWidth-(w/2))*gameScale;
        posY =  (imageHeight-(h/2))*gameScale;
        bag = this.add.tileSprite(posX, posY, w, h, 'bag').setScale(gameScale).setDepth(100);
        bagLight = this.add.tileSprite(posX, posY, w, h, 'bag-light').setScale(gameScale).setDepth(100);
        bagLight.visible = false;

        var fan01, fan02, fan03;
        w = 646, h = 440;
        posX = (imageWidth/2)*gameScale;
        posY = (h/2)*1.2*gameScale;
        fan02 = this.physics.add.sprite(posX, posY, 'fan02');
        fan02.setScale(gameScale).setDepth(55);
        this.anims.create({
            key: 'fan02',
            frames: this.anims.generateFrameNumbers('fan02', { start: 0, end: 47 }),
            frameRate: 10,
            repeat: -1
        });
        fan02.anims.play('fan02', true);        
        
        w = 434, h = 300;
        posX = posX - w*gameScale*0.75;
        posY = posY + ((h/2)*1.2*gameScale);
        fan01 = this.physics.add.sprite(posX, posY, 'fan01');
        fan01.setScale(gameScale).setDepth(55);
        this.anims.create({
            key: 'fan01',
            frames: this.anims.generateFrameNumbers('fan01', { start: 0, end: 47 }),
            frameRate: 10,
            repeat: -1
        });
        fan01.anims.play('fan01', true);

        w = 418, h = 278;
        posX = (imageWidth/2)*gameScale + w*gameScale*0.75;
        //posY = posY + ((h/2)*1.2*gameScale);
        fan03 = this.physics.add.sprite(posX, posY, 'fan03');
        fan03.setScale(gameScale).setDepth(55);
        this.anims.create({
            key: 'fan03',
            frames: this.anims.generateFrameNumbers('fan03', { start: 0, end: 47 }),
            frameRate: 10,
            repeat: -1
        });
        fan03.anims.play('fan03', true);    

        
        player = new Player(this, 90);
        player.sprite.setDepth(80);

        dialogBox = new DialogBox(this);
        this.input.keyboard.once('keydown-SPACE', () => {
            loadScene(this, 'scene2');
        });
    }

    update(time, delta)
    {
        player.update();
        dialogBox.update(time, delta);
    }
}