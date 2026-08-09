// "Every great game begins with a single scene. Let's make this one unforgettable!"
export class Title extends Phaser.Scene {
    constructor() {
        super('Title');
    }

    init() {
        // Initialize scene
    }

    preload() {
        // Load assets
this.load.image('Moneda', 'assets/images.png');
this.load.image('Background', 'assets/background.jpg');
this.load.image('Canasta', 'assets/basket.png');
this.load.audio('Sonido','assets/pop.mp3');
this.load.image('Corazon', 'assets/Corazon.png');
this.load.image('Bomba', 'assets/Bomba.png');
this.load.audio('BOOM','assets/vine-boom.mp3');
    }

    create() {
        // Create game objects
         this.add.image(0, 0, 'Background').setOrigin(0,0);
         this.add.text (this.scale.width / 2, this.scale.height / 2, 'El Recolector', {
   fontSize: '100px',
   color:'#B05389',
   stroke: '#ffffff',
   strokeThickness: 10
}).setOrigin(0.5);
         this.add.text (this.scale.width / 2, this.scale.height / 2 + 180, `Toca para jugar`, {
   fontSize: '40px',
   color:'#B05389',
   stroke: '#ffffff',
   strokeThickness: 6
}).setOrigin(0.5)

this.input.once('pointerdown', () => {
    this.scene.start('Scene');

})
    }

}
