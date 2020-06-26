import * as THREE from 'three';

import CreateApartment from '../utils/createApartments';
import CreateWindows from '../utils/createWindows';
import AnimeTimeline from '../utils/animeTimeline';
import AnimeWindows from '../utils/animeWindows';

import Timeline from '../timelines/apartment-right-middle';

function ApartmentRightMiddle(scene) {

    // Create the parallax with objects
    let apartment = CreateApartment(Timeline[0], "Apartment-middle-right");
    apartment.position.x = 1.1;

    let windows = CreateWindows(Timeline[1]);
    windows.position.x += 0.012;
    windows.position.y -= 0.012;
    apartment.add(windows);

    scene.add(apartment);

    const currentApartment = scene.getObjectByName('Apartment-middle-right');

    this.update = (time) => {
        AnimeTimeline(time, Timeline[0], currentApartment);
        AnimeWindows(time, Timeline[1], currentApartment);
    }

    this.helpers = (gui) => {
        
    }
}

export default ApartmentRightMiddle;