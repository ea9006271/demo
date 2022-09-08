import DialogBox from './dialogBox.js';
import Player from './player.js';
export default class Scene2 extends Phaser.Scene
{
    constructor()
    {
        super('scene2');
    }

    create()
    {
        let posX = imageWidth * gameScale / 2;
        let posY = imageHeight * gameScale / 2;
    
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s102-3').setScale(gameScale).setDepth(0);   //背景
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s102-1').setScale(gameScale).setDepth(100); //前景
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-s102-2').setScale(gameScale).setDepth(50);  //中景
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-ground').setScale(gameScale).setDepth(70);  //地板
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'bg-green').setScale(gameScale).setDepth(100);//光點

        let w = 224, h = 224;
        posX = (imageWidth-(w/2))*gameScale;
        posY =  (imageHeight-(h/2))*gameScale;
        var bag = this.add.tileSprite(posX, posY, w, h, 'bag').setScale(gameScale).setDepth(101);
        this.bagLight = this.add.tileSprite(posX, posY, w, h, 'bag-light').setScale(gameScale).setDepth(101);
        this.bagLight.visible = false;

        var ani201, ani202, ani203;
        w = 640, h = 1080;
        ani201 = this.physics.add.sprite((imageWidth/3.5)*gameScale, (imageHeight/2)*gameScale, 'ani-s102-1');
        ani201.setScale(gameScale).setDepth(55);
        this.anims.create({
            key: 'ani-s102-1',
            frames: this.anims.generateFrameNumbers('ani-s102-1', { start: 0, end: 15 }),
            frameRate: 5,
            repeat: -1
        });
        ani201.anims.play('ani-s102-1', true);

        w = 340, h = 822;
        ani202 = this.physics.add.sprite((imageWidth-(w/2))*gameScale, (imageHeight-(h/2))*gameScale, 'ani-s102-2');
        ani202.setScale(gameScale).setDepth(55);
        this.anims.create({
            key: 'ani-s102-2',
            frames: this.anims.generateFrameNumbers('ani-s102-2', { start: 0, end: 15 }),
            frameRate: 5,
            repeat: -1
        });
        ani202.anims.play('ani-s102-2', true);
   
        w = 502, h = 580;
        ani203 = this.physics.add.sprite((imageWidth-(w/2))*gameScale, (imageHeight-(h/2))*gameScale, 'ani-s102-3');
        ani203.setScale(gameScale).setDepth(100);
        this.anims.create({
            key: 'ani-s102-3',
            frames: this.anims.generateFrameNumbers('ani-s102-3', { start: 0, end: 15 }),
            frameRate: 7.5,
            repeat: -1
        });
        ani203.anims.play('ani-s102-3', true);

        player = new Player(this);
        player.sprite.setDepth(80);

        dialogBox = new DialogBox(this);
        w=130, h=110;
        posX = imageWidth/2*gameScale;
        posY = imageHeight/2*gameScale;
        this.btnSpeak = this.add.tileSprite(posX, posY, w, h, 'speak').setScale(gameScale).setDepth(100);
        //this.btnSpeak.visible = false;
        this.btnSpeak.setInteractive({
            useHandCursor: true
        }).on('pointerdown', () => dialogBox.start('s102-01'));

        w=286, h=344;
        posX = imageWidth/2*1.3*gameScale;
        posY = imageHeight/2*gameScale;
        this.btnFlower = this.add.tileSprite(posX, posY, w, h, 'flower').setScale(gameScale).setDepth(100);
        this.btnFlower.visible = false;
        this.btnFlower.setInteractive({
            useHandCursor: true
        }).on('pointerdown', () => this.btnFlower_Click());

        w=180, h=180;
        posX = imageWidth/2*gameScale;
        posY = imageHeight/2*gameScale;
        this.btnSmallbag = this.add.tileSprite(posX, posY, w, h, 'smallbag').setScale(gameScale).setDepth(100);
        this.btnSmallbag.visible = false;
        this.btnSmallbag.setInteractive({
            useHandCursor: true
        }).on('pointerdown', () => this.btnSmallbag_Click());
    }

    update(time, delta)
    {
        player.update();
        dialogBox.update(time, delta);
    }

    btnFlower_Click(){
        this.btnFlower.visible = false;
        //this.btnSmallbag.visible = true;
        dialogBox.start('s102-02');
    }

    btnSmallbag_Click(){
        this.bagLight.visible = true;
        this.time.delayedCall(500, () => {
            this.bagLight.visible = false;
        });
        this.time.delayedCall(1000, () => {
            this.scene.start('scene1');
        });        
    }
}