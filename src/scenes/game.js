import { width_game, height_game } from '../helper'
import Player from '../actors/player';
import Bus from '../actors/bus';
import Tnt from '../actors/tnt'

export class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game', active: false });
  }

  preload() {

  }

  create() {
    this.make_background();
    this.player = new Player({ scene: this, x: 50, y: 50 })

    this.actor_array = [
      new Bus({ scene: this, x: 200, y: 200 }),
      new Tnt({ scene: this, x: 100 }),
      new Bus({ scene: this, x: 300, y: 200 })
    ]
  }

  make_background() {
    this.bg = this.add.tileSprite(
      0,
      0,
      width_game * 2,
      height_game * 2,
      'highway'
    );
  }

  update() {
    this.bg.tilePositionY -= 2
    this.player.update()
    this.actor_array.forEach((value) => {
      value.update()
    })
    this.respawner()
  }

  respawner() {
    this.actor_array.forEach((value, index, object) => {
      if (value.y > height_game) {

        value.destroy()
        object.splice(index, 1);
        this.actor_array.push(new Bus({ scene: this }))
      }
    })
  }
}