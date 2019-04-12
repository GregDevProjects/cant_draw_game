export default class Tnt extends Phaser.Physics.Matter.Image {
  constructor(config) {
    super(config.scene.matter.world, config.x, 100, 'tnt')
    this.scene = config.scene
    this.setMass(40);
    this.setAngle(270);
    this.scene.add.existing(this);
  }

  update() {
    this.y+=1
    this.angle++
  }
}