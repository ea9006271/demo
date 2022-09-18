import DialogBox from './dialogBox.js';
import Player from './player.js';
import StartBox from './startBox.js';
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

        w=826, h=255;
        posX = 0;
        posY = ((imageHeight/2)-h)*gameScale;
        var clound1 = this.add.tileSprite(posX, posY, w, h, 'clound1').setScale(gameScale).setDepth(20);
        this.tweens.add({
            targets: clound1,
            x: { from: -100, to: (imageWidth*gameScale)+(w*gameScale) },
            ease: 'linear',
            duration: 15000,
            repeat: -1,
            yoyo: false
        });
        w=758, h=241;
        posX = 0;
        posY = h/2*gameScale;
        var clound2 = this.add.tileSprite(posX, posY, w, h, 'clound2').setScale(gameScale).setDepth(20);
        this.tweens.add({
            targets: clound2,
            x: { from: -100, to: (imageWidth*gameScale)+(w*gameScale) },
            ease: 'linear',
            duration: 10000,
            delay: 5000,
            repeat: -1,
            yoyo: false
        });
        //var clound1 = this.add.sprite(-400, 0, 'clound1');
        //var tween = this.add.tween(clound1);
        //tween.to({ x: 800 }, 5000, 'Linear', true, 0);
        /*var clound01, clound02;
        w=1500,h=550;
        posX = (w/2)*gameScale;
        posY = (h/2)*1.2*gameScale;
        clound01 = this.physics.add.sprite(posX, posY, 'clound01');
        clound01.setScale(gameScale).setDepth(20);
        this.anims.create({
            key: 'clound01',
            frames: this.anims.generateFrameNumbers('clound01', { start: 0, end: 39 }),
            frameRate: 10,
            repeat: -1
        });
        clound01.anims.play('clound01', true);  */
     
        /*w=1500,h=550;
        posX = (imageWidth-(w/2))*gameScale;
        posY = (h/2)*1.2*gameScale;
        clound02 = this.physics.add.sprite(posX, posY, 'clound02');
        clound02.setScale(gameScale).setDepth(20);
        this.anims.create({
            key: 'clound02',
            frames: this.anims.generateFrameNumbers('clound02', { start: 0, end: 79 }),
            frameRate: 5,
            repeat: -1
        });
        clound02.anims.play('clound02', true);*/
        
        player = new Player(this, 170);
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
        this.input.keyboard.once('keydown-FOUR', () => {
            loadScene(this, 'scene4');
        });

    }

    update(time, delta)
    {
        player.update();
        dialogBox.update(time, delta);
        
        //this.clound1.x += 5;
    }
    
}