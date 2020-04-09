import * as THREE from 'three';

import CreateApartment from '../utils/createApartments';

import TextureBackground from '../textures/apartment-right-top/background.png';
import TextureDivingRoom from '../textures/apartment-right-top/diningroom.png';
import TextureLivingRoom from '../textures/apartment-right-top/livingroom.png';

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

    let apartment = CreateApartment(layers);
    apartment.position.y = 1.1;
    apartment.position.x = 1.1;

    scene.add(apartment);

    // Audio
    // let sound = new Howl({
    //     src: BellAudio,
    //     volume: 0.8,
    // });

    // sound.pos(2, 1, 0);

    // setTimeout(() => {
    //     sound.play();
    // }, 10000);

    // setTimeout(() => {
    //     sound.play();
    // }, 20000);

    this.update = (time) => {

    }

    this.helpers = (gui) => {
        
    }
}

export default ApartmentRightTop;