import { Scene } from './scenes/Scene.js';
import { Gameoverscene } from './scenes/Gameoverscene.js';
const config = {
    type: Phaser.AUTO,
    title: 'El recolector',
    description: '',
    parent: 'game-container',
    width: 1280,
    height: 720,
    backgroundColor: '#fff',
    pixelArt: false,
    scene: [
        Scene,
        Gameoverscene
    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics:{
        default: 'arcade',
        arcade:{
            gravity: {
                x: 0, y: 300,
         },
            debug: true
        }
    }
}

new Phaser.Game(config);
            