import Bus from './actors/bus'
import Tnt from './actors/tnt'
import Buddy from './actors/buddy'

const spawns = [{y:-1496.214976670337},{ y:-1492.4076704893216},{ y:-1769.7277858148386},{ y:-1773.6198878096952},{ y:-2018.157481505566},{x:87.79838106661242, y:-2025.5729556434035},{x:-169.36319744893444, y:-2207.210855768196},{x:-33.095388190416315, y:-2219.2861838992585},{x:-97.70969367880019, y:-2666.385952408673},{x:50.88870464790699, y:-2671.520637881482},{x:184.3684524981909, y:-2668.464348618105},{x:-214.39302373694125, y:-2671.916662215869},{x:75.99671084895834, y:-3100.291963019424},{x:195.23118512651666, y:-3107.050058592475},]

const spawn_test = [{x:183.63640865425094, y:-1147.8186604547539, type: 'bus'}]

const player_top_distance = 600

export default class Spawner {
  constructor ( scene ) {
    this.scene =scene
    this.player = scene.player

    this.bus_group = this.scene.add.group( {
      classType: Bus,
      maxSize: 10,
      runChildUpdate: true
    } )

    this.tnt_group = this.scene.add.group( {
      classType: Tnt,
      maxSize: 10,
      runChildUpdate: true
    } )

    this.buddy_group = this.scene.add.group( {
      classType: Buddy,
      maxSize: 2,
      runChildUpdate: true
    } )

  }

  update () {
    spawn_test.forEach( ( item, index, object ) => {
      if ( item.y > this.player.y - player_top_distance ) {
        let actor
        if ( item.type === "bus" ) {
          actor = this.bus_group.get()
        }
        actor.start( item.x, item.y )
        object.splice( index, 1 );

      }
    } )

  }

}