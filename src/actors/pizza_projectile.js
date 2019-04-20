import {make_explode_effect} from '../helper'

const speed = .01

const PizzaProjectile = new Phaser.Class( {

  Extends: Phaser.Physics.Matter.Image,

  initialize:

  function PizzaProjectile ( scene )
  {
    Phaser.Physics.Matter.Image.call( this, scene.matter.world, 0,0, 'pizza' );
    this.scene = scene
    // this.setMass( 40 )
    this.setSensor( true )
    this.setAngle( 270 )
    this.setDepth( 1 )
    this.scene.time.addEvent( { delay: 1000, callback: this.self_destruct, callbackScope: this, repeat: -1 } );
    this.collisionHandler()
    // debugger
  },

  start: function ( originX,originY, destinationX, destinationY )
  {
    this.setPosition(  originX,originY )
    const angle = Phaser.Math.Angle.Between( destinationX, destinationY, originX,originY );
    this.setAngle( Phaser.Math.RadToDeg( angle ) )
  },
  collisionHandler () {
    this.scene.matterCollision.addOnCollideStart ( {
      objectA: this,
      callback: eventData => {
        const { bodyB, gameObjectB } = eventData;
        if ( !gameObjectB ) {
          return
        }
        if ( gameObjectB.constructor.name === "Helicopter" ) {
          make_explode_effect( this.scene, this )
          this.destroy()
        }
        // if ( !gameObjectB ) {
        //   return
        // }
        // if ( gameObjectB.constructor.name === "Player" ) {
        //   console.log( 'player collide' )
        // }
      }
    } );
  },
  update: function ( time, delta )
  {
    this.thrustBack( speed )
  },
  self_destruct () {
    this.destroy()
  }

} );

export default PizzaProjectile