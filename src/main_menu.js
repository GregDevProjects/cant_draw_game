import image_main_menu from './assets/main_menu_bg.png'
import image_start from './assets/main_menu_start.png'
import image_pizza from './assets/main_menu_pizza.png'

import {width_game, height_game} from './helper'

export class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'main_menu', active: false });
  }
  preload() {
    this.load.image("main_menu_bg", image_main_menu);
    this.load.image("image_start", image_start);
    this.load.image("image_pizza", image_pizza);
  }

  create() {
    this.add.image(width_game/2,height_game/2,'main_menu_bg')
    this.add.image(width_game/2, 350, 'image_start')
    this.add.image(width_game/2, 450, 'image_pizza')
  }
  update() {

  }
}