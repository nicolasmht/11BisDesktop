import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Events from 'events';
const events = new Events();

import Scene from './scene';

import Stats from 'stats-js';
const stats = new Stats();
document.body.appendChild( stats.dom );

const isDev = (window.location.href.indexOf('#dev') > -1) ? true : false;
const canvas = document.getElementById("canvas");

const firebaseConfig = {
	apiKey: 'AIzaSyAoXmjDuPBCcQV_TW9yS-D43Lj6dgpw110',
	authDomain: 'bis-4401f.firebaseapp.com',
	databaseURL: 'https://bis-4401f.firebaseio.com',
	projectId: 'bis-4401f',
	storageBucket: 'bis-4401f.appspot.com',
	messagingSenderId: '549286074288',
	appId: '1:549286074288:web:e096fc2259699d35206875',
};

const app = firebase.initializeApp(firebaseConfig);
const firestore = app.firestore();

const dbGenerateCode = async (code) => {

    const datas = {
        code: code,
        connected: false,
        use: false
    };

    await firestore
        .collection('sessions')
        .doc(code.toString())
        .set(datas);
}

const getCode = () => {

    return new Promise(resolve => {
        if (sessionStorage.getItem('CODE') == null) {
            const code = Math.floor(Math.random() * (9999 - 1000) + 1000);
            sessionStorage.setItem('CODE', code);
            dbGenerateCode(code);
    
            resolve(code);
        } else {
            resolve(sessionStorage.getItem('CODE'));
        }
    })
    
}

const code = getCode().then(code => {

    // Display code
    document.querySelector('.code').innerText = code;

    events.emit('listenerSessionCode', code);
});

events.on('listenerSessionCode', (code) => {
    
    firestore.collection('sessions')
        .doc(code.toString())
        .onSnapshot(docSnapshot => {
        
        const datas = docSnapshot.data();
        if (datas.connected) {
            events.emit('startScene');
        }
    
    }, error => {
        console.log(`Encountered error: ${err}`);
    });
});

const scene = new Scene(canvas);

bindEventListeners();


function bindEventListeners() {
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    window.addEventListener('mousemove', scene.onMouseMove);
}

function resizeCanvas() {
	canvas.style.width = '100%';
	canvas.style.height= '100%';
	
	canvas.width  = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;
    
    scene.onWindowResize();
}

function render() {
    stats.begin();

    scene.update();

    stats.end();

    requestAnimationFrame(render);

}

events.on('startScene', () => {

    document.querySelector('.container-code').classList.add('hidden');

    render();
    scene.helpers();
});