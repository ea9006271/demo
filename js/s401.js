import DialogBox from './dialogBox.js';
import Player from './player.js';
import StartBox from './startBox.js';
export default class Scene401 extends Phaser.Scene
{
    constructor()
    {
        super('scene1');
    }

    create()
    {
        let posX = imageWidth * gameScale / 2;
        let posY = imageHeight * gameScale / 2;
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s401-1').setScale(gameScale).setDepth(100);
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s401-2').setScale(gameScale).setDepth(0);

        var bag, bagLight;
        let w = 224, h = 224;
        posX = (imageWidth-(w/2))*gameScale;
        posY =  (imageHeight-(h/2))*gameScale;
        bag = this.add.tileSprite(posX, posY, w, h, 'bag').setScale(gameScale).setDepth(100);
        bagLight = this.add.tileSprite(posX, posY, w, h, 'bag-light').setScale(gameScale).setDepth(100);
        bagLight.visible = false;

        var zongzi1;
        w = 1920, h = 1080;
        posX = w/2*gameScale;
        posY = h/2*gameScale;
        zongzi1 = this.physics.add.sprite(posX, posY, 'zongzi1');
        zongzi1.setScale(gameScale).setDepth(55);
        this.anims.create({
            key: 'zongzi1',
            frames: this.anims.generateFrameNumbers('zongzi1', { start: 0, end: 63 }),
            frameRate: 10,
            repeat: -1
        });
        zongzi1.anims.play('zongzi1', true);
     
        var pest3a;
        w = 150, h = 150;
        posX = w/2*gameScale;
        posY = (imageHeight-(h))*gameScale;
        pest3a = this.physics.add.sprite(posX, posY, 'pest3a');
        pest3a.setScale(gameScale).setDepth(55);
        this.anims.create({
            key: 'pest3a',
            frames: this.anims.generateFrameNumbers('pest3a', { start: 0, end: 15 }),
            frameRate: 10,
            repeat: -1
        });
        pest3a.anims.play('pest3a', true);

        var pest5a;
        w = 110, h = 80;
        posX = imageWidth/2*1.13*gameScale;
        posY = (imageHeight-h)*0.9*gameScale;
        pest5a = this.physics.add.sprite(posX, posY, 'pest5a');
        pest5a.setScale(gameScale).setDepth(55);
        this.anims.create({
            key: 'pest5a',
            frames: this.anims.generateFrameNumbers('pest5a', { start: 0, end: 15 }),
            frameRate: 10,
            repeat: -1
        });
        pest5a.anims.play('pest5a', true);

        var pest4a;
        w = 120, h = 140;
        posX = imageWidth/2*1.3*gameScale;
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
        posX = imageWidth*0.85*gameScale;
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

        player = new Player(this, 45);
        player.sprite.setDepth(80);

        if(gameStatus == _status.init){
            var startBox = new StartBox(this);
        }

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