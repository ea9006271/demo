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

        var bag, bagLight;
        let w = 224, h = 224;
        posX = (imageWidth-(w/2))*gameScale;
        posY =  (imageHeight-(h/2))*gameScale;
        bag = this.add.tileSprite(posX, posY, w, h, 'bag').setScale(gameScale).setDepth(100);
        bagLight = this.add.tileSprite(posX, posY, w, h, 'bag-light').setScale(gameScale).setDepth(100);
        bagLight.visible = false;

        /*
        var clound03, clound04;
        w=1400,h=500;
        posX = (w/2)*0.65*gameScale;
        posY = (imageHeight/2)*1.5*gameScale;
        clound03 = this.physics.add.sprite(posX, posY, 'clound03');
        clound03.setScale(gameScale).setDepth(40);
        this.anims.create({
            key: 'clound03',
            frames: this.anims.generateFrameNumbers('clound03', { start: 0, end: 79 }),
            frameRate: 10,
            repeat: -1
        });
        clound03.anims.play('clound03', true);  
     */
        /*w=2400,h=300;
        posX = (imageWidth/2)*gameScale;
        posY = (imageHeight/2)*gameScale;
        clound04 = this.physics.add.sprite(posX, posY, 'clound04');
        clound04.setScale(gameScale).setDepth(70);
        this.anims.create({
            key: 'clound04',
            frames: this.anims.generateFrameNumbers('clound04', { start: 0, end: 39 }),
            frameRate: 10,
            repeat: -1
        });
        clound04.anims.play('clound04', true);  */
        
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