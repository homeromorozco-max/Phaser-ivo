// "Every great game begins with a single scene. Let's make this one unforgettable!"
export class Scene extends Phaser.Scene {
    constructor() {
        super('Scene');
    }

    init() {
        // Initialize scene
    }

    preload() {
this.load.image('Moneda', 'assets/images.png');
this.load.image('Background', 'assets/background.jpg');
this.load.image('Canasta', 'assets/basket.png');
    }

    create() {
    this.add.image(0, 0, 'Background').setOrigin(0,0)
        this.basket = this.physics.add.image(this.scale.width / 2, 630, 'Canasta');
        this.basketBrilla = this.basket.postFX.addGlow(0xA4D8D8, 5, 0)
    }

}
