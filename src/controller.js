const turn_speed = 0.05
const move_speed = 0.02

export const editor_mode = false
export function control_matter_object ( cursors, object ) {
  if ( cursors.left.isDown )
  {
    //object.setAngularVelocity( -turn_speed );
    //object.thrustLeft( move_speed )
    //object.x-=5
    object.angle=240
    // if ( object.angle<=240 )
    //   object.angle--

    //object.body.applyForce()
    Phaser.Physics.Matter.Matter.Body.applyForce( object.body,{x: object.x, y: object.y}, {x: -0.002, y: 0} )
    // console.log(  )
    //debugger
  }
  else if ( cursors.right.isDown )
  {
    //object.setAngularVelocity( turn_speed );
    //object.thrustRight( move_speed )
    // if ( object.angle<=-50 ){
    //   object.angle++
    //   console.log( object.angle++ )
    // }
    object.angle=300
    Phaser.Physics.Matter.Matter.Body.applyForce( object.body,{x: object.x, y: object.y}, {x: 0.002, y: 0} )
  }

  if ( cursors.up.isDown )
  {
    if( !cursors.left.isDown && !cursors.right.isDown )
      object.angle = 270
    object.thrust( 0.002 );
    if ( editor_mode ) {
      object.thrust( 5.102 )
      object.setFrictionAir( 1 )
    }


  }
  else if ( cursors.down.isDown )
  {
    if( !cursors.left.isDown && !cursors.right.isDown )
      object.angle=270

    object.thrustBack( 0.002 );
    if ( editor_mode ) {
      object.setFrictionAir( 1 )
      object.thrustBack( 5.102 );
    }
  }
}

export function mouse_click ( input, callback_function ){
  input.on( 'pointerdown', function ( pointer ) {
    callback_function( {x:pointer.worldX, y:pointer.worldY} )
  } )
}