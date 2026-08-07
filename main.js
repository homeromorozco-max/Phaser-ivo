// ============================================================
//  EL RECOLECTOR - Proyecto base
//  Esto es todo lo que te damos hecho. El resto es tuyo.
// ============================================================

import Player from "./jugador";

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
      debug: false
      
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
//crear jugador
  this.jugador = new Player(scene,400, 550, 70, 20, 0x66ccff);

  // Le damos un cuerpo de física para poder detectar colisiones más adelante.
  this.physics.add.existing(jugador);
  jugador.body.setCollideWorldBounds(true);
//crear jugador



  // Las flechas del teclado.
  teclas = this.input.keyboard.createCursorKeys();

};
function lanzarObjeto(){
  // Genera una posición X aleatoria dentro del ancho del juego
  const x = Phaser.Math.Between(50, 800);
  
  // Crea el sprite (asegúrate de haberlo precargado antes)
  const objeto = this.add.rectangle(x,200, 300, 150, 100, 0xff0000);
  
  // Opcional: darle una velocidad de caída directa
  this.physics.add.existing(objeto);
  objeto.setVelocityY(200); }

this.time.addEvent({
  delay: 1000,
  callback: lanzarObjeto,
  callbackScope: this,
  loop: true
})







// ------------------------------------------------------------
// update: se ejecuta ~60 veces por segundo, siempre.
// Acá va lo que cambia con el tiempo.
// ------------------------------------------------------------
function update() {
 this.jugador.update();
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
