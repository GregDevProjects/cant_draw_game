import {width_game, height_game, make_button_tween} from '../helper'


export class Gertrude extends Phaser.Scene {
  constructor () {
    super( { key: 'gertrude', active: false } );
  }

  init ( data ) {
    this.add.image( width_game/2,height_game/2,'gertrude' )
    const text_position_x = 600
    const text_position_y = 300

    let image_key = ""
    if ( data.grade === 'A+' ) {
      image_key = 'end_a_plus'
    } else if ( data.grade === 'A' ) {
      image_key = 'end_a'
    } else if ( data.grade === 'B' ) {
      image_key = 'end_b'
    } else if ( data.grade === 'C' ) {
      image_key = 'end_c'
    }

    this.add.image( text_position_x, text_position_y, image_key )
  }



  preload () {

  }

  create () {

    //TODO: get interactive cursor working .setInteractive({ cursor: 'url(assets/main_menu_pizza.png), pointer'})
    const next_button = this.add.image( 600, 530, 'restart' )
      .setInteractive( {cursor: 'pointer'} )
      .on( 'pointerdown', ( event ) => {
        this.scene.stop();
        this.scene.start( 'game' );
      }, this )

    make_button_tween( next_button, this )

  }


  update () {

  }
}