import { width_game, height_game, make_polygon_from_vertices } from '../helper'
import Player from '../actors/player'
import Bus from '../actors/bus'
import Tnt from '../actors/tnt'
import make_explosion from '../actors/explosion'
import Buddy from '../actors/buddy'
import { mouse_click, editor_mode } from '../controller'
import make_track_1 from '../tracks/1'
import make_track_2 from '../tracks/2'
import make_track_3 from '../tracks/3'
import Spawner from '../spawner'
import make_track_4 from '../tracks/4';


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
    this.bus_group = this.add.group( {
      classType: Bus,
      maxSize: 10,
      runChildUpdate: true
    } )


    mouse_click( this.input, ( coords )=>{
      this.vertex_debug_string +="{x:" + coords.x +", y:"+ coords.y + "},"

      this.matter.add.image( coords.x,coords.y, 'orange_particle' ).body.isSensor = true
      console.log( this.vertex_debug_string )
      // make_explosion( coords.x, coords.y, this )
      // const bus = this.bus_group.get()
      // bus.start( coords.x, coords.y )
      //this.player.thrust( 100 )

    } )

    this.player = new Player( { scene: this, x: -250, y: 0 } )
    this.spawner = new Spawner( this )

    this.cameras.main.startFollow( this.player );
    this.cameras.main.followOffset.set( 0, 200 );
    if ( editor_mode ) {
      this.cameras.main.setZoom( 0.4 )
      const startAt = {x:242.78208879751094, y:-23989}
      this.player.x = startAt.x
      this.player.y = startAt.y
    }
    // const startAt = {x:2.086665195493765, y:-29953.72528136941}
    // this.player.x = startAt.x
    // this.player.y = startAt.y

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