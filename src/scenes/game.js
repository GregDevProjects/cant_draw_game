import Player from '../actors/player'
import { mouse_click, editor_mode } from '../controller'
import make_track_1 from '../tracks/1'
import make_track_2 from '../tracks/2'
import make_track_3 from '../tracks/3'
import make_track_4 from '../tracks/4'
import make_finish from '../tracks/finish'

import Spawner from '../spawner'



export class Game extends Phaser.Scene {
  constructor () {
    super( { key: 'game', active: false } );
  }

  preload () {

  }

  create () {
    this.vertex_debug_string = ""
    make_track_1( this )
    make_track_2( this )
    make_track_3( this )
    make_track_4( this )
    make_finish( this )

    mouse_click( this.input, ( coords )=>{
      if ( editor_mode ){
        this.vertex_debug_string +="{x:" + coords.x +", y:"+ coords.y + "},"
        this.matter.add.image( coords.x,coords.y, 'orange_particle' ).body.isSensor = true
        console.log( this.vertex_debug_string )
      }

    } )

    this.player = new Player( { scene: this, x: -250, y: -50 } )
    this.spawner = new Spawner( this )

    this.setup_camera()

    if ( editor_mode ) {
      this.cameras.main.setZoom( 0.2 )
      const startAt = {x:242.78208879751094, y:0}
      this.player.x = startAt.x
      this.player.y = startAt.y
    }

    // const startAt = {x:242.78208879751094, y:-30000}
    // this.player.x = startAt.x
    // this.player.y = startAt.y

  }

  setup_camera () {
    this.cameras.main.startFollow( this.player );
    this.cameras.main.followOffset.set( 0, 200 );
    this.cameras.main.setBackgroundColor( 'rgba(0, 127, 14,1)' );
  }

  update () {
    this.player.update()
    this.spawner.update()
  }

}