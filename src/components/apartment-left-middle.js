import * as THREE from 'three';

import { Howl, Howler } from 'howler';

import CreateApartment from '../utils/createApartments';
import CreateWindows from '../utils/createWindows';
import AnimeTimeline from '../utils/animeTimeline';
import AnimeWindows from '../utils/animeWindows';

import Timeline from '../timelines/apartment-left-middle';

function ApartmentLeftMiddle(scene) {

    // Create the parallax with objects
    let apartment = CreateApartment(Timeline[0], "Apartment-middle-left");
    apartment.position.x = -1.1;

    let windows = CreateWindows(Timeline[1]);
    windows.position.x -= 0.011;
    windows.position.y -= 0.015;
    apartment.add(windows);

    scene.add(apartment);

    const currentApartment = scene.getObjectByName('Apartment-middle-left');

    this.update = (time) => {
        AnimeTimeline(time, Timeline[0], currentApartment);
        AnimeWindows(time, Timeline[1], currentApartment);

        Timeline[2][0].audios.map(audio => {

            if (time > audio.time && audio.passed == undefined) {
                
                new Howl({
                    src: audio.src,
                    autoplay: true,
                    volume: .25
                });

                audio.passed = true;
            }
        });
    }

    this.helpers = (gui) => {
        
    }
}

export default ApartmentLeftMiddle;