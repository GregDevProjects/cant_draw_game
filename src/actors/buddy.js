import { width_game, get_random_int, is_actor_outside_world } from '../helper'
import { angle_to_straight } from '../ai'

const Buddy = new Phaser.Class( {

  Extends: Phaser.Physics.Matter.Image,

  initialize:

  function Buddy ( scene )
  {
    Phaser.Physics.Matter.Image.call( this, scene.matter.world, 600,500, 'buddy' );
    this.setMass( 10 )
    this.setAngle( 270 )
    this.body.restitution = 1
    this.speed = 0

  },

  start: function ()
  {
    // this.setPosition( get_random_int( 0, width_game ), get_random_int( 0, -500 ) )
    this.setAngle( 270 )
    this.setActive( true )
    this.setVisible( true )

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
    this.thrustBack( this.speed )
    angle_to_straight( this, 0.1 );

  },

} );

export default Buddy