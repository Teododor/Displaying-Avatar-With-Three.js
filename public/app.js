const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
const scene = new THREE.Scene();

var Mesh;
var light;

function init(){
    scene.background = new THREE.Color('black');
    camera.position.set(0, 10, 20);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function setLight(){

}

function loadGLTF(){
    let loader = new THREE.GLTFLoaderUtils();

    loader.load('/ThePeasantBoss.glb', (gltf) => {
        Mesh = gltf.scene;
        Mesh.scale.set(0.2,0.2,0.2);
        scene.add(Mesh);
        Mesh.position.x = 0;
        Mesh.position.y = 10;
        Mesh.position.z = 15;
    });
}

function animate(){

}

init();
setLight();
loadGLTF();
animate();