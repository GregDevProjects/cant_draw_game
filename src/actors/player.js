import {control_matter_object} from '../controller'

export default class Player extends Phaser.Physics.Matter.Image {
  constructor ( config ) {
    super( config.scene.matter.world, config.x, config.y, 'player' )
    this.scene = config.scene
    this.setMass( 10 );
    this.setAngle( 270 );
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.scene.add.existing( this );
    this.collisionHandler()
    // this.body.friction = 1
    //this.setFrictionAir( 1 )
    console.log( this.body.friction )


  }

  collisionHandler () {
    this.scene.matterCollision.addOnCollideStart ( {
      objectA: this,
      callback: eventData => {
        const { bodyB, gameObjectB } = eventData;

        //console.log( "Player touched", bodyB );
        // bodyB will be the matter body that the player touched
        // gameObjectB will be the game object that owns bodyB, or undefined if there's no game object
      }
    } );


  }

  update () {
    control_matter_object( this.cursors, this )
    // this.y+=2
    // this.setAngle( 270 );
  }
}