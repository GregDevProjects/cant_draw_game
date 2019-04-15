export function angle_to_straight ( actor, turn_speed ) {
  if ( actor.angle < -90 ) {
    //this.setAngularVelocity(0.00001)
    actor.angle += turn_speed
  } else if ( actor.angle > -90 ) {
    //this.setAngularVelocity(-0.00001)
    actor.angle -= turn_speed
  }
}