import * as THREE from 'three';

import { Howl, Howler } from 'howler';

import CreateApartment from '../utils/createApartments';
import CreateWindows from '../utils/createWindows';

import Timeline from '../timelines/apartment-left-middle';

// Window
import TextureSquareWindow from '../textures/windows/square-window.png';
import TextureSquareShadow from '../textures/windows/square-shadow.png';
import TextureSquareFrame from '../textures/windows/square-frame.png';

// Audios
import Bell from '../audios/bell.wav';
import Door from '../audios/door.wav';
import Cat from '../audios/cat.wav';
import Eat from '../audios/eat.wav';
import Peolpe from '../audios/people-talking.wav';

function ApartmentLeftMiddle(scene) {

    // Create the parallax with objects
    let apartment = CreateApartment(Timeline, "middle-left");
    apartment.position.x = -1.1;

    let windows = CreateWindows(TextureSquareWindow, TextureSquareShadow, TextureSquareFrame);
    //apartment.add(windows);

    scene.add(apartment);

    // Audio
    let TimelineAudios = [
        {
            time: 5,
            src: Door
        },
        {
            time: 15,
            src: Peolpe
        },
        {
            time: 25,
            src: Bell
        },
        {
            time: 30,
            src: Cat
        },
        {
            time: 35,
            src: Eat
        }
    ];

    this.update = (time) => {

        const currentApartment = scene.getObjectByName('Apartment-middle-left');

        Timeline.map((layer, i) => {
            layer.animations.map((animation, ii) => {

                if (ii <= 0) return;

                if (time > animation.time && animation.passed == undefined) {

                    currentApartment.getObjectByName(layer.name).children[ii].visible = false;

                    if (currentApartment.getObjectByName(layer.name).children[ii + 1]) {
                        currentApartment.getObjectByName(layer.name).children[ii + 1].visible = true;
                    }
                    

                    animation.passed = true;
                }
            })
        })

        TimelineAudios.map((audio) => {
            if (time > audio.time && audio.passed == undefined) {
                new Howl({ src: audio.src, autoplay: true, volume: .8, });
                audio.passed = true;
            }
        })

        // console.log(time)
    }

    this.helpers = (gui) => {
        
    }
}

export default ApartmentLeftMiddle;