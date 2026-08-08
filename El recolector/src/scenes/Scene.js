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

    }

    create() {
    this.add.image(0, 0, 'Background').setOrigin(0,0)
    }

}
