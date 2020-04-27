import * as THREE from 'three';

import CreateApartment from '../utils/createApartments';
import CreateWindows from '../utils/createWindows';

import TextureBackground from '../textures/apartment-01/background.png';
import Texturekitchen from '../textures/apartment-01/kitchen.png';
import TextureLibrary from '../textures/apartment-01/library.png';
import TextureCouch from '../textures/apartment-01/couch.png';
import TextureLittleTable from '../textures/apartment-01/littleTable.png';
import TextureTable from '../textures/apartment-01/table.png';

// Window
import TextureSquareWindow from '../textures/windows/square-window.png';
import TextureSquareShadow from '../textures/windows/square-shadow.png';
import TextureSquareFrame from '../textures/windows/square-frame.png';

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

    // Create the parallax with objects
    let apartment = CreateApartment(layers);
    apartment.position.x -= 1.1;

    let windows = CreateWindows(TextureSquareWindow, TextureSquareShadow, TextureSquareFrame);
    apartment.add(windows);

    scene.add(apartment);

    this.update = (time) => {
        
    }

    this.helpers = (gui) => {
        
    }
}

export default ApartmentLeftMiddle;