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

    const wallGeometry = new THREE.BoxGeometry(180, 60, 10);
    // const cementTexture = new THREE.TextureLoader().load("./Assests/textures/cement.jpg");
    // const wallMaterial = new THREE.MeshLambertMaterial({map: cementTexture});
    const wallMaterial = new THREE.MeshLambertMaterial({color: "#B0ADB4"});
    const wall = new THREE.Mesh(wallGeometry, wallMaterial);
    return wall;
}

function exteriorFloor(){
    const floor = new THREE.Group();

    const floorPlaneGeometry = new THREE.PlaneGeometry(180,175,30,30);
    // const floorMaterial = new THREE.MeshLambertMaterial({map: woodenTexture});
    // const woodenTexture = new THREE.TextureLoader().load("./Assests/textures/wooden.jpg");
    const floorMaterial = new THREE.MeshLambertMaterial({color: "#B0ADB4"});
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

    const FrameGeometry = new THREE.BoxGeometry(140, 50);
    const FrameMaterial = new THREE.MeshLambertMaterial({color: "#6D482C"});
    const Frame = new THREE.Mesh(FrameGeometry, FrameMaterial);
    Frame.position.set(0,0,-0.5);
    window.add(Frame);

    const windowGlassGeometry = new THREE.BoxGeometry(80, 45);
    // const windowGlassTexture = new THREE.TextureLoader().load("./Assests/textures/windowglass.jpg");
    // const windowGlassMaterial = new THREE.MeshLambertMaterial({map : windowGlassTexture});
    const windowGlassMaterial = new THREE.MeshLambertMaterial({color: "#B0ADB4"});
    const windowGlass  = new THREE.Mesh(windowGlassGeometry, windowGlassMaterial);
    windowGlass.position.set(20,0,0.8);
    window.add(windowGlass);

    const doorGeometry = new THREE.BoxGeometry(30, 45);
    // const doorTexture = new THREE.TextureLoader().load("./Assests/textures/door.jpg");
    // const doorMaterial = new THREE.MeshLambertMaterial({map : doorTexture});
    const doorMaterial = new THREE.MeshLambertMaterial({color: "#FEFEFE"});
    const door  = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(-40,0,0.8);
    window.add(door);

    const DoorKnobGeometry  = new THREE.BoxGeometry(4, 8);
    const DoorKnobMaterial = new THREE.MeshLambertMaterial({color: "#000000"});
    const DoorKnob = new THREE.Mesh(DoorKnobGeometry,DoorKnobMaterial);
    DoorKnob.position.set(-30,0,1.5);
    window.add(DoorKnob);


    return window;
}
const WallWindow = exteriorWindow();
WallWindow.rotation.y= 190;
WallWindow.position.set(-80, 7,-12);
scene.add(WallWindow);

function outdoorFurniture(){
    const furniture = new THREE.Group();

    const tableCylinderGeometry = new THREE.CylinderGeometry(15, 15, 3, 60);
    // const tablewoodTexture = new THREE.TextureLoader().load("./Assests/textures/tablewood.jpg");
    // const tableCylinderMaterial = new THREE.MeshLambertMaterial({map : tablewoodTexture});
    const tableCylinderMaterial = new THREE.MeshLambertMaterial({color: "#926D3D"});
    const table = new THREE.Mesh(tableCylinderGeometry, tableCylinderMaterial);
    table.rotation.x= 110;
    table.position.set(25,5,25);
    furniture.add(table);

    const tableLGeometry = new THREE.CylinderGeometry(2, 2, 30, 60);
    const tableLMaterial = new THREE.MeshLambertMaterial({color: "#000000"});
    const tableL= new THREE.Mesh(tableLGeometry, tableLMaterial);
    tableL.rotation.x= 110;
    tableL.position.set(25,-10,25);
    furniture.add(tableL);

    const chairOneGeometry = new THREE.CylinderGeometry(6, 6, 3, 60);
    const chairOneMaterial = new THREE.MeshLambertMaterial({color: "#926D3D"});
    const chairOne = new THREE.Mesh(chairOneGeometry,chairOneMaterial);
    chairOne.rotation.x= 110;
    chairOne.position.set(10,-3,25);
    furniture.add(chairOne);

    const chairOLGeometry = new THREE.CylinderGeometry(2, 2, 15, 60);
    const chairOLMaterial = new THREE.MeshLambertMaterial({color: "#000000"});
    const chairOL = new THREE.Mesh(chairOLGeometry,chairOLMaterial);
    chairOL.rotation.x= 110;
    chairOL.position.set(10,-10,25);
    furniture.add(chairOL);

    const chairTwoGeometry = new THREE.CylinderGeometry(6, 6, 3, 60);
    const chairTwoMaterial = new THREE.MeshLambertMaterial({color: "#926D3D"});
    const chairTwo = new THREE.Mesh(chairTwoGeometry,chairTwoMaterial);
    chairTwo.rotation.x= 110;
    chairTwo.position.set(25,-3,40);
    furniture.add(chairTwo);

    const chairTLGeometry = new THREE.CylinderGeometry(2, 2, 15, 60);
    const chairTLMaterial = new THREE.MeshLambertMaterial({color: "#000000"});
    const chairTL = new THREE.Mesh(chairTLGeometry,chairTLMaterial);
    chairTL.rotation.x= 110;
    chairTL.position.set(25,-10,40);
    furniture.add(chairTL);
    
    const grillGeometry = new THREE.BoxGeometry(15, 10, 30);
    const grillMaterial = new THREE.MeshLambertMaterial({color: "#3E3A3A"});
    const grill = new THREE.Mesh(grillGeometry, grillMaterial);
    grill.rotation.y = 110;
    grill.position.set(75,5,30);
    furniture.add(grill);

    const grillLGeometry = new THREE.BoxGeometry(2, 15, 2);
    const grillLMaterial = new THREE.MeshLambertMaterial({color: "#000000"});
    const grillL = new THREE.Mesh(grillLGeometry, grillLMaterial);
    grillL.position.set(75,-10,40);
    furniture.add(grillL);

    const grillRGeometry = new THREE.BoxGeometry(2, 15, 2);
    const grillRMaterial = new THREE.MeshLambertMaterial({color: "#000000"});
    const grillR = new THREE.Mesh(grillRGeometry, grillRMaterial);
    grillR.position.set(75,-10,20);
    furniture.add(grillR);

    const plantsPotGeometry = new THREE.BoxGeometry(15, 15, 80);
    // const plantsPotTexture = new THREE.TextureLoader().load("./Assests/textures/plants.jpg");
    // const plantsPotMaterial = new THREE.MeshLambertMaterial({map : potTexture});
    const plantsPotMaterial = new THREE.MeshLambertMaterial({color: "#BEBEBE"});
    const plantsPot = new THREE.Mesh(plantsPotGeometry, plantsPotMaterial);
    plantsPot.rotation.y = 110;
    plantsPot.position.set(-80,-10,23);
    furniture.add(plantsPot);

    const plantsGeometry = new THREE.BoxGeometry(10, 10, 75);
    const plantsTexture = new THREE.TextureLoader().load("./Assests/textures/wooden.jpg");
    const plantsMaterial = new THREE.MeshLambertMaterial({map : plantsTexture});
    // const plantsMaterial = new THREE.MeshLambertMaterial({color: "#62A45D"});
    const plants = new THREE.Mesh(plantsGeometry, plantsMaterial);
    plants.rotation.y = 110;
    plants.position.set(-80,0,23);
    furniture.add(plants); 
    
    return furniture;
}
const Ofurniture = outdoorFurniture();
Ofurniture.rotation.y=190;
Ofurniture.position.set(-65,10-12)
scene.add(Ofurniture);


function outdoorLamp() {
    const OlampGeometry = new THREE.BoxGeometry(4, 8, 3);
    const OlampMaterial = new THREE.MeshLambertMaterial({color: "#DFAE3C"});
    const Olamp = new THREE.Mesh(OlampGeometry, OlampMaterial);
    Olamp.rotation.y=190;
    Olamp.position.set(-28,-5,-15);
    return Olamp;
};

function outdoorLight() {
    const lamp = new THREE.Group();
   
    const wallLamp = outdoorLamp();
    lamp.add(wallLamp);

    const light = new THREE.PointLight (0xF4D386, 1, 200);
    lamp.add(light);

    return lamp;
}
const Lightlamp = outdoorLight();
Lightlamp.position.set(-55,20,65);
scene.add(Lightlamp);

function outdoorPool(){
    const pool = new THREE.Group()

    const poolFrameGeometry = new THREE.BoxGeometry(30,10,120);
    const poolFrameMaterial = new THREE.MeshPhongMaterial({color: "#B6C4CF"});
    const poolFrame = new THREE.Mesh(poolFrameGeometry,poolFrameMaterial);
    poolFrame.position.set(35,-35,15);
    pool.add(poolFrame);

    const poolInner = poolDesign();
    poolInner.position.set(35,-30,15);
    pool.add(poolInner);

    const poolStairGeometry = new THREE.BoxGeometry(25,5,10);
    const poolStairMaterial = new THREE.MeshPhongMaterial({color: "#B6C4CF"});
    const poolStair = new THREE.Mesh(poolStairGeometry,poolStairMaterial);
    poolStair.position.set(33,-40,78);
    pool.add(poolStair);
    return pool;
}
const Opool = outdoorPool();
Opool.scale.x=3;
Opool.rotation.y=0;
Opool.position.set(-40.-5,50);
scene.add(Opool);

function poolDesign() {
    const poolWaterGeometry = new THREE.BoxGeometry(25,5,100);
    // const poolTexture = new THREE.TextureLoader().load("./Assests/textures/pool.jpg");
    // const poolWaterMaterial = new THREE.MeshLambertMaterial({map : poolTexture});
    const poolWaterMaterial = new THREE.MeshPhongMaterial({color: "#84CBCF"});
    const poolWater = new THREE.Mesh(poolWaterGeometry,poolWaterMaterial);
    return poolWater;
}
  

renderer.render(scene, camera);