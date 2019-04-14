import { width_game, height_game } from '../helper'
import Player from '../actors/player'
import Bus from '../actors/bus'
import Tnt from '../actors/tnt'
import { mouse_click } from '../controller'

export class Game extends Phaser.Scene {
  constructor () {
    super( { key: 'game', active: false } );
  }

  preload () {

  }

  create () {
    this.make_background();

    this.bullets = this.add.group( {
      classType: Bus,
      maxSize: 10,
      runChildUpdate: true
    } );



    mouse_click( this.input, ( coords )=>{
      this.last = this.matter.add.image( coords.x, coords.y, 'nothing'  )
      this.last.setBody( { type: 'polygon', sides: 40, radius: 2 }, {} );

      //debugger
      // this.last.setCircle( true )
      // debugger
      // last.body.circleRadius = 1
      // last.setStatic()
      // last.setMass( 60 )
      //debugger
      // if( this.last ){

      //   this.last.destroy()
      // }
      // debugger
    } )

    for( let _ = 0; _ < 10; _++ ) {
      const bullet = this.bullets.get()
      bullet.start()
    }

    this.player = new Player( { scene: this, x: 50, y: 50 } )

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



    if ( this.last && this.last.active ){
      this.last.setScale( this.last.scaleX+=5, this.last.scaleY+=5 )
      if( this.last.scaleX > 50 ) {
        this.last.destroy()
      }
    }
    if ( this.isDown ) {
      console.log( 'yo' )

    }
  }

}