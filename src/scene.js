import * as THREE from 'three';
import Anime from 'animejs';
import * as dat from 'dat.gui';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import getNDCCoordinates from './utils/mouse';

// Components
import Facade from './components/facade';

import ApartmentLeftTop from './components/apartment-left-top';
import ApartmentRightTop from './components/apartment-right-top';

import ApartmentLeftMiddle from './components/apartment-left-middle';
import ApartmentRightMiddle from './components/apartment-right-middle';

import ApartmentLeftBottom from './components/apartment-left-bottom';
import ApartmentRightBottom from './components/apartment-right-bottom';

function Scene(canvas, started = false) {

    const clock = new THREE.Clock();
    
    let state = { floor: 0, currentFloor: 0 };

    let mouse = new THREE.Vector2(0, 0);

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }
    
    const scene = buildScene();
    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const components = createComponents(scene);

    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;
    // controls.dampingFactor = 0.25;
    // controls.enableZoom = false;

    function buildScene() {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#000");

        return scene;
    }

    function buildRender({ width, height }) {
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); 
        const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);

        return renderer;
    }

    function buildCamera({ width, height }) {
        /*
        const aspectRatio = width / height;
        const fieldOfView = 60;
        const nearPlane = 1;
        const farPlane = 100; 
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        */
        const camera = new THREE.OrthographicCamera( window.innerWidth / - 1000, window.innerWidth / 1000, window.innerHeight / 1000, window.innerHeight / - 1000, 1, 1000 );

        camera.position.set(0, 0, 2);

        return camera;
    }

    function createComponents(scene) {
        const components = [
            new Facade(scene),
            
            new ApartmentLeftTop(scene),
            new ApartmentRightTop(scene),

            new ApartmentLeftMiddle(scene),
            new ApartmentRightMiddle(scene),

            new ApartmentLeftBottom(scene),
            new ApartmentRightBottom(scene)
        ];

        return components;
    }

    this.update = function() {

        if (!started) return;

        const deltaTime = clock.getDelta();
        const elapsedTime = clock.getElapsedTime();
        
        // controls.update();

        components.forEach(component => component.update(elapsedTime));
        
        renderer.render(scene, camera);
    }

    this.setStarted = function(value) {
        started = value;
    }

    this.helpers = function() {

        const gui = new dat.GUI();

        components.forEach(components => components.helpers(gui));
    }

    this.onWindowResize = function() {
        const { width, height } = canvas;

        screenDimensions.width = width;
        screenDimensions.height = height;

        // camera.aspect = width / height;
        // camera.updateProjectionMatrix();

        // Update the camera
        camera.left = -width / 1000;
        camera.right = width / 1000;
        camera.top = height/ 1000;
        camera.bottom = -height / 1000;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
    }

    this.onMouseMove = function(event) {
        const [x, y] = getNDCCoordinates(event);
        mouse = {x, y};

        //controls.targets = new THREE.Vector3(x * 0.01, 0, 0);
        // camera.position.x = x * 0.01;
        // camera.position.y = state.currentFloor + (y * 0.01);

        scene.children.forEach((child) => {
            if (
                child.name == "Apartment-top-left" || child.name == "Apartment-top-right" ||
                child.name == "Apartment-middle-left" || child.name == "Apartment-middle-right" ||
                child.name == "Apartment-bottom-left" || child.name == "Apartment-bottom-right"
            ) {
                child.children.forEach((apartment) => {

                    // console.log(apartment)

                    if (apartment.name == 'Windows') return;

                    apartment.position.x = (x * apartment.parallax.level) * 0.005;
                    apartment.position.y = (y * apartment.parallax.level) * 0.005;
                });
            }
        });
    }

    /*
     * Interactions
    */
    window.addEventListener('keyup', changeFloor);

    function changeFloor(event) {
		switch (event.key) {
			case 'ArrowUp':
				state.floor =
					state.floor < 1 ? state.floor + 1 : state.floor;
				upView();
				break;
			case 'ArrowDown':
				state.floor =
					state.floor > -1 ? state.floor - 1 : state.floor;
				upView();
				break;
        }
	}

	function upView() {

		let step = 1.2;

		Anime({
            targets: camera.position,
            x: camera.position.x,
			y: camera.position.y * (Math.sign(state.floor) == 0) ? 0 : ((Math.sign(state.floor) == -1) ? -step : step),
			duration: 800,
            easing: 'easeInOutCubic',
            complete: () => { state.currentFloor = camera.position.y }
        });
        
        state.currentFloor = camera.position.y;
	}
}

export default Scene;