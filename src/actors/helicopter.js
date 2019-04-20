import { make_explode_effect } from '../helper'
import Missile from './missile'

const follow_offset = 500
const move_speed_x = 0.006

const Helicopter = new Phaser.Class( {

  Extends: Phaser.Physics.Matter.Image,

  initialize:

  function Helicopter ( scene )
  {
    Phaser.Physics.Matter.Image.call( this, scene.matter.world, 0,0, 'helicopter' );
    this.scene = scene
    this.player = this.scene.player
    this.setSensor( true )
    this.setMass( 10 )
    this.setAngle( 270 )
    this.setFrictionAir( 0.08 )

    this.missile_group = this.scene.add.group( {
      classType: Missile,
      maxSize: 2,
      runChildUpdate: true
    } )


  },

  start: function ( x, y )
  {
    this.setPosition( x, y )
    // this.setAngle( 270 )
    this.setActive( true )
    this.setVisible( true )
    this.collisionHandler()

    this.scene.time.addEvent( { delay: 2000, callback: this.shoot, callbackScope: this, repeat: -1 } );
  },

  collisionHandler () {
    this.scene.matterCollision.addOnCollideStart ( {
      objectA: this,
      callback: eventData => {
        const { bodyB, gameObjectB } = eventData;
        // if ( !gameObjectB ) {
        //   return
        // }
        // if ( gameObjectB.constructor.name === "Player" ) {
        //   console.log( 'player collide' )
        // }
      }
    } );


  },

  follow_player () {
    const distance_x = Math.abs( this.x - this.player.x )
    const distance_y = Math.abs( this.y - this.player.y )

    if ( distance_x > 10 ) {
      if ( this.x < this.player.x ) {
        //this.x++
        this.thrustRight( move_speed_x )
      } else {
        //this.x--
        this.thrustLeft( move_speed_x )
      }
    }

    if ( distance_y + follow_offset > follow_offset + 50 ){
      if ( this.player.y - follow_offset < this.y ) {
      //this.y-=move_speed_y
        this.thrust( 0.012 )
      }
    }

    if ( distance_y < 300 ) {
      this.thrust( 0.005 )
    }

    if ( distance_y < 200 ) {
      this.thrust( 0.002 )
    }
  },

  shoot () {
    const missile = this.missile_group.get()

    if ( missile ) {
      missile.start( this.x, this.y )
    }
  },

  update: function ( time, delta )
  {
    this.follow_player()
  }

} );

export default Helicopter