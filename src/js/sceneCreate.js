(function() {
  'use strict';

  // link to, or create, namespace
  window.sceneNS = window.sceneNS || {};

  // scene creation function
  window.sceneNS.sceneCreate =
    /**
     * Create a Scene class instance and return it
     * @param  {Canvas} canvas [canvas element which will display the new Scene]
     * @param  {Engine} engine [Engine class instance used to create the Scene]
     * @return {Scene}         [newly created Scene instance]
     */
    function sceneCreate(canvas, engine) {

      // convenience alias for BABYLON namespace
      let BABYLON = window.BABYLON;

      // create scene object
      let scene = new BABYLON.Scene(engine);

      // create a FreeCamera, and set position to x:0, x:5, z:-10
      let camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);

      // point the camera at the scene origin
      camera.setTarget(BABYLON.Vector3.Zero());

      // attach the camera to the canvas
      camera.attachControl(canvas, false);

      // create a basic light, and aim it straight up
      let light = new BABYLON.HemisphericLight(
        'light1', new BABYLON.Vector3(0, 1, 0), scene);

      // Create a "sphere" using built-in shape:
      // Constructor parameters: name, width, depth, subdivisions, scene
      let sphere = BABYLON.Mesh.CreateSphere('sphere', 16, 2, scene);

      // relocate sphere +y by a value of half of its height
      sphere.position.y = 1;

      // create a built-in "ground" shape
      // Constructor parameters: name, width, depth, subdivisions, scene
      var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);

      // return the scene object
      return scene;
    };
}());
