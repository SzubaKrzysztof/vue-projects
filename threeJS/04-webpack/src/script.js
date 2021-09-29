import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

// ...
// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
	width: 800,
	height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);
// Renderer
const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector("canvas.webgl"),
});
renderer.setSize(sizes.width, sizes.height);

const clock = new THREE.Clock();
const elapsedTime = clock.getElapsedTime();
/**
 * Animate
 *
 */

gsap.fromTo(
	mesh.position,
	{ duration: 2, delay: 1, x: 2, y: 1 },
	{ duration: 2, delay: 1, x: -2, y: -1, repeat: -1, yoyo: true }
);

const tick = () => {
	// const elapsedTime = clock.getElapsedTime();
	// window.addEventListener("mousemove", function (mouse) {
	// 	// mesh.rotateX(mouse.x);
	// 	// mesh.rotateY(mouse.y);
	// });
	// mesh.position.x = Math.sin(elapsedTime);
	// mesh.position.y = Math.sin(elapsedTime);
	// mesh.rotation.y += 0.01;
	// mesh.rotation.x += 0.005;
	renderer.render(scene, camera);
	window.requestAnimationFrame(tick);
};
tick();
