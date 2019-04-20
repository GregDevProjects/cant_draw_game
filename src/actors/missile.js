import {make_explode_effect} from '../helper'
import make_explostion from '../actors/explosion'

const Missile = new Phaser.Class( {

  Extends: Phaser.Physics.Matter.Image,

  initialize:

  function Missile ( scene )
  {
    Phaser.Physics.Matter.Image.call( this, scene.matter.world, 0,0, 'missile' );
    this.scene = scene
    this.player = this.scene.player
    this.setSensor( true )
    this.setMass( 10 )
    this.setAngle( 270 )
    this.setFrictionAir( 0.08 )

    this.missile_group = this.scene.add.group( {
      classType: Missile,
      maxSize: 50,
      runChildUpdate: true
    } )


  },

  start: function ( x, y )
  {
    this.setPosition( x, y )
    this.setAngle( 270 )
    this.setActive( true )
    this.setVisible( true )
    this.collisionHandler()
    this.scene.time.addEvent( { delay: 3000, callback: this.self_destruct, callbackScope: this, repeat: -1 } );
  },
  self_destruct () {
    this.destroy()
  },
  hit_something () {
    make_explode_effect( this.scene, this, 'yellow_particle' )
    this.destroy()
  },
  collisionHandler () {
    this.scene.matterCollision.addOnCollideStart ( {
      objectA: this,
      callback: eventData => {
        const { bodyB, gameObjectB } = eventData;
        if ( !gameObjectB ) {
          return
        }
        if ( gameObjectB.constructor.name !== "Helicopter" ) {
          this.hit_something()
        }
      }
    } );


  },

  update: function ( time, delta )
  {
    this.thrustBack( 0.02 )
  }

} );

export default Missile