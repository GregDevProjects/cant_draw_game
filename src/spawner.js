import Bus from './actors/bus'
import Tnt from './actors/tnt'
import Buddy from './actors/buddy'
import SpeedArrow  from './actors/speed_arrow'
import Bob from './actors/bob'
import Helicopter from './actors/helicopter'

const player_top_distance = 600

export default class Spawner {
  constructor ( scene ) {
    this.scene =scene
    this.player = scene.player
    //{x:262.51803730631866, y:-7053.273652853525}
    this.spawn_test = [{x:219.99999125798536, y:-1250.8888391830324,type: "bus"},{x:49.99999801317813, y:-1264.2221719865468,type: "bus"},{x:-126.66666163338607, y:-1300.8888371962112,type: "bus"},{x:-129.99999483426473, y:-1597.555492074404,type: "bus"},{x:29.999998807906763, y:-1591.3332700994313,type: "bus"},{x:186.6666592491997, y:-1784.6665957503883,type: "bus"},{x:163.3333268430497, y:-2238.444355496658,type: "bus"},{x:13.333332803513827, y:-2268.444354304565,type: "bus"},{x:-169.99999324480757, y:-2285.111020308958,type: "bus"},{x:-186.66665924920017, y:-2680.2221157197646,type: "bus"},{x:13.333332803514281, y:-2803.5554441522713,type: "bus"},{x:169.99999324480723, y:-3043.5554346155286,type: "bus"}, {x:-263.0555451026695, y:-5519.555336228129,type: "bus"},{x:-109.72221786225509, y:-5539.5553354334,type: "tnt"},{x:50.27777577991628, y:-5586.2220002457,type: "bus"},{x:-263.0555451026695, y:-5946.221985940586,type: "tnt"},{x:-98.76292675781042, y:-5978.789185475183,type: "bus"},{x:97.90590265165315, y:-5985.483412857677,type: "tnt"},{x:-285.42741018857646, y:-6315.483466544532,type: "bus"},{x:-268.76074418418364, y:-6335.483465749804,type: "tnt"},{x:-95.42741773849787, y:-6378.816797361225,type: "bus"},{x:127.9059067203666, y:-6382.150130562104,type: "bus"},{x:-17.212063843248302, y:-8836.469488493032,type: "tnt"},{x:-20.665015258799997, y:-9081.645605206233,type: "bus"},{x:-19.309913933533664, y:-9307.955793937934,type: "tnt"},{x:-23.602100440910647, y:-9544.068850087971,type: "bus"}, {x:262.51803730631866, y:-7053.273652853525, type: "speed_arrow"}, {type: "speed_arrow",x:-264.26188436012376, y:-7013.801172844207},{type: "speed_arrow", x:-223.2413033981777, y:-14737.80116142866},{type: "speed_arrow",  x:180.18201219883554, y:-16345.398948612026}, {type: "speed_arrow",x:-36.48185074133727, y:-18015.89856889649}, {x:245.28208514252117, y:-11371.020421310222,type: "tnt"},{x:30.282088346270825, y:-11361.020421459234,type: "tnt"},{x:110.28208715417793, y:-11561.020418479002,type: "tnt"},{x:270.28208476999214, y:-11738.520415834046,type: "tnt"}, {x:-264.27582350580946, y:-12537.015627033486,type: "bus"},{x:-261.77582354306236, y:-13541.626723025713,type: "bus"}, {x:-222.2179078911842, y:-13567.075343615546, type:"bus"}, {x:-287.6556042830547, y:-15836.497374615434,type: "bus"},{x:-202.65560554965333, y:-16091.497370815638,type: "tnt"},{x:122.34438960746809, y:-16536.44180862989,type: "bus"},{x:229.84438800559337, y:-16821.44180438306,type: "tnt"},{x:92.34439005450292, y:-17121.44179991271,type: "bus"},{x:222.34438811735197, y:-17403.941795703133,type: "tnt"},{x:77.34439027802034, y:-17686.386235938826,type: "bus"},{x:-182.65560584768303, y:-18191.26923808862,type: "bus"},{x:99.8443899427391, y:-18203.769237902354,type: "bus"},{x:-70.15560752406395, y:-18773.380340525597,type: "tnt"},{x:-47.65560785934099, y:-19451.76982589804,type: "tnt"},{x:-37.21791064790068, y:-25093.555181632448,type: "speed_arrow"},{x:-64.71791023811875, y:-25973.555168519426,type: "speed_arrow"},{x:-44.71791053614197, y:-26883.832932733003,type: "speed_arrow"},{x:-154.76967793408596, y:-27241.11504756598,type: "bus"},{x:70.23031871315288, y:-27241.11504756598,type: "bus"},{x:135.2303177445774, y:-27363.61504574059,type: "bus"},{x:-219.76967696551054, y:-27373.615045591578,type: "bus"},{x:-209.76967711452215, y:-27541.115043095633,type: "bus"},{x:120.230317968093, y:-27543.68428551945,type: "bus"},{x:85.23031848963353, y:-27676.184283545048,type: "bus"},{x:-169.76967771057042, y:-27666.18428369406,type: "bus"},{x:152.73031748380527, y:-27866.517614042194,type: "tnt"},{x:-232.26967677924785, y:-27861.5176141167,type: "bus"},{x:125.2303178935872, y:-28046.517611359985,type: "bus"},{x:-194.7696773380414, y:-28031.517611583502,type: "tnt"},{x:167.73031726028785, y:-28276.517607932718,type: "bus"},{x:-209.76967711452397, y:-28294.017607671947,type: "bus"},{x:202.73031673874675, y:-28503.628715659608,type: "bus"},{x:-184.7696774870535, y:-28501.12871569686,type: "tnt"},{x:-124.76967838112455, y:-28683.497485514436,type: "bus"},{x:152.73031748380333, y:-28688.49748543993,type: "bus"},{x:-137.26967819486003, y:-28860.99748286948,type: "tnt"},{x:105.23031819160849, y:-28863.497482832227,type: "bus"},{x:-28.430174672627345, y:-29664.521075843713, type:"tnt"},{x:-56.61328603294703, y:-23741.22778068476,type: "bob"},{x:-56.61328603294703, y:-23499.227782919934,type: "bus"},{x:5.282088718789055, y:-30730.50575955805, type:"helicopter"}]
    this.bus_group = this.scene.add.group( {
      classType: Bus,
      maxSize: 50,
      runChildUpdate: true
    } )

    this.tnt_group = this.scene.add.group( {
      classType: Tnt,
      maxSize: 50,
      runChildUpdate: true
    } )

    this.buddy_group = this.scene.add.group( {
      classType: Buddy,
      maxSize: 2,
      runChildUpdate: true
    } )

    this.speed_arrow_group = this.scene.add.group( {
      classType: SpeedArrow,
      maxSize: 50,
      runChildUpdate: false
    } )

    this.bob_group = this.scene.add.group( {
      classType: Bob,
      maxSize: 1,
      runChildUpdate: false
    } )

    this.helicopter_group = this.scene.add.group( {
      classType: Helicopter,
      maxSize: 1,
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
        } else if ( item.type === "speed_arrow" ) {
          actor = this.speed_arrow_group.get()
        } else if ( item.type === "bob" ) {
          actor = this.bob_group.get()
        } else if ( item.type === "helicopter" ) {
          actor = this.helicopter_group.get()
        }

        actor.start( item.x, item.y )
        object.splice( index, 1 );

      }
    } )

  }

}