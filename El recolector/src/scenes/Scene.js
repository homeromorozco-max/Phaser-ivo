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
this.load.audio('Sonido','assets/pop.mp3');
    }

    create() {
        this.score = 0
    this.add.image(0, 0, 'Background').setOrigin(0,0)
        this.basket = this.physics.add.image(this.scale.width / 2, 630, 'Canasta');
        this.basket.body.setAllowGravity(false).setCollideWorldBounds(true)
        this.basketBrilla = this.basket.postFX.addGlow(0xA4D8D8, 5, 0)


//fisicas
this.teclas = this.input.keyboard.createCursorKeys()
this.time.addEvent({
    delay:1000,
    loop:true,
    callback:this.Spawneamoneda,
    callbackScope: this
})
//grupo de monedas
this.monedapiscina = this.physics.add.group([])


//Colisiones
this.physics.add.overlap(this.basket, this.monedapiscina, this.colisionesentreobjetos, null, this)




 }
update(){

    if(this.teclas.left.isDown){
        this.basket.setVelocityX(-500)}
         else if(this.teclas.right.isDown){
        this.basket.setVelocityX(500)
    }
    else {
        this.basket.setVelocityX(0)
    }

    this.monedapiscina.getChildren().forEach((child) => {
        if(!child.active){
            return; }
        if (child.y > this.scale.height + 10){child.setActive(false).setVisible(false) }
    });
}

   Spawneamoneda(){
    const moneda = this.monedapiscina.getFirstDead(true, Phaser.Math.RND.between(50,this.scale.width - 50), -20,'Moneda')
    moneda
    .setScale(0.35)
    .setActive(true)
    .setVisible(true)
    .setVelocity(0)
    .enableBody()
    console.log(this.monedapiscina.getChildren().length);}

    colisionesentreobjetos(basket,moneda){
        moneda.disableBody(true,true)
        this.score += 1
        this.sound.play('Sonido'); {
        volume:1
        }
    }

}
