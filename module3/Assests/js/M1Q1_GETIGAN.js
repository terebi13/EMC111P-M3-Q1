// import * as THREE from './three.module.js';
// import {GLTFLoader} from './GLTFLoader.js';

const scene = new THREE.Scene();

const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 400;
const cameraHeight = cameraWidth / aspectRatio;

const camera = new THREE.OrthographicCamera( cameraWidth / -2, cameraWidth / 2, cameraHeight / 2, cameraHeight / -2, 0, 1000 );

camera.position.set(100, 150, 150);
camera.lookAt(0, 2, 0);

const renderer = new THREE.WebGLRenderer();
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(200, 500, 300);
scene.add(directionalLight); 

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );


function exteriorWall(){

    const cementTexture = new THREE.TextureLoader().load("./Assests/textures/cement.jpg");
    const wallGeometry = new THREE.BoxGeometry(180, 60, 10);
    const wallMaterial = new THREE.MeshLambertMaterial({map: cementTexture});
    const wall = new THREE.Mesh(wallGeometry, wallMaterial);
    return wall;
}

function exteriorFloor(){
    const floor = new THREE.Group();
    const woodenTexture = new THREE.TextureLoader().load("./Assests/textures/wooden.jpg");

    const floorPlaneGeometry = new THREE.PlaneGeometry(180,175,30,30);
    const floorMaterial = new THREE.MeshLambertMaterial({map: woodenTexture});
    const floorBase = new THREE.Mesh(floorPlaneGeometry, floorMaterial);
    floorBase.material.side = THREE.DoubleSide;
    floorBase.rotation.x= 11;
    floorBase.position.y= -22;
    floor.add(floorBase);

    const leftWall = exteriorWall();
    leftWall.rotation.y = 190;
    leftWall.position.set(-87, 10);
    floor.add(leftWall);

    return floor;
}
const floor = exteriorFloor();
scene.add(floor);

function exteriorWindow(){
    const window = new THREE.Group();

    const windowFrameGeometry = new THREE.BoxBufferGeometry(40, 45);
    const windowFrameMaterial = new THREE.MeshLambertMaterial({color: "#B0ADB4"});
    const windowFrame = new THREE.Mesh(windowFrameGeometry, windowFrameMaterial);
    windowFrame.position.set(0,10,-0.5);
    window.add(windowFrame);


    return window;
}
const WallWindow = exteriorWindow();
WallWindow.rotation.y= 190;
WallWindow.position.set(-80, 7,-12);
scene.add(WallWindow);

function outdoorFurniture(){
    const furniture = new THREE.Group();

    const tableCylinderGeometry = new THREE.CylinderGeometry(6, 6, 10, 32);
    const tablewoodTexture = new THREE.TextureLoader().load("./Assests/textures/tablewood.jpg");
    const tableCylinderMaterial = new THREE.MeshLambertMaterial({map : tablewoodTexture});
    const table = new THREE.Mesh(tableCylinderGeometry, tableCylinderMaterial);
    // tableCylinderGeometry.rotation.x= 110;
    // tableCylinderGeometry.position.set(0,-20,25);
    furniture.add(table);

    return furniture;
}
const Ofurniture = outdoorFurniture();
Ofurniture.rotation.y=190;
Ofurniture.position.set(-65,10-12)
scene.add(Ofurniture);

function outdoorPool() {
    const pool = new THREE.Group();

    const poolFrameGeometry = new THREE.BoxBufferGeometry(120,3,80);
    const poolFrameMaterial = new THREE.MeshBasicMaterial( {color: "#B9C3CB"});
    const poolFrame = new THREE.Mesh(poolFrameGeometry, poolFrameMaterial);
    pool.add(poolFrame);

    const poolWaterGeometry = new THREE.BoxBufferGeometry(120,3,80);
    const poolTexture = new THREE.TextureLoader().load("./Assests/textures/pool.jpeg");
    const poolWaterMaterial = new THREE.MeshBasicMaterial( {map: poolTexture ,transparent: true, opacity:0.4});
    const poolWater = new THREE.Mesh(poolWaterGeometry, poolWaterMaterial);
    pool.add(poolWater);
}
const Opool = outdoorPool();
// Opool.rotation.y = -110;
// Opool.position.set(-15,37,-73);
scene.add(Opool);

renderer.render(scene, camera);