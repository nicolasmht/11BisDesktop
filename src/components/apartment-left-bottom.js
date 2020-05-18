import * as THREE from 'three';

import CreateApartment from '../utils/createApartments';
import CreateWindows from '../utils/createWindows';

import Timeline from '../timelines/apartment-left-bottom';

// Window
import TextureSquareWindow from '../textures/windows/square-window.png';
import TextureSquareShadow from '../textures/windows/square-shadow.png';
import TextureSquareFrame from '../textures/windows/square-frame.png';

function ApartmentLeftBottom(scene) {

    // Create the parallax with objects
    let apartment = CreateApartment(Timeline, "bottom-left");
    apartment.position.x = -1.1;
    apartment.position.y = -1.2;

    let windows = CreateWindows(TextureSquareWindow, TextureSquareShadow, TextureSquareFrame);
    //apartment.add(windows);

    scene.add(apartment);

    this.update = (time) => {

        const currentApartment = scene.getObjectByName('Apartment-bottom-left');

        Timeline.map((layer, i) => {
            layer.animations.map((animation, ii) => {

                if (ii <= 0) return;

                if (time > animation.time && animation.passed == undefined) {

                    currentApartment.getObjectByName(layer.name).children[ii].visible = false;

                    if (currentApartment.getObjectByName(layer.name).children[ii + 1]) {
                        currentApartment.getObjectByName(layer.name).children[ii + 1].visible = true;
                    }
                    

                    animation.passed = true
                }
            })
        })
    }

    this.helpers = (gui) => {
        
    }
}

export default ApartmentLeftBottom;