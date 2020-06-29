import * as THREE from 'three';

import CreateApartment from '../utils/createApartments';
import CreateSingleWindows from '../utils/createSingleWindows';
import AnimeTimeline from '../utils/animeTimeline';
import AnimeWindows from '../utils/animeWindows';

import Timeline from '../timelines/staircase-top';

function SaircaseTop(scene) {

    // Create the parallax with objects
    let apartment = CreateApartment(Timeline[0], "Staircase-top");
    apartment.position.x = 0;
    apartment.position.y = 1.2;

    let windows = CreateSingleWindows(Timeline[1]);
    windows.position.x = .005;
    apartment.add(windows);

    scene.add(apartment);

    const currentApartment = scene.getObjectByName("Staircase-top");

    this.update = (time) => {
        AnimeTimeline(time, Timeline[0], currentApartment);
        AnimeWindows(time, Timeline[1], currentApartment);
    }

    this.helpers = (gui) => {
        
    }
}

export default SaircaseTop;