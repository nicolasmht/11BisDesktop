import * as THREE from 'three';

import CreateApartment from '../utils/createApartments';

import TextureBackground from '../textures/apartment-01/background.png';
import Texturekitchen from '../textures/apartment-01/kitchen.png';
import TextureLibrary from '../textures/apartment-01/library.png';
import TextureCouch from '../textures/apartment-01/couch.png';
import TextureLittleTable from '../textures/apartment-01/littleTable.png';
import TextureTable from '../textures/apartment-01/table.png';

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

    let apartment = CreateApartment(layers);
    apartment.position.x -= 1.1;
    scene.add(apartment);

    this.update = (time) => {
        
    }

    this.helpers = (gui) => {
        
    }
}

export default ApartmentLeftMiddle;