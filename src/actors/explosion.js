const growth_speed = 5
const max_size = 50

const Explosion = new Phaser.Class( {

  Extends: Phaser.Physics.Matter.Image,

  initialize:

  function Explosion ( scene )
  {
    Phaser.Physics.Matter.Image.call( this, scene.matter.world, 0,0, 'nothing' );
    this.scene = scene
    this.setBody( { type: 'polygon', sides: 40, radius: 2 }, {} );
    this.setMass( 40 )
    this.body.render.fillStyle = 'red'
    this.body.render.strokeStyle = 'blue'
    this.body.render.lineWidth = 3
    // debugger
  },

  start: function ( x,y )
  {
    this.setPosition( x,y )
  },

  update: function ( time, delta )
  {
    console.log( 'yo' )
    if ( this && this.active ){
      this.setScale( this.scaleX+=growth_speed, this.scaleY+=growth_speed )
      if( this.scaleX > max_size ) {
        this.destroy()
      }
    }
  }

} );

export default function make_explosion ( x,y, scene ) {
  //TODO: figure out how to create classes individually without making a group
  const test_group = scene.add.group( {
    classType: Explosion,
    maxSize: 1,
    runChildUpdate: true
  } )
  test_group.get().start( x, y )
}
