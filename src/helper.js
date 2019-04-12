export const width_game = 400

export const height_game = 500

export function get_random_int(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}