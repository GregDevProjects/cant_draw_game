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

  start: function ()
  {
    this.setPosition( get_random_int( 0, width_game ), get_random_int( 0, -500 ) )
    this.setAngle( 270 )
    this.setActive( true )
    this.setVisible( true )
    this.collisionHandler()
    this.bomb_text = this.scene.add.text( this.x,this.y )

    this.explode_timer = false
    this.activated = false
  },

  collisionHandler () {
    this.scene.matterCollision.addOnCollideStart ( {
      objectA: this,
      callback: eventData => {
        const { bodyB, gameObjectB } = eventData;
        // if ( gameObjectB.constructor.name === "Player" ||  ) {
        if ( this.is_in_bounds() ){
          this.activated = true
        }


        // }
        //console.log( "Player touched", bodyB );
        // bodyB will be the matter body that the player touched
        // gameObjectB will be the game object that owns bodyB, or undefined if there's no game object
      }
    } );


  },

  update: function ( time, delta )
  {
    if ( this.activated ) {
      this.angle+=6
    } else {
      this.thrustBack( this.speed )
    }

    angle_to_straight( this, turn_speed )

    if ( this.explode_timer ) {
      this.bomb_text.setText( this.explode_timer.getProgress().toString().substr( 0, 4 ) );
      this.bomb_text.x = this.x
      this.bomb_text.y = this.y
    }


    if ( this.is_in_bounds() && !this.explode_timer && this.activated ) {
      this.explode_timer = this.scene.time.delayedCall( 1000, this.explode, [], this );
    }

    if ( is_actor_outside_world( this ) ) {
      this.destroy()
    }

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
    this.bomb_text.destroy()
    this.destroy()
  }

} );

export default Tnt