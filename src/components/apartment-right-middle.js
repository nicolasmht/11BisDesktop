import * as THREE from 'three';

import CreateApartment from '../utils/createApartments';

import TextureBackground from '../textures/apartment-02/background.png';
import TextureOffice from '../textures/apartment-02/office.png';
import TextureDoor from '../textures/apartment-02/door.png';
import TextureFlowers from '../textures/apartment-02/flowers.png';
import TextureChair from '../textures/apartment-02/chair.png';
import TexturePlane from '../textures/apartment-02/plane.png';

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

    let apartment = CreateApartment(layers);
    apartment.position.x = 1.1;
    scene.add(apartment);

    this.update = (time) => {
        
    }

    this.helpers = (gui) => {
        
    }
}

export default ApartmentRightMiddle;