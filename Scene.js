export class GameScene extends Phaser.Scene {
  constructor() {
    super({ 'key': 'GameScene' });
  }


init() {

}

preload() {
  this.load.image('Moneda', 'Assets/images.png');
  this.load.image('Background', 'Assets/Bosque.jpg');   
}

create() {
  this.jugador = new Player(this, 400, 550, 70, 20, 0x66ccff);
  this.jugador.body.setCollideWorldBounds(true); 
}















}