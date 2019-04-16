import { width_game, get_random_int, is_actor_outside_world } from '../helper'
import { angle_to_straight } from '../ai'
import make_explosion from './explosion'

const max_speed = 0.004
const min_speed = 0.0005
const turn_speed = 0.15

const Bus = new Phaser.Class( {

  Extends: Phaser.Physics.Matter.Image,

  initialize:

  function Bus ( scene )
  {
    Phaser.Physics.Matter.Image.call( this, scene.matter.world, 0,0, 'bus' );
    this.setMass( 10 )
    this.setAngle( 270 )
    this.body.restitution = 1
    this.speed = get_random_int( min_speed, max_speed )

  },

  start: function ( x,y )
  {
    this.setPosition( x,y )
    this.setAngle( 270 )
    this.setActive( true )
    this.setVisible( true )
    this.collisionHandler()

  },

  collisionHandler () {
    this.scene.matterCollision.addOnCollideStart ( {
      objectA: this,
      callback: eventData => {
        const { bodyB, gameObjectB } = eventData;
        if ( !bodyB.gameObject ){
          return
        }
        if ( bodyB.gameObject.constructor.name === "Explosion" ) {
          console.log( 'SLIDE' )
          this.body.friction = 0
          this.speed = 0
          this.destroy()

        }

      }
    } );
  },

  update: function ( time, delta )
  {
    this.thrust( this.speed )
    angle_to_straight( this, turn_speed );

    if( this.is_spinning ) {
      this.spin()
    }

  },

  spin () {
    this.angle+=3
  }

} );

export default Bus