import DialogBox from './dialogBox.js';
import Player from './player.js';
export default class Scene201 extends Phaser.Scene
{
    constructor()
    {
        super('scene1');
    }

    create()
    {
        let posX = imageWidth * gameScale / 2;
        let posY = imageHeight * gameScale / 2;
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s201-1').setScale(gameScale).setDepth(100);
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s201-2').setScale(gameScale).setDepth(50);
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s201-3').setScale(gameScale).setDepth(0);

        var bag, bagLight;
        let w = 224, h = 224;
        posX = (imageWidth-(w/2))*gameScale;
        posY =  (imageHeight-(h/2))*gameScale;
        bag = this.add.tileSprite(posX, posY, w, h, 'bag').setScale(gameScale).setDepth(100);
        bagLight = this.add.tileSprite(posX, posY, w, h, 'bag-light').setScale(gameScale).setDepth(100);
        bagLight.visible = false;

        var clound01, clound02;
        w=1500,h=550;
        posX = (imageWidth/2)*gameScale;
        posY = (h/2)*1.2*gameScale;
        clound01 = this.physics.add.sprite(posX, posY, 'clound01');
        clound01.setScale(gameScale).setDepth(20);
        this.anims.create({
            key: 'clound01',
            frames: this.anims.generateFrameNumbers('clound01', { start: 0, end: 39 }),
            frameRate: 10,
            repeat: -1
        });
        clound01.anims.play('clound01', true);  
        
        
        player = new Player(this, 170);
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