import * as THREE from 'three';

import CreateApartment from '../utils/createApartments';
import CreateWindows from '../utils/createWindows';
import AnimeTimeline from '../utils/animeTimeline';
import AnimeWindows from '../utils/animeWindows';

import Timeline from '../timelines/apartment-left-bottom';

function ApartmentLeftBottom(scene) {

    // Create the parallax with objects
    let apartment = CreateApartment(Timeline[0], "Apartment-bottom-left");
    apartment.position.x = -1.1;
    apartment.position.y = -1.2;

    let windows = CreateWindows(Timeline[1]);
    windows.position.x -= 0.011;
    windows.position.y -= 0.015;
    apartment.add(windows);

    scene.add(apartment);

    const currentApartment = scene.getObjectByName('Apartment-bottom-left');

    this.update = (time) => {
        AnimeTimeline(time, Timeline[0], currentApartment);
        AnimeWindows(time, Timeline[1], currentApartment);
    }

    this.helpers = (gui) => {
        
    }
}

export default ApartmentLeftBottom;