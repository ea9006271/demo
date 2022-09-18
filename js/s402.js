import DialogBox from './dialogBox.js';
import Player from './player.js';
export default class Scene402 extends Phaser.Scene
{
    constructor()
    {
        super('scene2');
    }

    create(){
        let posX = imageWidth * gameScale / 2;
        let posY = imageHeight * gameScale / 2;

        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s402-1').setScale(gameScale).setDepth(100);
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s402-2').setScale(gameScale).setDepth(0);

        var bag, bagLight;
        let w = 224, h = 224;
        posX = (imageWidth-(w/2))*gameScale;
        posY =  (imageHeight-(h/2))*gameScale;
        bag = this.add.tileSprite(posX, posY, w, h, 'bag').setScale(gameScale).setDepth(100);
        bagLight = this.add.tileSprite(posX, posY, w, h, 'bag-light').setScale(gameScale).setDepth(100);
        bagLight.visible = false;

        var zongzi2;
        w = 1920, h = 1080;
        posX = w/2*gameScale;
        posY = h/2*gameScale;
        zongzi2 = this.physics.add.sprite(posX, posY, 'zongzi2');
        zongzi2.setScale(gameScale).setDepth(55);
        this.anims.create({
            key: 'zongzi2',
            frames: this.anims.generateFrameNumbers('zongzi2', { start: 0, end: 63 }),
            frameRate: 10,
            repeat: -1
        });
        zongzi2.anims.play('zongzi2', true);

        var pest4a;
        w = 120, h = 140;
        posX = imageWidth/2*0.65*gameScale;
        posY = (imageHeight-h)*0.85*gameScale;
        pest4a = this.physics.add.sprite(posX, posY, 'pest4a');
        pest4a.setScale(gameScale).setDepth(100);
        this.anims.create({
            key: 'pest4a',
            frames: this.anims.generateFrameNumbers('pest4a', { start: 0, end: 15 }),
            frameRate: 10,
            repeat: -1
        });
        pest4a.anims.play('pest4a', true);

        var pest6a;
        w = 100, h = 90;
        posX = imageWidth/2*gameScale;
        posY = (imageHeight-h)*0.9*gameScale;
        pest6a = this.physics.add.sprite(posX, posY, 'pest6a');
        pest6a.setScale(gameScale).setDepth(55);
        this.anims.create({
            key: 'pest6a',
            frames: this.anims.generateFrameNumbers('pest6a', { start: 0, end: 15 }),
            frameRate: 10,
            repeat: -1
        });
        pest6a.anims.play('pest6a', true);

        var pest7a;
        w = 90, h = 150;
        posX = imageWidth/2*1.525*gameScale;
        posY = (imageHeight-(h/2))*gameScale;
        pest7a = this.physics.add.sprite(posX, posY, 'pest7a');
        pest7a.setScale(gameScale).setDepth(100);
        this.anims.create({
            key: 'pest7a',
            frames: this.anims.generateFrameNumbers('pest7a', { start: 0, end: 15 }),
            frameRate: 10,
            repeat: -1
        });
        pest7a.anims.play('pest7a', true);

        var pest8a;
        w = 220, h = 130;
        posX = (imageWidth-(w/8))*gameScale;
        posY = (imageHeight-(h/8))*gameScale;
        pest8a = this.physics.add.sprite(posX, posY, 'pest8a');
        pest8a.setScale(gameScale).setDepth(100);
        this.anims.create({
            key: 'pest8a',
            frames: this.anims.generateFrameNumbers('pest8a', { start: 0, end: 15 }),
            frameRate: 10,
            repeat: -1
        });
        pest8a.anims.play('pest8a', true);
        
        player = new Player(this);
        player.sprite.setDepth(80);

        dialogBox = new DialogBox(this);
        this.input.keyboard.once('keydown-ONE', () => {
            loadScene(this, 'scene1');
        });
        this.input.keyboard.once('keydown-TWO', () => {
            loadScene(this, 'scene2');
        });
        this.input.keyboard.once('keydown-THREE', () => {
            loadScene(this, 'scene3');
        });
    }

    update(time, delta)
    {
        player.update();
        dialogBox.update(time, delta);
    }
}