import Bus from './actors/bus'
import Tnt from './actors/tnt'
import Buddy from './actors/buddy'

const player_top_distance = 600

export default class Spawner {
  constructor ( scene ) {
    this.scene =scene
    this.player = scene.player
    this.spawn_test = [{x:219.99999125798536, y:-1250.8888391830324,type: "bus"},{x:49.99999801317813, y:-1264.2221719865468,type: "bus"},{x:-126.66666163338607, y:-1300.8888371962112,type: "bus"},{x:-129.99999483426473, y:-1597.555492074404,type: "bus"},{x:29.999998807906763, y:-1591.3332700994313,type: "bus"},{x:186.6666592491997, y:-1784.6665957503883,type: "bus"},{x:163.3333268430497, y:-2238.444355496658,type: "bus"},{x:13.333332803513827, y:-2268.444354304565,type: "bus"},{x:-169.99999324480757, y:-2285.111020308958,type: "bus"},{x:-186.66665924920017, y:-2680.2221157197646,type: "bus"},{x:13.333332803514281, y:-2803.5554441522713,type: "bus"},{x:169.99999324480723, y:-3043.5554346155286,type: "bus"}, {x:-263.0555451026695, y:-5519.555336228129,type: "bus"},{x:-109.72221786225509, y:-5539.5553354334,type: "tnt"},{x:50.27777577991628, y:-5586.2220002457,type: "bus"},{x:-263.0555451026695, y:-5946.221985940586,type: "tnt"},{x:-98.76292675781042, y:-5978.789185475183,type: "bus"},{x:97.90590265165315, y:-5985.483412857677,type: "tnt"},{x:-285.42741018857646, y:-6315.483466544532,type: "bus"},{x:-268.76074418418364, y:-6335.483465749804,type: "tnt"},{x:-95.42741773849787, y:-6378.816797361225,type: "bus"},{x:127.9059067203666, y:-6382.150130562104,type: "bus"},{x:-17.212063843248302, y:-8836.469488493032,type: "tnt"},{x:-20.665015258799997, y:-9081.645605206233,type: "bus"},{x:-19.309913933533664, y:-9307.955793937934,type: "tnt"},{x:-23.602100440910647, y:-9544.068850087971,type: "bus"}]
    this.bus_group = this.scene.add.group( {
      classType: Bus,
      maxSize: 50,
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
    this.spawn_test.forEach( ( item, index, object ) => {
      if ( item.y > this.player.y - player_top_distance ) {
        let actor
        if ( item.type === "bus" ) {
          actor = this.bus_group.get()
        } else if ( item.type === "tnt" ) {
          actor = this.tnt_group.get()
        }

        actor.start( item.x, item.y )
        object.splice( index, 1 );

      }
    } )

  }

}