export const width_game = 800

export const height_game = 600

export function get_random_int ( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

export function is_actor_outside_world ( actor ) {
  //height and width are reversed here for matterjs
  return actor.y - actor.width/2 > height_game ||
    actor.x > width_game + actor.height/2 ||
    actor.x < - actor.height/2
}

export function make_polygon_from_vertices ( x,y,vertex, scene ) {
  const vertices = Phaser.Physics.Matter.Matter.Vertices.clockwiseSort(
    [vertex ]
  );
  const new_wall = scene.matter.add.fromVertices(
    x,
    y,
    vertices,
    {isStatic: true, isSensor: true, isWall:true} //isWall = hack to give matterCollision a way to recognize a non-phaser object
  )
  new_wall.isWall=true

  return new_wall

}

export function make_button_tween ( target,scene ) {
  scene.tweens.add(
    {
      targets: target,
      scaleX: 1.2,
      scaleY: 1.2,
      yoyo: true,
      repeat: -1
    }
  );
}

export function make_explode_effect ( scene, target, img='orange_particle', big = false ) {
  const particles = scene.add.particles( img )

  particles.createEmitter( {
    x: target.x,
    y: target.y,
    speed: { min: -400, max: 400 },
    angle: { min: 0, max: 360 },
    blendMode: 'SCREEN',
    lifespan: big ? 800 : 400,
    quantity: big? 25 : 20,
    scale: {start: big? 7 : 5,end:0},
  } ).explode();

  particles.setDepth( 2 );
}

export function make_text_effect ( scene, image_key, x, y ) {
  const image = scene.add.image( x, y, image_key )
  scene.tweens.add( {
    targets: image,
    x: x,
    y:  y -700,
    duration: 1500,
    alpha: 0,
    onComplete: ( tween ) =>{
      tween.targets[0].destroy()
    }
  } );
}