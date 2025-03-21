import * as THREE from 'three';

// Создаем сцену
export function createScene() {
  const scene = new THREE.Scene();
  return scene;
}

// Создаем камеру
export const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Создаем рендерер
export const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);