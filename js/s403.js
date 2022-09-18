import DialogBox from './dialogBox.js';
import Player from './player.js';
export default class Scene403 extends Phaser.Scene
{
    constructor()
    {
        super('scene3');
    }

    create(){
        let posX = imageWidth * gameScale / 2;
        let posY = imageHeight * gameScale / 2;

        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s403-1').setScale(gameScale).setDepth(100);
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s403-2').setScale(gameScale).setDepth(50);
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s403-3').setScale(gameScale).setDepth(0);

        var bag, bagLight;
        let w = 224, h = 224;
        posX = (imageWidth-(w/2))*gameScale;
        posY =  (imageHeight-(h/2))*gameScale;
        bag = this.add.tileSprite(posX, posY, w, h, 'bag').setScale(gameScale).setDepth(100);
        bagLight = this.add.tileSprite(posX, posY, w, h, 'bag-light').setScale(gameScale).setDepth(100);
        bagLight.visible = false;

        w=319, h=236;
        posX = imageWidth/2*0.65*gameScale;
        posY = imageHeight/2*0.8*gameScale;
        this.add.tileSprite(posX, posY, w, h, 's403-p1').setScale(gameScale).setDepth(100);
        w=128, h=304;
        posX += (((319+w)/2)*0.9*gameScale);
        let posY2 = posY + ((h-236)*gameScale);
        this.add.tileSprite(posX, posY2, w, h, 's403-p2').setScale(gameScale).setDepth(100);
        w=215, h=207;
        posX += (((128+w)/2)*0.9*gameScale);
        posY2 = posY + ((h-236)*gameScale);
        this.add.tileSprite(posX, posY2, w, h, 's403-p3').setScale(gameScale).setDepth(100);
        w=216, h=206;
        posX += (((215+w)/2)*0.8*gameScale);
        posY2 = posY + ((h-236)*gameScale);
        this.add.tileSprite(posX, posY2, w, h, 's403-p4').setScale(gameScale).setDepth(100);
        w=153, h=303;
        posX += (((215+w)/2)*0.9*gameScale);
        posY2 = posY + ((h-236)*gameScale);
        this.add.tileSprite(posX, posY2, w, h, 's403-p5').setScale(gameScale).setDepth(100);
        w=178, h=303;
        posX += (((215+w)/2)*0.85*gameScale);
        posY2 = posY + ((h-236)*gameScale);
        this.add.tileSprite(posX, posY2, w, h, 's403-p6').setScale(gameScale).setDepth(100);

        var pest3b;
        w = 150, h = 150;
        posX = w*3*gameScale;
        posY = h*2*gameScale;
        pest3b = this.physics.add.sprite(posX, posY, 'pest3b');
        pest3b.setScale(gameScale).setDepth(100);
        this.anims.create({
            key: 'pest3b',
            frames: this.anims.generateFrameNumbers('pest3b', { start: 0, end: 15 }),
            frameRate: 10,
            repeat: -1
        });
        pest3b.anims.play('pest3b', true);

        var pest5b;
        w = 110, h = 80;
        posX = (imageWidth/2)*gameScale;
        posY = h*gameScale;
        pest5b = this.physics.add.sprite(posX, posY, 'pest5b');
        pest5b.setScale(gameScale).setDepth(100);
        this.anims.create({
            key: 'pest5b',
            frames: this.anims.generateFrameNumbers('pest5b', { start: 0, end: 15 }),
            frameRate: 10,
            repeat: -1
        });
        pest5b.anims.play('pest5b', true);

        var pest5a;
        w = 110, h = 80;
        posX = (imageWidth-(w/2))*gameScale;
        posY = (imageHeight/2)*gameScale;
        pest5a = this.physics.add.sprite(posX, posY, 'pest5a');
        pest5a.setScale(gameScale).setDepth(50);
        this.anims.create({
            key: 'pest5a',
            frames: this.anims.generateFrameNumbers('pest5a', { start: 0, end: 15 }),
            frameRate: 10,
            repeat: -1
        });
        pest5a.anims.play('pest5a', true);

        var pest8b;
        w = 130, h = 220;
        posX = (imageWidth-(w/2))*gameScale;
        posY = ((imageHeight/2)+(imageHeight/4))*gameScale;
        pest8b = this.physics.add.sprite(posX, posY, 'pest8b');
        pest8b.setScale(gameScale).setDepth(50);
        this.anims.create({
            key: 'pest8b',
            frames: this.anims.generateFrameNumbers('pest8b', { start: 0, end: 15 }),
            frameRate: 10,
            repeat: -1
        });
        pest8b.anims.play('pest8b', true);

        var pest4b;
        w = 120, h = 140;
        posX = imageWidth/2*1.5*gameScale;
        posY = (imageHeight-h)*gameScale;
        pest4b = this.physics.add.sprite(posX, posY, 'pest4b');
        pest4b.setScale(gameScale).setDepth(50);
        this.anims.create({
            key: 'pest4b',
            frames: this.anims.generateFrameNumbers('pest4b', { start: 0, end: 15 }),
            frameRate: 10,
            repeat: -1
        });
        pest4b.anims.play('pest4b', true);
        
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