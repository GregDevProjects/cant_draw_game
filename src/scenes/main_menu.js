import main_menu from '../assets/main_menu.png'
import image_start from '../assets/main_menu_start.png'
import player from '../assets/player.png'
import bus from '../assets/bus.png'
import image_highway from '../assets/highway.png'
import tnt from '../assets/tnt.png'
import nothing from '../assets/fire.png'
import track_1 from '../assets/track_1.png'
import grass_dead from '../assets/grass_dead.png'
import restart from '../assets/restart.png'
import orange_particle from '../assets/orange_particle.png'
import green_particle from '../assets/green_particle.png'
import track_2 from '../assets/track_2.png'
import speed_arrow from '../assets/speed_arrow.png'
import red_particle from '../assets/red_particle.png'
import track_3 from '../assets/track_3.png'
import bob from '../assets/bob.png'
import got_bob from '../assets/got_bob.png'
import ouch from '../assets/ouch.wav'
import thanks from '../assets/thanks.wav'
import helicopter from '../assets/helicopter.png'
import track_4 from '../assets/track_4.png'
import missile from '../assets/missile.png'
import yellow_particle from '../assets/yellow_particle.png'
import health_1 from '../assets/1.png'
import health_2 from '../assets/2.png'
import health_3 from '../assets/3.png'
import explode_dead from '../assets/explode_dead.png'
import pizza_car from '../assets/pizza_car.png'
import pizza_player from '../assets/pizza_player.png'
import pizza from '../assets/pizza.png'
import pizza_particle from '../assets/pizza_particle.png'
import finish from '../assets/finish.png'
import report from '../assets/report.png'
import report_checked from '../assets/report_checked.png'
import report_unchecked from '../assets/report_unchecked.png'
import next from '../assets/next.png'
import A_plus from '../assets/A+.png'
import A from '../assets/A.png'
import B from '../assets/B.png'
import C from '../assets/C.png'

import {width_game, height_game, make_button_tween} from '../helper'


export class MainMenu extends Phaser.Scene {
  constructor () {
    super( { key: 'main_menu', active: false } );
  }
  preload () {
    this.load.image( "main_menu", main_menu )
    this.load.image( "image_start", image_start )
    this.load.image( 'highway', image_highway )
    this.load.image( 'player', player )
    this.load.image( 'bus', bus )
    this.load.image( 'tnt', tnt )
    this.load.image( 'nothing', nothing )
    this.load.image( 'track_1', track_1 )
    this.load.image( 'track_2', track_2 )
    this.load.image( 'track_3', track_3 )
    this.load.image( 'track_4', track_4 )
    this.load.image( 'grass_dead', grass_dead )
    this.load.image( 'restart', restart )
    this.load.image( 'orange_particle',orange_particle )
    this.load.image( 'green_particle',green_particle )
    this.load.image( 'red_particle',red_particle )
    this.load.image( 'speed_arrow', speed_arrow )
    this.load.image( 'bob', bob )
    this.load.image( 'got_bob', got_bob )
    this.load.audio( 'ouch', ouch )
    this.load.audio( 'thanks', thanks )
    this.load.image( 'helicopter', helicopter )
    this.load.image( 'missile', missile )
    this.load.image( 'yellow_particle', yellow_particle )
    this.load.image( 'health_1', health_1 )
    this.load.image( 'health_2', health_2 )
    this.load.image( 'health_3', health_3 )
    this.load.image( 'explode_dead', explode_dead )
    this.load.image( 'pizza_car', pizza_car )
    this.load.image( 'pizza_player', pizza_player )
    this.load.image( 'pizza', pizza )
    this.load.image( 'pizza_particle', pizza_particle )
    this.load.image( 'finish', finish )
    this.load.image( 'report', report )
    this.load.image( 'report_checked', report_checked )
    this.load.image( 'report_unchecked', report_unchecked )
    this.load.image( 'A+', A_plus )
    this.load.image( 'A', A )
    this.load.image( 'B', B )
    this.load.image( 'C', C )
    this.load.image( 'next', next )
  }

  create () {
    this.add.image( width_game/2,height_game/2,'main_menu' )
    //TODO: get interactive cursor working .setInteractive({ cursor: 'url(assets/main_menu_pizza.png), pointer'})

    this.start()

    // this.scene.stop();
    // this.scene.start( 'win' );
  }


  start () {
    const start = this.add.image( width_game/2, 500, 'image_start' )
      .setInteractive( { cursor: 'pointer'} )
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