const imageWidth = 1920, imageHeight = 1080;
var gameLevel = 0;
var player;
var dialogBox;
/*
0 - 荷之門   - s101~s102
1 - 木之門   - s201~s202
2 - 竹之門   - s301~s302
3 - 五瑞之門 - s401~s402
*/
var canvasWidth = 0, canvasHeight = 0;
var gameScale = 0;
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var speed = 175;
if(!isMobile){
    speed*=1.5;
}

function loadScene(scene, name){
    scene.physics.pause();//先暫停否則會連續觸發
    //fade to black
    //第1個參數是:毫秒
    //接下來3個參數為淡出的顏色:RGB
    scene.cameras.main.fadeOut(500, 0, 0, 0);

    scene.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
        scene.time.delayedCall(0, () => {
            scene.scene.start(name);
        });        
    });      
}

function setCanvas() {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    var h2 = w * 0.5625;
    if (h2 > h) {
        canvasHeight = h;
        canvasWidth = h * 1.78;
    }
    else {
        canvasWidth = w;
        canvasHeight = h2;
    }
    gameScale = canvasHeight / imageHeight;
    console.log('gameScale : ' + gameScale);
    //console.log(canvasWidth);
    //console.log(canvasHeight);
}

window.onload = function () {

};

var story = [
    {
        "id" : "s101-01",
        "content" : [
            {
                "avatar" : "kuso",
                "words" : "不知道如意在哪裡？"
            },
            {
                "avatar" : "kuso",
                "words" : "畫作有些部分不見了…發生什麼事了"
            }
        ],
        "next" : ["load", "scene2"]        
    },
    {
        "id" : "s102-01",
        "content" : [
            {
                "avatar" : "npc01",
                "words" : "是酷獸啊，你怎麼在這邊呢？"
            },
            {
                "avatar" : "kuso",
                "words" : "原來是荷精靈，我正在找如意，請問你有看到嗎？"
            },
            {
                "avatar" : "npc01",
                "words" : "嗯...我不知道，抱歉沒能幫上忙"
            },
            {
                "avatar" : "kuso",
                "words" : "沒關係～"
            },
            {
                "avatar" : "kuso",
                "words" : "話說，你看起來比我更煩惱呢"
            },
            {
                "avatar" : "npc01",
                "words" : "唉...牆上的荷花畫作都亂掉了，該怎麼辦呢？"
            },
            {
                "avatar" : "kuso",
                "words" : "第一次看到荷精靈這麼煩惱..."
            },
            {
                "avatar" : "kuso",
                "words" : "我來幫忙吧！但我對荷花不是很熟..."
            },
            {
                "avatar" : "npc01",
                "words" : "真的嗎？謝謝你，就讓我來分享荷花的秘密吧！"                
            }
        ],
        "next" : ["run", ""]        
    },
    {
        "id" : "s102-02",
        "content" :[
            {
                "avatar" : "npc01",
                "words" : "太好了！你已經觀察到荷花不同部位的質感"
            },
            {
                "avatar" : "npc01",
                "words" : "這是質感錦囊，或許能幫你找到如意！"
            },
            {
                "avatar" : "kuso",
                "words" : "謝謝！那我就收下了"
            }
        ],
        "next" : ["run", ""]
    },
    {
        "id" : "s103-01",
        "content" :[
            {
                "avatar" : "npc01",
                "words" : "接下來，請把獲得的荷花部件，歸回畫作裡吧！"
            }
        ],
        "next" : ["run", ""]
    }
];