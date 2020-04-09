import * as THREE from 'three';

import CreateApartment from '../utils/createApartments';
import CreateWindow from '../utils/createWindows';

import TextureBackground from '../textures/apartment-01/background.png';
import Texturekitchen from '../textures/apartment-01/kitchen.png';
import TextureLibrary from '../textures/apartment-01/library.png';
import TextureCouch from '../textures/apartment-01/couch.png';
import TextureLittleTable from '../textures/apartment-01/littleTable.png';
import TextureTable from '../textures/apartment-01/table.png';
import TextureWindowDay from '../textures/apartment-01/window_simple_D.png';
import TextureLightDay from '../textures/apartment-01/light_simple_D.png';
import TextureWindowNight from '../textures/apartment-01/window_simple_N.png';

function ApartmentLeftMiddle(scene) {

    let layers = [
        {
            texture: TextureBackground,
            level: 0,
        },
        {
            texture: Texturekitchen,
            level: 1,
        },
        {
            texture: TextureLibrary,
            level: 1,
        },
        {
            texture: TextureCouch,
            level: 2,
        },
        {
            texture: TextureLittleTable,
            level: 3,
        },
        {
            texture: TextureTable,
            level: 3,
        },
    ];

    let windowLeft = [
        {
            texture: TextureWindowDay,
            isVisible: true,
        },
        {
            texture: TextureWindowNight,
            isVisible: false,
        },  
    ];

    let windowRight = [
        {
            texture: TextureWindowDay,
            isVisible: false,
        },
    ];

    let lightLeft = [
        {
            texture: TextureLightDay,
            isVisible: false,
        },
    ];

    let lightRight = [
        {
            texture: TextureLightDay,
            isVisible: false,
        },
    ];


    let apartment = CreateApartment(layers);
    let apartmentWindowLeft = CreateWindow(windowLeft);
    let apartmentWindowRight = CreateWindow(windowRight);
    let apartmentLightLeft = CreateWindow(lightLeft);
    let apartmentLightRight = CreateWindow(lightRight);

    apartment.position.x -= 1.1;

    // LEFT
    apartmentWindowLeft.position.z = 1;
    apartmentWindowLeft.position.x = -1.46;
    apartmentWindowLeft.position.y = -0.01;

    apartmentLightLeft.position.z = 1;
    apartmentLightLeft.position.x = -1.462;
    apartmentLightLeft.position.y = 0.003;

    // RIGHT
    apartmentWindowRight.position.z = 1;
    apartmentWindowRight.position.x = -0.76;
    apartmentWindowRight.position.y = -0.01;

    apartmentLightRight.position.z = 1;
    apartmentLightRight.position.x = -0.762;
    apartmentLightRight.position.y = 0.003;



    scene.add(apartment, apartmentWindowLeft, apartmentWindowRight, apartmentLightLeft, apartmentLightRight);

    this.update = (time) => {
        
    }

    this.helpers = (gui) => {
        
    }
}

export default ApartmentLeftMiddle;