import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xC8C8C8, 1);
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

// Boolean variable for rotation toggle
let isRotating = true;

// Add event listener to the button
const button = document.getElementById("toggleRotation");
button.textContent = isRotating ? "Stop Rotation" : "Start Rotation";
button.addEventListener("click", () => {
  isRotating = !isRotating;
  button.textContent = isRotating ? "Stop Rotation" : "Start Rotation";
});

function animate() {

    if (isRotating) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    }


    renderer.render( scene, camera );

}