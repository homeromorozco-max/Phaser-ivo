// ============================================================
//  EL RECOLECTOR - Proyecto base
//  Esto es todo lo que te damos hecho. El resto es tuyo.
// ============================================================
import * as Phaser from "https://cdn.jsdelivr.net/npm/phaser@3.90.0/dist/phaser.esm.js";
import Player from "./jugador.js";

const VELOCIDAD_JUGADOR = 400;

const config = {
  type: Phaser.AUTO,

  width: 800,
  height: 600,
  backgroundColor: '#1d1d2b',
  physics: {
    default: 'arcade',
    arcade: {
      // Poné esto en true para ver las cajas de colisión. Te va a servir.
      debug: true
      
    }

  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

// Variables del juego. Van a crecer.
let jugador;
let teclas;

new Phaser.Game(config);

// ------------------------------------------------------------
// preload: acá se cargan imágenes, sonidos, spritesheets.
// Por ahora está vacío porque usamos formas geométricas.
// ------------------------------------------------------------
function preload() {
}

// ------------------------------------------------------------
// create: se ejecuta UNA vez, al arrancar la escena.
// Acá se crean las cosas.
// ------------------------------------------------------------
function create() {
  this.jugador = new Player(this, 400, 550, 70, 20, 0x66ccff);
  this.jugador.body.setCollideWorldBounds(true); // esto sí lo necesitás, usando this.jugador

  teclas = this.input.keyboard.createCursorKeys();

  this.time.addEvent({
    delay: 1000,
    callback: lanzarObjeto,
    callbackScope: this,
    loop: true
  });
  
};
function lanzarObjeto(){
 
  const x = Phaser.Math.Between(50, 800);
  
 
  const objeto = this.add.rectangle(x,50, 50, 50,0xff0000);
  
 
  this.physics.add.existing(objeto);
  objeto.body.setVelocityY(200); 


}








// ------------------------------------------------------------
// update: se ejecuta ~60 veces por segundo, siempre.
// Acá va lo que cambia con el tiempo.
// ------------------------------------------------------------


// ------------------------------------------------------------
// update: se ejecuta ~60 veces por segundo, siempre.
// Acá va lo que cambia con el tiempo.
// ------------------------------------------------------------
function update() {
  if (teclas.left.isDown) {
    this.jugador.body.setVelocityX(-VELOCIDAD_JUGADOR);
  } else if (teclas.right.isDown) {
    this.jugador.body.setVelocityX(VELOCIDAD_JUGADOR);
  } else {
    this.jugador.body.setVelocityX(0);}
  }
// ============================================================
//  PARA CORRERLO:
//  - VS Code: extensión Live Server, botón "Go Live"
//  - Terminal: npx serve  (y abrí la URL que te muestra)
//
//  Abrir index.html con doble clic puede parecer que funciona
//  ahora, pero te va a romper cuando cargues imágenes o audio.
//
//  DOCUMENTACIÓN: https://docs.phaser.io/
//  EJEMPLOS CON CÓDIGO: https://labs.phaser.io/
// ============================================================
