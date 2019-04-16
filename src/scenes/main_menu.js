import image_main_menu from '../assets/main_menu_bg.png'
import image_start from '../assets/main_menu_start.png'
import image_pizza from '../assets/main_menu_pizza.png'
import player from '../assets/player.png'
import bus from '../assets/bus.png'
import image_highway from '../assets/highway.png'
import tnt from '../assets/tnt.png'
import nothing from '../assets/fire.png'
import Buddy from '../assets/buddy.png'
import test_track from '../assets/test_track.png'
import grass_dead from '../assets/grass_dead.png'
import restart from '../assets/restart.png'

import {width_game, height_game, make_button_tween} from '../helper'


export class MainMenu extends Phaser.Scene {
  constructor () {
    super( { key: 'main_menu', active: false } );
  }
  preload () {
    this.load.image( "main_menu_bg", image_main_menu )
    this.load.image( "image_start", image_start )
    this.load.image( "image_pizza", image_pizza )
    this.load.image( 'highway', image_highway )
    this.load.image( 'player', player )
    this.load.image( 'bus', bus )
    this.load.image( 'tnt', tnt )
    this.load.image( 'nothing', nothing )
    this.load.image( 'buddy', Buddy )
    this.load.image( 'test_track', test_track )
    this.load.image( 'grass_dead', grass_dead )
    this.load.image( 'restart', restart )
  }

  create () {
    this.add.image( width_game/2,height_game/2,'main_menu_bg' )
    //TODO: get interactive cursor working .setInteractive({ cursor: 'url(assets/main_menu_pizza.png), pointer'})
    this.pizza()
    this.start()

    this.scene.stop();
    this.scene.start( 'game' );
  }

  pizza () {
    const pizza = this.add.image( width_game/2, 450, 'image_pizza' )
      .setInteractive()
      .on( 'pointerdown', ( event ) => {
        console.log( 'pizza' )
      }, this )

    make_button_tween( pizza, this )

  }

  start () {
    const start = this.add.image( width_game/2, 350, 'image_start' )
      .setInteractive()
      .on( 'pointerdown', ( event ) => {
        this.scene.stop();
        this.scene.start( 'game' );
      }, this )

    this.tweens.add(
      {
        targets: start,
        scaleX: 1.2,
        scaleY: 1.2,
        yoyo: true,
        repeat: -1,
        duration: 500
      }
    );
  }

  update () {

  }
}