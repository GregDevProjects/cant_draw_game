import { width_game, height_game } from '../helper'
import Player from '../actors/player'
import Bus from '../actors/bus'
import Tnt from '../actors/tnt'
import make_explosion from '../actors/explosion'
import Buddy from '../actors/buddy'
import { mouse_click } from '../controller'

export class Game extends Phaser.Scene {
  constructor () {
    super( { key: 'game', active: false } );
  }

  preload () {

  }

  create () {
    this.make_background();

    this.bus_group = this.add.group( {
      classType: Bus,
      maxSize: 10,
      runChildUpdate: true
    } )

    this.tnt_group = this.add.group( {
      classType: Tnt,
      maxSize: 10,
      runChildUpdate: true
    } )

    this.buddy_group = this.add.group( {
      classType: Buddy,
      maxSize: 2,
      runChildUpdate: true
    } )

    const buddy_test = this.buddy_group.get()
    buddy_test.start()

    mouse_click( this.input, ( coords )=>{

      make_explosion( coords.x, coords.y, this )


    } )

    this.player = new Player( { scene: this, x: 50, y: 50 } )

  }

  explode () {

  }

  make_background () {
    this.bg = this.add.tileSprite(
      0,
      0,
      width_game * 2,
      height_game * 2,
      'highway'
    );
  }

  update () {
    this.bg.tilePositionY -= 2
    this.player.update()

    if ( this.tnt_group.getLength() < 5 ) {
      const tnt = this.tnt_group.get()
      tnt.start()
    }
    console.log( this.tnt_group.getLength() )
    if ( this.bus_group.getLength() < 10 ) {
      const bus = this.bus_group.get()
      bus.start()
    }

  }

}