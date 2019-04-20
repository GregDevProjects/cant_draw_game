import {control_matter_object} from '../controller'
import {editor_mode} from '../controller'
import {make_text_effect} from '../helper'

export default class Player extends Phaser.Physics.Matter.Image {
  constructor ( config ) {
    super( config.scene.matter.world, config.x, config.y, 'player' )
    this.scene = config.scene
    this.setMass( 10 );
    this.setAngle( 270 );
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.scene.add.existing( this );
    this.collisionHandler()
    this.grass_emitter = this.scene.add.particles( 'green_particle' ).createEmitter( {
      x: this.x,
      y: this.y,
      speed: { min: -400, max: 400 },
      angle: { min: 0, max: 360 },
      blendMode: 'SCREEN',
      lifespan: 400,
      quantity: 1,
      scale: {start:1,end:0}
    } )
    this.grass_text = this.scene.add.text( this.x,this.y )
    this.grass_text.setVisible( false )
    this.grass_text.setDepth( 2 )
    this.grass_emitter.startFollow( this, 250, 10 );
    this.grass_emitter.setVisible( false )
    this.queue_speed = false
    this.grass_emitter.active = false
    this.health = 4
    //so the grass emitter is under this
    this.setDepth( 1 )
  }

  collisionHandler () {
    this.scene.matterCollision.addOnCollideStart ( {
      objectA: this,
      callback: eventData => {
        const { bodyB, gameObjectB } = eventData;
        if ( editor_mode ) {
          return
        }
        if ( bodyB.isWall ) {
          this.setFrictionAir( 0.1 )
          this.grass_emitter.active = true
          this.grass_emitter.setVisible( true )

          this.grass_timer = this.scene.time.delayedCall( 3000, this.timerDeath, [], this );
        }
        if ( !gameObjectB ) {
          return
        }
        if ( gameObjectB.constructor.name === "SpeedArrow" ) {
          this.queue_speed = true;
        }
        if ( gameObjectB.constructor.name === "Missile" ) {
          this.missile_hit()
        }
        if ( gameObjectB.constructor.name === "Explosion" ) {
          this.take_damage()
          this.start_spin()
        }
      },
      context: this
    } );

    this.scene.matterCollision.addOnCollideEnd ( {
      objectA: this,
      callback: eventData => {
        const { bodyB, gameObjectB } = eventData;

        if ( bodyB.isWall ) {
          this.setFrictionAir( 0.01 )
          this.grass_emitter.setVisible( false )
          this.grass_timer = false
          this.grass_text.setVisible( false )
        }
      },
      context: this
    } );

  }
  start_spin () {
    this.spinning = true
    this.scene.time.delayedCall( 1000, ()=>{ this.spinning = false }, [], this );
  }

  missile_hit () {

    this.queue_back = true
    this.take_damage()
    this.start_spin()
    this.spinning = true
  }
  timerDeath () {
    if ( !this.grass_timer ||  this.grass_timer.getProgress() < 1 ) {
      return
    }
    this.scene.scene.stop()
    this.scene.scene.start( 'game_over', {death: "explode"} )
  }

  take_damage () {
    if ( this.spinning ) {
      return
    }

    this.health--
    if ( this.health <=0 ) {
      this.scene.scene.stop()
      this.scene.scene.start( 'game_over', {death: "explode"} )
    }

    make_text_effect( this.scene, 'health_' + this.health,this.x, this.y )
  }

  update () {
    if ( this.spinning ) {
      this.angle+=6
    } else {
      control_matter_object( this.cursors, this )
    }

    if ( this.grass_timer ) {
      this.show_time_to_grass_death()
    }
    if ( this.queue_speed ) {
      Phaser.Physics.Matter.Matter.Body.applyForce( this.body,{x: this.x, y: this.y}, {x: 0, y: -0.55} )
      this.queue_speed = false
    }
    if ( this.queue_back ) {
      this.queue_back = false
      Phaser.Physics.Matter.Matter.Body.applyForce( this.body,{x: this.x, y: this.y}, {x: 0, y: 0.2} )
    }
  }

  show_time_to_grass_death () {
    const seconds = 3 - this.grass_timer.getElapsedSeconds()
    this.grass_text.setText( seconds.toFixed( 2 ) );
    this.grass_text.setVisible( true )
    this.grass_text.x = this.x - 20
    this.grass_text.y = this.y + 40
  }
}