import { make_explode_effect, make_text_effect } from '../helper'


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
          this.scene.player.report_card.got_bob = true
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
    make_text_effect( this.scene, 'got_bob',this.x, this.y )
  },

  update: function ( time, delta )
  {

  }

} );

export default Bob