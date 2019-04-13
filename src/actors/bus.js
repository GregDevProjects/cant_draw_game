import { width_game, get_random_int } from '../helper'

const max_speed = 0.006
const min_speed = 0.002

export default class Bus extends Phaser.Physics.Matter.Image {
  constructor(config) {
    super(config.scene.matter.world, get_random_int(0, width_game), get_random_int(0, -500), 'bus')
    this.scene = config.scene
    this.setMass(40)
    this.setAngle(270)
    this.scene.add.existing(this);
    this.speed = get_random_int(min_speed, max_speed)
  }

  update() {
    this.move_backwards();
    this.angle_to_straight();

  }

  move_backwards() {
    this.thrustBack(this.speed)
  }

  angle_to_straight() {
    if (this.angle < -90) {
      //this.setAngularVelocity(0.00001)
      this.angle += 0.3
    } else if (this.angle > -90) {
      //this.setAngularVelocity(-0.00001)
      this.angle -= 0.3
    }
  }
}