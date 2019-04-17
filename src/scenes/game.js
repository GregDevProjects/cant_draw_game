import { width_game, height_game, make_polygon_from_vertices } from '../helper'
import Player from '../actors/player'
import Bus from '../actors/bus'
import Tnt from '../actors/tnt'
import make_explosion from '../actors/explosion'
import Buddy from '../actors/buddy'
import { mouse_click, editor_mode } from '../controller'
import make_track_1 from '../tracks/1'
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

    this.bus_group = this.add.group( {
      classType: Bus,
      maxSize: 10,
      runChildUpdate: true
    } )


    mouse_click( this.input, ( coords )=>{
      this.vertex_debug_string +="{x:" + coords.x +", y:"+ coords.y + "},"

      // this.matter.add.image( coords.x,coords.y, 'tnt' ).body.isSensor = true
      console.log( this.vertex_debug_string )
      // make_explosion( coords.x, coords.y, this )
      const bus = this.bus_group.get()
      bus.start( coords.x, coords.y )


    } )

    this.player = new Player( { scene: this, x: -250, y: 0 } )
    this.spawner = new Spawner( this )

    this.cameras.main.startFollow( this.player );
    this.cameras.main.followOffset.set( 0, 200 );
    if ( editor_mode ) {
      this.cameras.main.setZoom( 0.3 )
    }

  }

  explode () {

  }


  update () {
    //this.bg.tilePositionY -= 2
    this.player.update()
    this.spawner.update()
    //console.log( this.player.x,this.player.y )
    // if ( this.tnt_group.getLength() < 5 ) {
    //   const tnt = this.tnt_group.get()
    //   tnt.start()
    // }

    // if ( this.bus_group.getLength() < 10 ) {
    //   const bus = this.bus_group.get()
    //   bus.start()
    // }

  }

}