import {width_game, height_game, make_button_tween} from '../helper'


export class GameOver extends Phaser.Scene {
  constructor () {
    super( { key: 'game_over', active: false } );
  }

  init ( data ) {
    if ( data.death == "grass" ) {
      this.add.image( width_game/2,height_game/2,'grass_dead' )
    } else if ( data.death == "explode" ) {
      this.add.image( width_game/2,height_game/2,'explode_dead' )
    }

  }

  preload () {

  }

  create () {

    //TODO: get interactive cursor working .setInteractive({ cursor: 'url(assets/main_menu_pizza.png), pointer'})
    const restart_button = this.add.image( width_game/2, 450, 'restart' )
      .setInteractive()
      .on( 'pointerdown', ( event ) => {
        this.scene.stop();
        this.scene.start( 'game' );
      }, this )

    make_button_tween( restart_button, this )

  }


  update () {

  }
}