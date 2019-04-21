import {width_game, height_game, make_button_tween} from '../helper'


export class Win extends Phaser.Scene {
  constructor () {
    super( { key: 'win', active: false } );
  }

  init ( data ) {
    this.add.image( width_game/2,height_game/2,'report' )
    this.grade = this.get_grade( data )
    if( data.got_bob ) {
      this.add.image( 56,300,'report_checked' )
    } else {
      this.add.image( 56,300,'report_unchecked' )
    }

    if ( data.finished_alive ) {
      this.add.image( 435,290, 'report_checked' )
    } else {
      this.add.image( 435,290, 'report_unchecked' )
    }

    if ( data.destroyed_helicopter ) {
      this.add.image( 56,395, 'report_checked' )
    } else {
      this.add.image( 56,395, 'report_unchecked' )
    }

    if ( data.hit_7_arrows ) {
      this.add.image( 435,390, 'report_checked' )
    } else {
      this.add.image( 435,390, 'report_unchecked' )
    }

    this.add.image( 330,530, this.grade )

  }

  get_grade ( scores ) {
    const values = Object.values( scores )
    let true_count = 0
    values.forEach( element => {
      if ( element ){
        true_count++
      }

    } )

    if ( true_count === 4 ) {
      return 'A+'
    } else if ( true_count === 3 ) {
      return 'A'
    } else if ( true_count === 2 ) {
      return 'B'
    }

    return 'C'

  }


  preload () {

  }

  create () {

    //TODO: get interactive cursor working .setInteractive({ cursor: 'url(assets/main_menu_pizza.png), pointer'})
    const next_button = this.add.image( 650, 530, 'next' )
      .setInteractive( {cursor: 'pointer'} )
      .on( 'pointerdown', ( event ) => {
        this.scene.stop();
        this.scene.start( 'gertrude', {grade: this.grade} );
      }, this )

    make_button_tween( next_button, this )

  }


  update () {

  }
}