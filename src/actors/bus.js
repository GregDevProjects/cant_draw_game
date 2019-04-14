import { width_game, get_random_int, is_actor_outside_world } from '../helper'

const max_speed = 0.006
const min_speed = 0.002
const turn_speed = 0.15

const Bus = new Phaser.Class( {

  Extends: Phaser.Physics.Matter.Image,

  initialize:

  function Bus ( scene )
  {
    Phaser.Physics.Matter.Image.call( this, scene.matter.world, 0,0, 'bus' );
    this.setMass( 40 )
    this.setAngle( 270 )
    this.speed = get_random_int( min_speed, max_speed )
  },

  start: function ()
  {
    this.setPosition( get_random_int( 0, width_game ), get_random_int( 0, -500 ) )
    this.setAngle( 270 )
    this.setActive( true )
    this.setVisible( true )
  },

  update: function ( time, delta )
  {
    this.thrustBack( this.speed )
    this.angle_to_straight();
    if ( is_actor_outside_world( this ) ) {
      this.start()
    }
  },

  angle_to_straight () {
    if ( this.angle < -90 ) {
      //this.setAngularVelocity(0.00001)
      this.angle += turn_speed
    } else if ( this.angle > -90 ) {
      //this.setAngularVelocity(-0.00001)
      this.angle -= turn_speed
    }
  }

} );

export default Bus