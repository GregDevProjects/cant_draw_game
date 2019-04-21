import { make_explode_effect } from '../helper'
import { angle_to_straight } from '../ai'
import make_explostion from '../actors/explosion'

const max_speed = 0.004
const min_speed = 0.0005
const turn_speed = 0.3

const SpeedArrow = new Phaser.Class( {

  Extends: Phaser.Physics.Matter.Image,

  initialize:

  function SpeedArrow ( scene )
  {
    Phaser.Physics.Matter.Image.call( this, scene.matter.world, 0,0, 'speed_arrow' );
    this.scene = scene
    this.setMass( 10 )
    this.setSensor( true )
  },

  start: function ( x, y )
  {
    this.setPosition( x, y )
    this.setActive( true )
    this.setVisible( true )
    this.collisionHandler()
  },

  collisionHandler () {
    this.scene.matterCollision.addOnCollideStart ( {
      objectA: this,
      callback: eventData => {
        const { bodyB, gameObjectB } = eventData;
        if ( gameObjectB.constructor.name === "Player" ) {
          make_explode_effect( this.scene,this, 'blue_particle' )
          this.destroy()
        }

      }
    } );
  },

} );

export default SpeedArrow