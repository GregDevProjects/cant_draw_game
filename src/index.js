import Phaser from "phaser";
import logoImg from "./assets/logo.png";

import { MainMenu } from './main_menu'
import {width_game, height_game} from './helper'

let config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: width_game,
  height: height_game,
  physics: {
      default: 'matter',
      matter: {
          debug: true,
          gravity: {
              x: 0,
              y: 0
          }
      }
  },
  scene: [
      MainMenu,
  ]

};

const game = new Phaser.Game(config);

function preload() {

}

