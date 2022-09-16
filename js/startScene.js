export default class StartScene extends Phaser.Scene
{
    constructor()
    {
        super('startScene');
    }

    create()
    {
        let posX = imageWidth * gameScale / 2;
        let posY = imageHeight * gameScale / 2;
        this.add.tileSprite(posX, posY, imageWidth, imageHeight, 'PlayBackground').setScale(gameScale).setDepth(0);
        let w=540, h=650;
        this.add.tileSprite(posX, posY, w, h, 'PlayTips').setScale(gameScale).setDepth(10);
        
        w=210, h=60;
        posY = ((imageHeight + (650/2)) * gameScale / 2) + (h*gameScale);
        var btnStart = this.add.tileSprite(posX, posY, w, h, 'PlayStart').setScale(gameScale).setDepth(20);
        btnStart.setInteractive({
            useHandCursor: true
        }).on('pointerdown', () => loadScene(this, 'scene1'));
    }

}