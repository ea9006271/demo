import PreloadScene from './preloadScene.js';
import Scene1 from './s201.js';
import Scene2 from './s202.js';
import Scene3 from './s203.js';
import Scene4 from './s204.js';
$(function(){
    gameLevel = _level.L2;
    setCanvas();
    var preloadScene = new PreloadScene();
    var scene1 = new Scene1();
    var scene2 = new Scene2();
    var scene3 = new Scene3();
    var scene4 = new Scene4();
    var config = {
        type: Phaser.AUTO,
        width: canvasWidth,
        height: canvasHeight,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        transparent: false,
        parent: "Content",
        physics: {
            default: "arcade",
            arcade: {
                gravity: { y: 0 },
                debug: false
            }
        }
    };
    var game = new Phaser.Game(config);  
    game.scene.add('preloadScene', preloadScene);
    game.scene.add('scene1', scene1);    
    game.scene.add('scene2', scene2);   
    game.scene.add('scene3', scene3);   
    game.scene.add('scene4', scene4);   
    game.scene.start('preloadScene');     
});