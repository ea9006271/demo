import DialogBox from './dialogBox.js';
import Player from './player.js';
export default class Scene302 extends Phaser.Scene
{
    constructor()
    {
        super('scene2');
    }

    create(){
        let posX = imageWidth * gameScale / 2;
        let posY = imageHeight * gameScale / 2;

        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s302-1').setScale(gameScale).setDepth(100);
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s302-2').setScale(gameScale).setDepth(0);
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s302-3').setScale(gameScale).setDepth(70);
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s302-4').setScale(gameScale).setDepth(50);
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s302-5').setScale(gameScale).setDepth(40);

        var bag, bagLight;
        let w = 224, h = 224;
        posX = (imageWidth-(w/2))*gameScale;
        posY =  (imageHeight-(h/2))*gameScale;
        bag = this.add.tileSprite(posX, posY, w, h, 'bag').setScale(gameScale).setDepth(100);
        bagLight = this.add.tileSprite(posX, posY, w, h, 'bag-light').setScale(gameScale).setDepth(100);
        bagLight.visible = false;

        var fan04, fan05;
        w = 484, h = 366;
        posX = (imageWidth/2)*0.95*gameScale;
        posY = (h/2)*1.5*gameScale;
        fan04 = this.physics.add.sprite(posX, posY, 'fan04');
        fan04.setScale(gameScale).setDepth(45);
        this.anims.create({
            key: 'fan04',
            frames: this.anims.generateFrameNumbers('fan04', { start: 0, end: 47 }),
            frameRate: 10,
            repeat: -1
        });
        fan04.anims.play('fan04', true);    

        w = 550, h = 452;
        posX = (imageWidth/2)*0.95*gameScale;
        posY = (imageHeight/2)*1.2*gameScale;
        fan05 = this.physics.add.sprite(posX, posY, 'fan04');
        fan05.setScale(gameScale).setDepth(55);
        this.anims.create({
            key: 'fan05',
            frames: this.anims.generateFrameNumbers('fan05', { start: 0, end: 47 }),
            frameRate: 10,
            repeat: -1
        });
        fan05.anims.play('fan05', true);    

        player = new Player(this);
        player.sprite.setDepth(80);

        dialogBox = new DialogBox(this);
        this.input.keyboard.once('keydown-ONE', () => {
            loadScene(this, 'scene1');
        });
        this.input.keyboard.once('keydown-TWO', () => {
            loadScene(this, 'scene2');
        });
    }

    update(time, delta)
    {
        player.update();
        dialogBox.update(time, delta);
    }
}