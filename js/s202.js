import DialogBox from './dialogBox.js';
import Player from './player.js';
export default class Scene202 extends Phaser.Scene
{
    constructor()
    {
        super('scene2');
    }

    create()
    {
        let posX = imageWidth * gameScale / 2;
        let posY = imageHeight * gameScale / 2;
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s202-1').setScale(gameScale).setDepth(50);
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s202-2').setScale(gameScale).setDepth(0);

        var bag, bagLight, dougong;
        let w = 224, h = 224;
        posX = (imageWidth-(w/2))*gameScale;
        posY =  (imageHeight-(h/2))*gameScale;
        bag = this.add.tileSprite(posX, posY, w, h, 'bag').setScale(gameScale).setDepth(100);
        bagLight = this.add.tileSprite(posX, posY, w, h, 'bag-light').setScale(gameScale).setDepth(100);
        bagLight.visible = false;

        w=210, h=216;
        posX = (imageWidth-(w/2)*2)*gameScale;
        posY =  h/2*1.5*gameScale;
        dougong = this.add.tileSprite(posX, posY, w, h, 'dougong').setScale(gameScale).setDepth(100);

        w=1089, h=250;
        posX = (imageWidth-(w/2))*gameScale;
        posY = (imageHeight-(h/2))*gameScale;
        var clound4 = this.add.tileSprite(posX, posY, w, h, 'clound4').setScale(gameScale).setDepth(70);
        
        var clound3;
        w=700,h=450;
        posX = w/2*0.85*gameScale;
        posY = (imageHeight/2)*1.5*gameScale;
        clound3 = this.physics.add.sprite(posX, posY, 'clound3');
        clound3.setScale(gameScale).setDepth(40);
        this.anims.create({
            key: 'clound3',
            frames: this.anims.generateFrameNumbers('clound3', { start: 0, end: 63 }),
            frameRate: 15,
            repeat: -1
        });
        clound3.anims.play('clound3', true);  
             
        player = new Player(this, 170);
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
        this.input.keyboard.once('keydown-FOUR', () => {
            loadScene(this, 'scene4');
        });
    }

    update(time, delta)
    {
        player.update();
        dialogBox.update(time, delta);
    }
}