import {width_game, height_game, make_button_tween} from '../helper'


export class Win extends Phaser.Scene {
  constructor () {
    super( { key: 'win', active: false } );
  }

  init ( data ) {
    this.add.image( width_game/2,height_game/2,'report' )
    data.got_bob = true
    data.finished_alive = true
    data.destroyed_helicopter = true
    data.hit_7_arrows = true
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

    this.add.image( 330,530, this.get_grade( data ) )

    // if ( data.death == "grass" ) {
    //   this.add.image( width_game/2,height_game/2,'grass_dead' )
    // } else if ( data.death == "explode" ) {
    //   this.add.image( width_game/2,height_game/2,'explode_dead' )
    // }

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
    }else if ( true_count ===1 ) {
      return 'C'
    }
  }


  preload () {

  }

  create () {

    //TODO: get interactive cursor working .setInteractive({ cursor: 'url(assets/main_menu_pizza.png), pointer'})
    const next_button = this.add.image( 650, 530, 'next' )
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