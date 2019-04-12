export default function control_matter_object(cursors, object) {
  if (cursors.left.isDown)
  {
    object.thrustLeft(0.01);
  }
  else if (cursors.right.isDown)
  {
    object.thrustRight(.01);
  }

  if (cursors.up.isDown)
  {
    object.thrust(0.005);
  }
  else if (cursors.down.isDown)
  {
    object.thrustBack(0.01);
  }
}