export default class StartBox{
    constructor(scene){
        this.scene = scene;
        let posX = imageWidth * gameScale / 2;
        let posY = imageHeight * gameScale / 2;
        this.bg = scene.add.tileSprite(posX, posY, imageWidth, imageHeight, 'startBackground').setScale(gameScale).setDepth(200);
        let w=540, h=650;
        this.tips = scene.add.tileSprite(posX, posY, w, h, 'startTips').setScale(gameScale).setDepth(210);

        w=210, h=60;
        posY = ((imageHeight + (650/2)) * gameScale / 2) + (h*gameScale);
        this.btnStart = scene.add.tileSprite(posX, posY, w, h, 'startBtn').setScale(gameScale).setDepth(220);
        this.btnStart.setInteractive({
            useHandCursor: true
        }).on('pointerdown', () => this.startGame());
    }
    startGame(){
        gameStatus = _status.start;
        this.bg.visible = false;
        this.tips.visible = false;
        this.btnStart.visible = false;
    }
}