export default class PreloadScene extends Phaser.Scene{
    constructor(){
        super({key : 'preloadScene'});
    }

    preload(){
        //繪圖物件
        this.graphics = this.add.graphics();
		this.newGraphics = this.add.graphics();
        let w = 400, h = 50;
        let x = (canvasWidth - w) / 2;
        let y = (canvasHeight - h) / 2;
        /*
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        const loadingText = this.add.text(screenCenterX, screenCenterY, 'Loading: 0%').setOrigin(0.5);
        */
		//墊底長條 Phaser.Geom.Rectangle(x, y, width, height);
        var progressBar = new Phaser.Geom.Rectangle(x, y, w, h);
        //進度條
		var progressBarFill = new Phaser.Geom.Rectangle(x, y, w, h);

		this.graphics.fillStyle(0xffffff, 1);
		this.graphics.fillRectShape(progressBar);

		this.newGraphics.fillStyle(0x3587e2, 1);
		this.newGraphics.fillRectShape(progressBarFill);

        //讀取文字
		var loadingText = this.add.text(x*1.25,y*1.3,"Loading: ", { fontSize: '32px', fill: '#FFF' });

        //讀取及完成事件
        this.load.on('progress', this.updateBar, {newGraphics:this.newGraphics,loadingText:loadingText,x:x, y:y});
		this.load.on('complete', this.complete, {scene:this.scene});

        //開始載入遊戲素材
        //對話框
        this.load.image('dialog-box', 'assets/img/dialog-box.png');
        this.load.image('dialog-btn', 'assets/img/dialog-btn.png');
        this.load.image('dialog-kuso', 'assets/img/dialog-kuso.png');
        this.load.image('dialog-npc01', 'assets/img/dialog-npc01.png');

        this.load.image('bag', 'assets/img/bag.png');

        //Player
        this.load.spritesheet('kuso', 'assets/kuso3d-act_v3.png', { frameWidth: 240, frameHeight: 320 });


        if(gameLevel == 0){
            //荷之門-1
            this.load.image('bg-s101-1', 'assets/bg/s01/s101-1.png');
            this.load.image('bg-s101-2', 'assets/bg/s01/s101-2.png');
            this.load.image('bg-s101-3', 'assets/bg/s01/s101-3.png');
            this.load.image('bg-ground', 'assets/bg/s01/s1-ground.png');
            this.load.image('bg-green', 'assets/bg/s01/s1-green.png');
        
            this.load.image('pic01', 'assets/bg/s01/pic01.png');
            this.load.image('pic02', 'assets/bg/s01/pic02.png');
            this.load.image('pic03', 'assets/bg/s01/pic03.png');

            this.load.spritesheet('ani-s101-1', 'assets/ani/s01/s101-1.png', { frameWidth: 466, frameHeight: 454 });
            this.load.spritesheet('ani-s101-2', 'assets/ani/s01/s101-2.png', { frameWidth: 394, frameHeight: 868 });
            this.load.spritesheet('ani-s101-3', 'assets/ani/s01/s101-3.png', { frameWidth: 634, frameHeight: 1076 });
            this.load.spritesheet('ani-s101-fish', 'assets/ani/s01/s101-fish.png', { frameWidth: 1080, frameHeight: 640 });
            this.load.spritesheet('ani-s101-goldfish', 'assets/ani/s01/s101-goldfish.png', { frameWidth: 1080, frameHeight: 1080 });
            
            //荷之門-2
            this.load.image('bg-s102-1', 'assets/bg/s01/s102-1.png');
            this.load.image('bg-s102-2', 'assets/bg/s01/s102-2.png');
            this.load.image('bg-s102-3', 'assets/bg/s01/s102-3.png');

            this.load.spritesheet('ani-s102-1', 'assets/ani/s01/s102-1.png', { frameWidth: 640, frameHeight: 1080 });
            this.load.spritesheet('ani-s102-2', 'assets/ani/s01/s102-2.png', { frameWidth: 340, frameHeight: 822 });
            this.load.spritesheet('ani-s102-3', 'assets/ani/s01/s102-3.png', { frameWidth: 502, frameHeight: 580 });

            this.load.image('speak', 'assets/img/speak.png');
            this.load.image('flower', 'assets/img/flower.png');
        }
        else if(gameLevel == 1){
            //木之門-1

        }
        else if(gameLevel == 2){
            //竹之門-1
            this.load.image('bg-s301-1', 'assets/bg/S3/s301-1.png');
            this.load.image('bg-s301-2', 'assets/bg/S3/s301-2.png');

            this.load.spritesheet('fan01', 'assets/ani/S3/s30101.png', { frameWidth: 434, frameHeight: 300 });
            this.load.spritesheet('fan02', 'assets/ani/S3/s30102.png', { frameWidth: 646, frameHeight: 440 });
            this.load.spritesheet('fan03', 'assets/ani/S3/s30103.png', { frameWidth: 418, frameHeight: 278 });
            
            //竹之門-2
            this.load.spritesheet('fan04', 'assets/ani/S3/s30204.png', { frameWidth: 484, frameHeight: 366 });
            this.load.spritesheet('fan05', 'assets/ani/S3/s30205.png', { frameWidth: 550, frameHeight: 452 });

            this.load.image('bg-s302-1', 'assets/bg/S3/s302-1.png');
            this.load.image('bg-s302-2', 'assets/bg/S3/s302-2.png');
            this.load.image('bg-s302-3', 'assets/bg/S3/s302-3.png');
            this.load.image('bg-s302-4', 'assets/bg/S3/s302-4.png');
            this.load.image('bg-s302-5', 'assets/bg/S3/s302-5.png');
        }
        else if(gameLevel == 3){
            //五瑞之門
        }
    }

    updateBar(percentage) {
        this.newGraphics.clear();
        this.newGraphics.fillStyle(0x3587e2, 1);
        this.newGraphics.fillRectShape(new Phaser.Geom.Rectangle(this.x, this.y, percentage*400, 50));
                
        percentage = percentage * 100;
        this.loadingText.setText("Loading: " + percentage.toFixed(2) + "%");
        //console.log("P:" + percentage);
	}

	complete() {
		console.log("COMPLETE!");
        this.scene.start('scene1');
	}
}
