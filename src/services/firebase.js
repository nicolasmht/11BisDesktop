import * as firebase from 'firebase/app';
import 'firebase/firestore';
import ConfigFirebase from './config';

const app = firebase.initializeApp(ConfigFirebase);
const firestore = app.firestore();

const createCodeDatabase = async (code) => {
    
    const datas = {
        code: code,
        connected: false,
        use: false,
        apartment: 0
    };

    await firestore
        .collection('sessions')
        .doc(code.toString())
        .set(datas);
}

export const checkCodeExist = async () => {

    // Check in local storage
    if (sessionStorage.getItem('CODE') == null) { return true; }

    const code = sessionStorage.getItem('CODE');

    // Check if code exist in database
    await firestore.collection('sessions').doc(code).get();
}

export const getCode = () => {
    return new Promise(resolve => {
        if (sessionStorage.getItem('CODE') == null) {
            const code = Math.floor(Math.random() * (9999 - 1000) + 1000);
            sessionStorage.setItem('CODE', code);
            createCodeDatabase(code);
    
            resolve(code);
        } else {
            resolve(sessionStorage.getItem('CODE'));
        }
    });
}

// export const generateCode = Math.floor(Math.random() * (9999 - 1000) + 1000);