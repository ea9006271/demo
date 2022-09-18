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
        this.load.image('dialog-npc02', 'assets/img/dialog-npc02.png');
        this.load.image('dialog-npc03', 'assets/img/dialog-npc03.png');
        this.load.image('dialog-npc04', 'assets/img/dialog-npc04.png');
        this.load.image('dialog-box-green', 'assets/img/dialog-box-green.png');

        this.load.image('bag', 'assets/img/bag.png');
        this.load.image('bag-light', 'assets/img/bag-light.png');

        //Player
        this.load.spritesheet('kuso', 'assets/kuso3d-act_v3.png', { frameWidth: 240, frameHeight: 320 });
        this.load.image('btnRight', 'assets/img/btnRight.png');
        this.load.image('btnLeft', 'assets/img/btnLeft.png');
        this.load.image('startBackground', 'assets/img/startBackground.png');
        this.load.image('startTips', 'assets/img/startTips.png');
        this.load.image('startBtn', 'assets/img/startBtn.png');

        //音效
        this.load.audio('audioClick', ['assets/sound/click.mp3']);
        this.load.audio('audioBag', ['assets/sound/bag.mp3']);

        switch(gameLevel){
            case _level.L1:
                //荷之門-1
                this.load.image('bg-s101-1', 'assets/bg/s01/s101-1.png');
                this.load.image('bg-s101-2', 'assets/bg/s01/s101-2.png');
                this.load.image('bg-s101-3', 'assets/bg/s01/s101-3.png');
                this.load.image('bg-ground', 'assets/bg/s01/s1-ground.png');
                this.load.image('bg-green', 'assets/bg/s01/s1-green.png');
            
                this.load.image('pic01', 'assets/bg/s01/pic01.png');
                this.load.image('pic02', 'assets/bg/s01/pic02.png');
                this.load.image('pic03', 'assets/bg/s01/pic03.png');
                this.load.image('pic01-fin', 'assets/bg/s01/pic01-fin.png');
                this.load.image('pic02-fin', 'assets/bg/s01/pic02-fin.png');
                this.load.image('pic03-fin', 'assets/bg/s01/pic03-fin.png');

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
                this.load.image('smallbag', 'assets/img/smallbag.png');//質感錦囊
                this.load.image('eye', 'assets/img/eye.png');
                this.load.image('smallbag2', 'assets/img/smallbag2.png');//比例錦囊
                break;
            case _level.L2:
                //木之門-1
                this.load.image('bg-s201-1', 'assets/bg/s02/s201-1.png');
                this.load.image('bg-s201-2', 'assets/bg/s02/s201-2.png');
                this.load.image('bg-s201-3', 'assets/bg/s02/s201-3.png');

                this.load.image('clound1', 'assets/ani/s02/clound1.png');
                this.load.image('clound2', 'assets/ani/s02/clound2.png');
                this.load.image('clound4', 'assets/ani/s02/clound4.png');
                
                this.load.spritesheet('clound3', 'assets/ani/s02/clound3.png', { frameWidth: 700, frameHeight: 450 });
                this.load.spritesheet('clound5', 'assets/ani/s02/clound5.png', { frameWidth: 600, frameHeight: 300 });

                //木之門-2
                this.load.image('bg-s202-1', 'assets/bg/s02/s202-1.png');
                this.load.image('bg-s202-2', 'assets/bg/s02/s202-2.png');
                this.load.image('dougong', 'assets/img/dougong.png');
                //木之門-3
                this.load.image('bg-s203-1', 'assets/bg/s02/s203-1.png');
                this.load.image('bg-s203-2', 'assets/bg/s02/s203-2.png');
                //木之門-4
                this.load.image('bg-s204-1', 'assets/bg/s02/s204-1.png');
                this.load.image('bg-s204-2', 'assets/bg/s02/s204-2.png');
                this.load.image('bg-s204-3', 'assets/bg/s02/s204-3.png');
                break;
            case _level.L3:
                //竹之門-1
                this.load.image('bg-s301-1', 'assets/bg/s03/s301-1.png');
                this.load.image('bg-s301-2', 'assets/bg/s03/s301-2.png');

                this.load.spritesheet('fan01', 'assets/ani/s03/s30101.png', { frameWidth: 434, frameHeight: 300 });
                this.load.spritesheet('fan02', 'assets/ani/s03/s30102.png', { frameWidth: 646, frameHeight: 440 });
                this.load.spritesheet('fan03', 'assets/ani/s03/s30103.png', { frameWidth: 418, frameHeight: 278 });
                
                //竹之門-2
                this.load.spritesheet('fan04', 'assets/ani/s03/s30204.png', { frameWidth: 484, frameHeight: 366 });
                this.load.spritesheet('fan05', 'assets/ani/s03/s30205.png', { frameWidth: 550, frameHeight: 452 });

                this.load.image('bg-s302-1', 'assets/bg/s03/s302-1.png');
                this.load.image('bg-s302-2', 'assets/bg/s03/s302-2.png');
                this.load.image('bg-s302-3', 'assets/bg/s03/s302-3.png');
                this.load.image('bg-s302-4', 'assets/bg/s03/s302-4.png');
                this.load.image('bg-s302-5', 'assets/bg/s03/s302-5.png');
                break;
            case _level.L4:
                //五瑞之門-1
                this.load.image('bg-s401-1', 'assets/bg/s04/s401-1.png');
                this.load.image('bg-s401-2', 'assets/bg/s04/s401-2.png');
                //五瑞之門-2
                this.load.image('bg-s402-1', 'assets/bg/s04/s402-1.png');
                this.load.image('bg-s402-2', 'assets/bg/s04/s402-2.png');
                //五瑞之門-3
                this.load.image('bg-s403-1', 'assets/bg/s04/s403-1.png');
                this.load.image('bg-s403-2', 'assets/bg/s04/s403-2.png');
                this.load.image('bg-s403-3', 'assets/bg/s04/s403-3.png');
                this.load.image('s403-p1', 'assets/bg/s04/s403-p1.png');
                this.load.image('s403-p2', 'assets/bg/s04/s403-p2.png');
                this.load.image('s403-p3', 'assets/bg/s04/s403-p3.png');
                this.load.image('s403-p4', 'assets/bg/s04/s403-p4.png');
                this.load.image('s403-p5', 'assets/bg/s04/s403-p5.png');
                this.load.image('s403-p6', 'assets/bg/s04/s403-p6.png');

                this.load.spritesheet('zongzi1', 'assets/ani/s04/zongzi1.png', { frameWidth: 1920, frameHeight: 1080 });
                this.load.spritesheet('zongzi2', 'assets/ani/s04/zongzi2.png', { frameWidth: 1921, frameHeight: 1080 });
                this.load.spritesheet('pest3a', 'assets/ani/s04/pest3a.png', { frameWidth: 150, frameHeight: 150 });
                this.load.spritesheet('pest3b', 'assets/ani/s04/pest3b.png', { frameWidth: 150, frameHeight: 150 });
                this.load.spritesheet('pest4a', 'assets/ani/s04/pest4a.png', { frameWidth: 120, frameHeight: 140 });
                this.load.spritesheet('pest4b', 'assets/ani/s04/pest4b.png', { frameWidth: 120, frameHeight: 140 });
                this.load.spritesheet('pest5a', 'assets/ani/s04/pest5a.png', { frameWidth: 110, frameHeight: 80 });
                this.load.spritesheet('pest5b', 'assets/ani/s04/pest5b.png', { frameWidth: 110, frameHeight: 80 });
                this.load.spritesheet('pest6a', 'assets/ani/s04/pest6a.png', { frameWidth: 100, frameHeight: 90 });
                this.load.spritesheet('pest7a', 'assets/ani/s04/pest7a.png', { frameWidth: 90, frameHeight: 150 });
                this.load.spritesheet('pest8a', 'assets/ani/s04/pest8a.png', { frameWidth: 220, frameHeight: 130 });
                this.load.spritesheet('pest8b', 'assets/ani/s04/pest8b.png', { frameWidth: 130, frameHeight: 220 });
                break;
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
        //this.scene.start('scene1', {status:'init'}); //手機出錯
        console.log(gameStatus);
        switch(gameLevel){
            case 0:
                if(gameStatus == _status.init){
                    this.scene.start('scene1');
                }
                else if(gameStatus == _status.flower){
                    this.scene.start('scene2');
                }
                else if(gameStatus == _status.puzzle){
                    this.scene.start('scene1');
                }
                break;
            default:
                this.scene.start('scene1');
                break;
        }
	}
}
