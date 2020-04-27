import * as THREE from 'three';

import CreateApartment from '../utils/createApartments';
import CreateWindow from '../utils/createWindows';

import TextureBackground from '../textures/apartment-02/background.png';
import TextureOffice from '../textures/apartment-02/office.png';
import TextureDoor from '../textures/apartment-02/door.png';
import TextureFlowers from '../textures/apartment-02/flowers.png';
import TextureChair from '../textures/apartment-02/chair.png';
import TexturePlane from '../textures/apartment-02/plane.png';
import TextureWindowDay from '../textures/apartment-01/window_simple_D.png';
import TextureLightDay from '../textures/apartment-01/light_simple_D.png';

function ApartmentRightMiddle(scene) {

    let layers = [
        {
            texture: TextureBackground,
            level: 0,
        },
        {
            texture: TextureOffice,
            level: 1,
        },
        {
            texture: TextureDoor,
            level: 1,
        },
        {
            texture: TextureFlowers,
            level: 2,
        },
        {
            texture: TextureChair,
            level: 3,
        },
        {
            texture: TexturePlane,
            level: 3,
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
    apartment.position.x = 1.1;
    scene.add(apartment);

    // LEFT
    let apartmentWindowLeft = CreateWindow(windowLeft);
    apartmentWindowLeft.position.z = 1;
    apartmentWindowLeft.position.x = 0.76;
    apartmentWindowLeft.position.y = -0.01;

    let apartmentLightLeft = CreateWindow(lightLeft);
    apartmentLightLeft.position.z = 1;
    apartmentLightLeft.position.x = 0.762;
    apartmentLightLeft.position.y = 0.003;
    scene.add(apartmentWindowLeft, apartmentLightLeft);

    // RIGHT
    let apartmentWindowRight = CreateWindow(windowRight);
    apartmentWindowRight.position.z = 1;
    apartmentWindowRight.position.x = 1.46;
    apartmentWindowRight.position.y = -0.01;
    
    let apartmentLightRight = CreateWindow(lightRight);
    apartmentLightRight.position.z = 1;
    apartmentLightRight.position.x = 1.462;
    apartmentLightRight.position.y = 0.003;
    scene.add(apartmentWindowRight, apartmentLightRight);

    this.update = (time) => {
        
    }

    this.helpers = (gui) => {
        
    }
}

export default ApartmentRightMiddle;