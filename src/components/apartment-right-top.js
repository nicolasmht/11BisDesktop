import * as THREE from 'three';

import CreateApartment from '../utils/createApartments';
import CreateWindow from '../utils/createWindows';

import TextureBackground from '../textures/apartment-right-top/background.png';
import TextureDivingRoom from '../textures/apartment-right-top/diningroom.png';
import TextureLivingRoom from '../textures/apartment-right-top/livingroom.png';
import TexturePlane from '../textures/apartment-02/plane.png';
import TextureWindowDay from '../textures/apartment-01/window_simple_D.png';
import TextureLightDay from '../textures/apartment-01/light_simple_D.png';

// Audios
import BellAudio from '../audios/bell.wav';

function ApartmentRightTop(scene) {

    let layers = [
        {
            texture: TextureBackground,
            level: 0,
        },
        {
            texture: TextureDivingRoom,
            level: 1,
        },
        {
            texture: TextureLivingRoom,
            level: 1,
        },
    ];

    let windowLeft = [
        {
            texture: TextureWindowDay,
            isVisible: true,
        }
    ];

    let lightLeft = [
        {
            texture: TextureLightDay,
            isVisible: false,
        },
    ];

    let windowRight = [
        {
            texture: TextureWindowDay,
            isVisible: true,
        },
    ];

    let lightRight = [
        {
            texture: TextureLightDay,
            isVisible: false,
        },
    ];

    // APARTMENT
    let apartment = CreateApartment(layers);
    apartment.position.y = 1.1;
    apartment.position.x = 1.1;
    scene.add(apartment);

    // LEFT
    let apartmentWindowLeft = CreateWindow(windowLeft);
    apartmentWindowLeft.position.z = 1;
    apartmentWindowLeft.position.x = 0.76;
    apartmentWindowLeft.position.y = 1.2;

    let apartmentLightLeft = CreateWindow(lightLeft);
    apartmentLightLeft.position.z = 1;
    apartmentLightLeft.position.x = 0.762;
    apartmentLightLeft.position.y = 1.21;
    scene.add(apartmentWindowLeft, apartmentLightLeft);

    // RIGHT
    let apartmentWindowRight = CreateWindow(windowRight);
    apartmentWindowRight.position.z = 1;
    apartmentWindowRight.position.x = 1.46;
    apartmentWindowRight.position.y = 1.2;

    let apartmentLightRight = CreateWindow(lightRight);
    apartmentLightRight.position.z = 1;
    apartmentLightRight.position.x = 1.462;
    apartmentLightRight.position.y = 1.21;
    scene.add(apartmentWindowRight, apartmentLightRight);


    // Audio
    let sound = new Howl({
        src: BellAudio,
        volume: 0.8,
    });

    sound.pos(2, 1, 0);

    setTimeout(() => {
        sound.play();
    }, 10000);

    setTimeout(() => {
        sound.play();
    }, 20000);

    this.update = (time) => {

    }

    this.helpers = (gui) => {
        
    }
}

export default ApartmentRightTop;