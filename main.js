import {createScene, renderer, camera} from './sceneSetup'
import { setBackgroundColor } from './colorManager.js';
import { createCube } from './shapeCreator';

// Установка сценыы
const scene = createScene();
setBackgroundColor(scene);

// Cоздаём куб
const cube = createCube();

// Добавляем куб в сцену
scene.add( cube );

function animate() {
	renderer.render( scene, camera );
    cube.rotation.y -= 0.01;
}
renderer.setAnimationLoop( animate );