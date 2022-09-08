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

        var ani201, ani202, ani203;
        let w = 640, h = 1080;
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
    }
}