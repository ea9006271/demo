var webURL = window.location.href;
webURL = webURL.substring(0, webURL.lastIndexOf('/'));
const imageWidth = 1920, imageHeight = 1080;
var player;
var dialogBox;
const _level = Object.freeze({
    L1 : 0,
    L2 : 1,
    L3 : 2,
    L4 : 3
});
var gameLevel = _level.L1;

const _status = Object.freeze({
    init: 'init',
    start: 'start',
    playing: 'playing',
    flower: 'flower',
    paint: 'paint',
    puzzle: 'puzzle'
});
var gameStatus = _status.init;

/*
0 - 荷之門   - s101~s102 init -> start -> playing -> dialogBox -> 場景二 -> dialogBox -> flower -> paint -> puzzle
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
window.onload = function () {
    var status = getParameterByName('status');
    if(status != '' && status != null)
        gameStatus = status;
};

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

function parseCookie() {
    var cookieObj = {};
    var cookieAry = document.cookie.split(';');
    var cookie;
    
    for (var i=0, l=cookieAry.length; i<l; ++i) {
        cookie = jQuery.trim(cookieAry[i]);
        cookie = cookie.split('=');
        cookieObj[cookie[0]] = cookie[1];
    }
    
    return cookieObj;
}
function getCookie(name) {
    var value = parseCookie()[name];
    if (value) {
        value = decodeURIComponent(value);
    }
    return value;
}
function setCookie(cname, cvalue) {
    const exdays = 1;
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";SameSite=Strict;path=/";
}
function delCookie(name){
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
function setGameLog(key){
    var logs = getCookie('gameLog');
    if(logs == null){
        logs = '';
    }
    var result = false;
    $.each(logs.split('|'), function(index, value){
        if(key == value){
            result = true;
            return false;
        }
    });
    if(!result){
        logs += key + '|';
    }
    setCookie('gameLog', logs);
}
function checkGameLog(key){
    var logs = getCookie('gameLog');
    if(logs == null){
        logs = '';
    }
    var result = false;
    $.each(logs.split('|'), function(index, value){
        if(key == value){
            result = true;
            return false;
        }
    });
    return result;
}
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}