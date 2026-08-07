import Phaser from "https://cdn.jsdelivr.net/npm/phaser@3.90.0/dist/phaser.esm.js";
export default class Player extends Phaser.GameObjects.Rectangle{
constructor(scene,x,y,width,height,fillColor){
    super(scene,x,y,width,height,fillColor);
    scene.add.existing(this)
scene.physics.add.existing(this)




}



update (){


}

}