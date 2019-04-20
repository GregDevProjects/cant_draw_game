import { get_random_int, make_explode_effect } from '../helper'
import { angle_to_straight } from '../ai'

const max_speed = 0.004
const min_speed = 0.0005
const turn_speed = 0.2

const PizzaCar = new Phaser.Class( {

  Extends: Phaser.Physics.Matter.Image,

  initialize:

  function PizzaCar ( scene )
  {
    Phaser.Physics.Matter.Image.call( this, scene.matter.world, 0,0, 'pizza_car' )
    this.scene = scene

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
        if ( bodyB.isWall ) {
          this.death()
        }
        if ( !bodyB.gameObject ){
          return
        }
        if ( gameObjectB.constructor.name === "Explosion" || gameObjectB.constructor.name === "Missile" || gameObjectB.constructor.name === "PizzaProjectile" ) {
          this.body.friction = 0
          this.speed = 0
          this.death()
        }
        if ( gameObjectB.constructor.name === "Player" ) {
          this.destroy()
        }

      },
      context: this
    } );
  },

  update: function ( time, delta )
  {
    this.thrust( this.speed )

    angle_to_straight( this, turn_speed );

  },
  death ( ) {
    make_explode_effect( this.scene, this )
    this.destroy()
  }

} );

export default PizzaCar