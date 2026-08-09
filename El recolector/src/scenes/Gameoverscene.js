// "Every great game begins with a single scene. Let's make this one unforgettable!"
export class Gameoverscene extends Phaser.Scene {
    constructor() {
        super('Gameoverscene');
    }

    init(data) {
        // Initialize scene
        this.score = data.score;
    }

    preload() {
        // Load assets
    }

    create() {
         this.add.image(0, 0, 'Background').setOrigin(0,0);
         this.add.text (this.scale.width / 2, this.scale.height / 2 - 100, 'Game Over', {
   fontSize: '100px',
   color:'#B05389',
   stroke: '#ffffff',
   strokeThickness: 10
}).setOrigin(0.5);
         this.add.text (this.scale.width / 2, this.scale.height / 2 + 60, `Score: ${this.score}`, {
   fontSize: '80px',
   color:'#B05389',
   stroke: '#ffffff',
   strokeThickness: 8
}).setOrigin(0.5)
         this.add.text (this.scale.width / 2, this.scale.height / 2 + 180, `Toca para jugar otra vez`, {
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
