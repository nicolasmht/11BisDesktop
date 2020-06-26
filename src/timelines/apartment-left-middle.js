import Mur01 from '../textures/apartment-left-middle/000/Mur-1.png';
import Mur02 from '../textures/apartment-left-middle/000/Mur-2.png';
import Mur03 from '../textures/apartment-left-middle/000/Mur-3.png';

import Object01 from '../textures/apartment-left-middle/000/OBJ-1.png';
import Object02 from '../textures/apartment-left-middle/000/OBJ-2.png';
import Object03 from '../textures/apartment-left-middle/000/OBJ-3.png';

import Parquet01 from '../textures/apartment-left-middle/000/Parquet-1.png';
import Parquet02 from '../textures/apartment-left-middle/000/Parquet-2.png';

import Plante01 from '../textures/apartment-left-middle/000/Plantes-1.png';
import Plante02 from '../textures/apartment-left-middle/000/Plantes-2.png';

import Salon01 from '../textures/apartment-left-middle/000/Salon-1.png';
import Salon02 from '../textures/apartment-left-middle/000/Salon-2.png';
import Salon03 from '../textures/apartment-left-middle/000/Salon-3.png';
import Salon04 from '../textures/apartment-left-middle/000/Salon-4.png';
import Salon05 from '../textures/apartment-left-middle/000/Salon-5.png';
import Salon06 from '../textures/apartment-left-middle/000/Salon-6.png';

import Fenetre1VJ from '../textures/windows/Fenetre-1V-J.png';
import Fenetre2VJ from '../textures/windows/Fenetre-2V-J.png';
import Fenetre2VN from '../textures/windows/Fenetre-2V-N.png';
import Fenetre2VR from '../textures/windows/Fenetre-2V-R.png';
import Fenetre4VJ from '../textures/windows/Fenetre-4V-J.png';
import Fenetre4VN from '../textures/windows/Fenetre-4V-N.png';
import Fenetre4VR from '../textures/windows/Fenetre-4V-R.png';
import Fenetre6VJ from '../textures/windows/Fenetre-6V-J.png';
import Fenetre6VN from '../textures/windows/Fenetre-6V-N.png';
import Fenetre6VR from '../textures/windows/Fenetre-6V-R.png';

export default [
    [
        {
            name: 'parquet',
            level: 0,

            animations: [
                // 18:00
                { time: 0, texture: Parquet01 },
                // { time: 8, texture: Parquet01 },
                // { time: 16, texture: Parquet01 },
                // { time: 25, texture: Parquet01 },

                // 01:00
                // { time: 233, texture: Parquet01 },
                { time: 241, texture: Parquet02 },
                // { time: 258, texture: Parquet01 },
                // { time: 250, texture: Parquet01 },
            ]
        },
        {
            name: 'mur',
            level: .5,

            animations: [
                // 18:00
                { time: 0, texture: Mur03 },
                // { time: 8, texture: Mur01 },
                { time: 16, texture: Mur01 },
                // { time: 25, texture: Mur01 },

                // 20:00
                { time: 66, texture: Mur03 },
                // { time: 75, texture: Mur01 },
                // { time: 83, texture: Mur01 },
                // { time: 91, texture: Mur01 },

                // 01:00
                { time: 233, texture: Mur02 },
                // { time: 241, texture: Mur01 },
                // { time: 250, texture: Mur01 },
                // { time: 258, texture: Mur01 },
            ]
        },
        {
            name: 'salon',
            level: .5,

            animations: [
                // 18:00
                { time: 0, texture: Salon01 },
                // { time: 8, texture: Salon01 },
                { time: 16, texture: Salon03 },
                // { time: 25, texture: Salon01 },

                // 20:00
                // { time: 66, texture: Salon01 },
                // { time: 75, texture: Salon01 },
                // { time: 83, texture: Salon01 },
                { time: 91, texture: Salon06 },

                // 21:00
                { time: 100, texture: Salon04 },
                // { time: 108, texture: Salon01 },
                { time: 116, texture: Salon05 },
                // { time: 125, texture: Salon01 },

                // 22:00
                // { time: 133, texture: Salon01 },
                // { time: 141, texture: Salon01 },
                // { time: 150, texture: Salon01 },
                { time: 158, texture: Salon06 },

                // 01:00
                // { time: 233, texture: Salon01 },
                { time: 241, texture: Salon02 },
                // { time: 250, texture: Salon01 },
                // { time: 258, texture: Salon01 },
            ]
        },
        {
            name: 'plantes',
            level: .8,

            animations: [
                // 18:00
                { time: 0, texture: Plante01 },

                // 01:00
                // { time: 233, texture: Plante01 },
                { time: 241, texture: Plante02 },
                // { time: 250, texture: Plante01 },
                // { time: 258, texture: Plante01 },
            ]
        },
        {
            name: 'objfenetre',
            level: .8,

            animations: [
                // 18:00
                { time: 0, texture: Object02 },
                { time: 8, texture: Object03 },
                // { time: 16, texture: Object01 },
                // { time: 25, texture: Object01 },

                // 19:00
                // { time: 33, texture: Object01 },
                // { time: 41, texture: Object01 },
                // { time: 50, texture: Object01 },
                // { time: 58, texture: Object01 },
            ]
        },
    ],
    [
        {
            name: 'cadre',
            animations: [
                // 18:00
                { time: 0, texture: Fenetre2VJ },

                // 20:00
                // { time: 66, texture:  },
                { time: 75, texture: Fenetre1VJ },
                
                // 00:00
                { time: 225, texture: Fenetre2VN },
            ]
        }
    ]
];