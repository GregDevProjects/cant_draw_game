import {width_game, get_random_int} from '../helper'

export default class Bus extends Phaser.Physics.Matter.Image {
  constructor(config) {
    super(config.scene.matter.world, get_random_int(0, width_game), get_random_int(0, -500), 'bus')
    this.scene = config.scene
    this.setMass(40);
    this.setAngle(270);
    this.scene.add.existing(this);
  }

  update() {
    //TODO: try to straighten out if crooked
    this.thrustBack(0.005);
  }
}