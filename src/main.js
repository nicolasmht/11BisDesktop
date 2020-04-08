import Events from 'events';
const events = new Events();

import Scene from './scene';
import MainProd from './main.prod';

// import Stats from 'stats-js';
// const stats = new Stats();
// document.body.appendChild( stats.dom );

const canvas = document.getElementById("canvas");

// Detect if developer mode is enabled
const isDev = (window.location.href.indexOf('#dev') > -1) ? true : false;

const scene = new Scene(canvas);

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
    // stats.begin();

    scene.update();

    // stats.end();

    requestAnimationFrame(render);

}
bindEventListeners();
render();
scene.helpers();

// const code = getCode().then(code => {

//     // Display code
//     document.querySelector('.code').innerText = code;

//     events.emit('listenerSessionCode', code);
// });

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
