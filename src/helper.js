export const width_game = 400

export const height_game = 500

export function get_random_int ( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

export function is_actor_outside_world ( actor ) {
  //height and width are reversed here for matterjs
  return actor.y - actor.width/2 > height_game ||
    actor.x > width_game + actor.height/2 ||
    actor.x < - actor.height/2
}