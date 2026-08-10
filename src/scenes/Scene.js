// "Every great game begins with a single scene. Let's make this one unforgettable!"
export class Scene extends Phaser.Scene {
    constructor() {
        super('Scene');
    }

    init() {
        // Initialize scene
    }

    preload() {
    }

    create() {
        this.score = 0
        this.vida = 1
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

this.time.addEvent({
    delay:5000,
    loop:true,
    callback:this.Spawneacorazon,
    callbackScope: this
})

this.time.addEvent({
    delay:2000,
    loop:true,
    callback:this.Spawneabombas,
    callbackScope: this
})
//grupo de monedas
this.monedapiscina = this.physics.add.group([])
this.corazonpiscina = this.physics.add.group([])
this.bombapiscina = this.physics.add.group([])

//Colisiones
this.physics.add.overlap(this.basket, this.monedapiscina, this.colisionesentremonedas, null, this);
this.physics.add.overlap(this.basket, this.corazonpiscina, this.colisionesentrecorazones, null, this)
this.physics.add.overlap(this.basket, this.bombapiscina, this.colisionesentrebombas, null, this)
//ui
const puntaje = this.add.text (10,10, 'Puntaje: ', {
   fontSize: '40px',
   color:'#0000000',
   stroke: '#ffffff',
   strokeThickness: 5
})

this.elcero = this.add.text (puntaje.x + puntaje.width,10, '0', {
   fontSize: '40px',
   color:'#0000000',
   stroke: '#ffffff',
   strokeThickness: 5
})
const vidas = this.add.text (10,60, 'Vidas: ', {
   fontSize: '40px',
   color:'#0000000',
   stroke: '#ffffff',
   strokeThickness: 5
})

this.elcerovidas = this.add.text (vidas.x + vidas.width,60, `${this.vida}`, {
   fontSize: '40px',
   color:'#0000000',
   stroke: '#ffffff',
   strokeThickness: 5
})

this.eltimer = this.add.text (this.scale.width - 80 ,10, '30', {
   fontSize: '60px',
   color:'#0000000',
   stroke: '#ffffff',
   strokeThickness: 5
})

//timer
this.termino = false
this.timer = this.time.delayedCall(30 * 1000, this.gameover ,[], this)


 }
update(){

if (this.termino){
    this.basket.setVelocityX(0)
            return;
        }
this.eltimer.setText(Math.round(this.timer.getRemainingSeconds().toString()));
//teclas
    if(this.teclas.left.isDown){
        this.basket.setVelocityX(-500)}
         else if(this.teclas.right.isDown){
        this.basket.setVelocityX(500)
    }
    else {
        this.basket.setVelocityX(0)
    }

//recuperar monedas y corazones
    this.monedapiscina.getChildren().forEach((child) => {
        if(!child.active){
            return; }
        if (child.y > this.scale.height + 10){child.setActive(false).setVisible(false) }
    });
        this.corazonpiscina.getChildren().forEach((child) => {
        if(!child.active){
            return; }
        if (child.y > this.scale.height + 10){child.setActive(false).setVisible(false) }
    });
     this.bombapiscina.getChildren().forEach((child) => {
        if(!child.active){
            return; }
        if (child.y > this.scale.height + 10){child.setActive(false).setVisible(false) }
    });


    if (this.vida <= 0){
        this.termino = true
    this.scene.start('Gameoverscene', {score: this.score})}
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

    colisionesentremonedas(basket,moneda){
        moneda.disableBody(true,true)
        if (this.termino){
            return;
        }
        this.score += 10;
        this.elcero.setText(this.score.toString());
        this.sound.play('Sonido');
        volume: 1
    };



    Spawneacorazon(){
    const corazon = this.corazonpiscina.getFirstDead(true, Phaser.Math.RND.between(50,this.scale.width - 50), -20,'Corazon')
    corazon
    .setScale(0.35)
    .setActive(true)
    .setVisible(true)
    .setVelocity(0)
    .enableBody()
    console.log(this.corazonpiscina.getChildren().length);}

    colisionesentrecorazones(basket,corazon){
        corazon.disableBody(true,true)
        if (this.termino){
            return;
        }
        this.score += 50;
        this.vida += 1;
        this.elcero.setText(this.score.toString());
         this.elcerovidas.setText(this.vida.toString());
        this.sound.play('Sonido');
        volume: 1
    };

      Spawneabombas(){
    const bomba = this.bombapiscina.getFirstDead(true, Phaser.Math.RND.between(50,this.scale.width - 50), -20,'Bomba')
    bomba
    .setScale(0.65)
    .setActive(true)
    .setVisible(true)
    .setVelocity(0)
    .enableBody()
    console.log(this.bombapiscina.getChildren().length);}

    colisionesentrebombas(basket,bomba){
        bomba.disableBody(true,true)
        if (this.termino){
            return;
        }
        this.score -= 30;
        this.vida -= 1;
        this.elcero.setText(this.score.toString());
         this.elcerovidas.setText(this.vida.toString());
        this.sound.play('BOOM');
        volume: 1;
        this.parpadeabasket();
    };
    parpadeabasket(){
    this.tweens.add({
        targets: this.basket,
        alpha: 0,
        duration: 100,
        ease: 'Linear',
        yoyo: true,
        repeat: 5,       
        onComplete: () => {
            this.basket.setAlpha(1); 
        }
    });
}
    
    gameover(){
        this.termino = true
        this.scene.start('Gameoverscene', {score: this.score} );
    }
}