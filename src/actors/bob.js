import { make_explode_effect } from '../helper'

const Bob = new Phaser.Class( {

  Extends: Phaser.Physics.Matter.Image,

  initialize:

  function Bob ( scene )
  {
    Phaser.Physics.Matter.Image.call( this, scene.matter.world, 0,0, 'bob' );
    this.scene = scene
    this.setSensor( true )
    this.setMass( 10 )
    //this.setAngle( 270 )
    this.body.restitution = 1

  },

  start: function ( x, y )
  {
    this.setPosition( x, y )
    // this.setAngle( 270 )
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
          this.bobs_thanks()


        } else {
          this.scene.sound.add( 'ouch' ).play();
          make_explode_effect( this.scene, this, 'red_particle' )
        }

        this.destroy()
      }
    } );


  },

  bobs_thanks (){
    this.scene.sound.add( 'thanks' ).play();
    const plus_one_bob = this.scene.add.image( this.x, this.y, 'got_bob' )
    this.scene.tweens.add( {
      targets: plus_one_bob,
      x: this.x,
      y:  this.y -700,
      duration: 1500,
      alpha: 0,
      onComplete: ( tween ) =>{
        tween.targets[0].destroy()
      }
    } );
  },

  update: function ( time, delta )
  {

  }

} );

export default Bob