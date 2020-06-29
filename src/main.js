import * as THREE from 'three';
import Events from 'events';
const events = new Events();

import { getCode } from './services/firebase';

import Scene from './scene';
import MainProd from './main.prod';

import firebase from 'firebase/app';
import 'firebase/storage';
var db = firebase.firestore();

// import Stats from 'stats-js';
// const stats = new Stats();
// document.body.appendChild( stats.dom );

const canvas = document.getElementById("canvas");

// Detect if developer mode is enabled
const isDev = (window.location.href.indexOf('#dev') > -1) ? true : false;

const scene = new Scene(canvas);

const startExperience = () => {

    document.querySelector('#container-start').classList.add('fadeOut');

    scene.setStarted(true);

    function resizeCanvas() {
        canvas.style.width = '100%';
        canvas.style.height= '100%';
        
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        scene.onWindowResize();
    }
    
    function bindEventListeners() {
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        window.addEventListener('mousemove', scene.onMouseMove);
    }
    
    function render() {    
        scene.update();   
        requestAnimationFrame(render);
    }

    bindEventListeners();
    render();
    scene.helpers();
}

document.querySelector('.button.start').addEventListener('click', () => {
    startExperience();
});

if (isDev) {
    startExperience();
}

const code = getCode().then(code => {

    // Display code
    const splitedCode = code.toString().split('');
    document.querySelector('.container-code .code.c-01').innerText = splitedCode[0];
    document.querySelector('.container-code .code.c-02').innerText = splitedCode[1];
    document.querySelector('.container-code .code.c-03').innerText = splitedCode[2];
    document.querySelector('.container-code .code.c-04').innerText = splitedCode[3];

    db.collection('sessions')
        .doc(code.toString())
        .onSnapshot(docSnapshot => {
    
        const datas = docSnapshot.data();
        
        // When the connected in firebase is true
        if (datas.connected) {
            startExperience();
        } else {
            console.log('Not connected')
        }
    
    }, error => {
        console.log(`Encountered error: ${err}`);
    });
    // console.log(code)
});

// events.on('listenerSessionCode', (code) => {
    
//     firestore.collection('sessions')
//         .doc(code.toString())
//         .onSnapshot(docSnapshot => {
        
//         const datas = docSnapshot.data();
//         if (datas.connected) {
//             events.emit('startScene');
//         }
    
//     }, error => {
//         console.log(`Encountered error: ${err}`);
//     });
// });


// events.on('EventStartSceneProd', () => {
//     document.querySelector('.container-code').classList.add('hidden');
//     render();
//     scene.helpers();
// });



// MainProd();

// Overlay of loader
THREE.DefaultLoadingManager.onStart = function ( url, itemsLoaded, itemsTotal ) {
	console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
};

THREE.DefaultLoadingManager.onLoad = function ( ) {
    document.querySelector('.container-loader').style.visibility = 'hidden';

    // document.querySelector('#container-buttons .button:first-child').style.opacity = '1';
    // document.querySelector('#container-buttons .button:last-child').style.opacity = '1';
    document.querySelector('.container-code').style.opacity = '1';
};

THREE.DefaultLoadingManager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
    document.querySelector('.container-loader .progress').style.width = (100 * itemsLoaded) / itemsTotal + '%';
};

THREE.DefaultLoadingManager.onError = function ( url ) {

};

// Reload
document.addEventListener('keyup', (e) => {
    if (e.key === "r") {
        sessionStorage.removeItem('CODE');
        document.location.reload(true);
    }
});

