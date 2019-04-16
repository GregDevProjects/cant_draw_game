import Phaser from "phaser";

import { MainMenu } from './scenes/main_menu'
import { Game } from './scenes/game'
import { GameOver } from './scenes/game_over'
import PhaserMatterCollisionPlugin from "phaser-matter-collision-plugin"
import { width_game, height_game } from './helper'

let config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: width_game,
  height: height_game,
  physics: {
    default: 'matter',
    matter: {
      debug: false,
      gravity: {
        x: 0,
        y: 0
      }
    }
  },
  plugins: {
    scene: [
      {
        plugin: PhaserMatterCollisionPlugin, // The plugin class
        key: "matterCollision", // Where to store in Scene.Systems, e.g. scene.sys.matterCollision
        mapping: "matterCollision" // Where to store in the Scene, e.g. scene.matterCollision
      }
    ]
  },
  scene: [
    MainMenu,
    Game,
    GameOver
  ]

};

const game = new Phaser.Game( config );

function preload () {

}

