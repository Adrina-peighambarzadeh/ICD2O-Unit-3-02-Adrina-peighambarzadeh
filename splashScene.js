/* global Phaser */

//copyright (c) 2025 Adrina.peighambarzadeh All rights reserved
//
// created by: Adrina.peighambarzadeh
// created on: Apr 2025
// This is the Splash Scene 

/**
 * This class is the Splash Scene.
 */
class SplashScene extends Phaser.Scene {
  /**
   * This method is construtor.
   */
  constructor() {
    super({key: "splashScene"})
  }

  /**
   * Can be defined on your own Scene.
   * This mathod is called by Scene manager when the scene starts,
   *  before preload() and creat().
   * @param {object} data - Any data passed via ScenePlungin.add() or ScenePlungin.start().
   */
  init(data) {
    this.cameras.main,setBackgroundColor("ffffff")
  }
  
  /**
   * Can be defined on your own Scenes.
   * Use it to load assets.
   */
  pareload() {
    console.log("Splash Scene")
  }

  /** 
   * Can be defined on your own Scenes. 
   * Use it to creat your game objects.
   * @param {object} data - Any data passed via ScenePlungin.add() or ScenePlungin.start().
   */
  creat(data) {
    //pass
  }

  /** 
   * Should be overridden by your own Scenes.
   * This mathod is called once per game step while the scene is running
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta){
    //pass
  }
}

export default SplashScene