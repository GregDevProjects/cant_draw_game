import { width_game, get_random_int, is_actor_outside_world } from '../helper'
import { angle_to_straight } from '../ai'
import make_explostion from '../actors/explosion'

const max_speed = 0.004
const min_speed = 0.0005
const turn_speed = 0.3

const Tnt = new Phaser.Class( {

  Extends: Phaser.Physics.Matter.Image,

  initialize:

  function Tnt ( scene )
  {
    Phaser.Physics.Matter.Image.call( this, scene.matter.world, 0,0, 'tnt' );
    this.scene = scene
    this.setMass( 10 )
    //this.setAngle( 270 )
    this.body.restitution = 1
    this.speed = get_random_int( min_speed, max_speed )
  },

  start: function ( x, y )
  {
    this.setPosition( x, y )
    this.setAngle( 270 )
    this.setActive( true )
    this.setVisible( true )
    this.collisionHandler()

    this.explode_timer = false
    this.activated = false
  },

  collisionHandler () {
    this.scene.matterCollision.addOnCollideStart ( {
      objectA: this,
      callback: eventData => {
        const { bodyB, gameObjectB } = eventData;
        // if ( gameObjectB.constructor.name === "Player" ||  ) {

        if ( bodyB.isWall ) {
          this.spin_out_explode()
        }

        if ( !gameObjectB ) {
          return
        }

        if ( gameObjectB.constructor.name === "PizzaProjectile" || gameObjectB.constructor.name === "Missile" ) {
          this.explode()

          return;
        }

        this.spin_out_explode()
      }
    } );


  },
  spin_out_explode () {
    this.activated = true
    if ( !this.explode_timer ){
      this.explode_timer = this.scene.time.delayedCall( 1000, this.explode, [], this );
    }
  },
  update: function ( time, delta )
  {
    if ( this.activated ) {
      this.angle+=6
    } else {
      this.thrust( this.speed )
    }

    angle_to_straight( this, turn_speed )

  },

  is_in_bounds () {
    return this.y > 100
  },

  explode: function ()
  {
    if( !this.active ) {
      return
    }
    make_explostion( this.x, this.y, this.scene )
    this.destroy()
  }

} );

export default Tnt