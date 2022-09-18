import DialogBox from './dialogBox.js';
import Player from './player.js';
export default class Scene204 extends Phaser.Scene
{
    constructor()
    {
        super('scene4');
    }

    create()
    {
        let posX = imageWidth * gameScale / 2;
        let posY = imageHeight * gameScale / 2;
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s204-1').setScale(gameScale).setDepth(100);
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s204-2').setScale(gameScale).setDepth(50);
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s204-3').setScale(gameScale).setDepth(0);

        var bag, bagLight;
        let w = 224, h = 224;
        posX = (imageWidth-(w/2))*gameScale;
        posY =  (imageHeight-(h/2))*gameScale;
        bag = this.add.tileSprite(posX, posY, w, h, 'bag').setScale(gameScale).setDepth(100);
        bagLight = this.add.tileSprite(posX, posY, w, h, 'bag-light').setScale(gameScale).setDepth(100);
        bagLight.visible = false;

        w=1089, h=250;
        posX = w/2*gameScale;
        posY = (imageHeight-(h/2))*gameScale;
        var clound4 = this.add.tileSprite(posX, posY, w, h, 'clound4').setScale(gameScale).setDepth(90);

        w=758, h=241;
        posX = 0;
        posY = h/2*gameScale;
        var clound2 = this.add.tileSprite(posX, posY, w, h, 'clound2').setScale(gameScale).setDepth(90);
        this.tweens.add({
            targets: clound2,
            x: { from: -100, to: (imageWidth*gameScale)+(w*gameScale) },
            ease: 'linear',
            duration: 10000,
            delay: 500,
            repeat: -1,
            yoyo: false
        });
        
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