import Cuisine01 from '../textures/apartment-left-bottom/000/Cuisine-1.png';
import Cuisine02 from '../textures/apartment-left-bottom/000/Cuisine-2.png';

import Horloge01 from '../textures/apartment-left-bottom/000/Horloge-1.png';
import Horloge02 from '../textures/apartment-left-bottom/000/Horloge-2.png';
import Horloge03 from '../textures/apartment-left-bottom/000/Horloge-3.png';

import Parquet01 from '../textures/apartment-left-bottom/000/Parquet-1.png';
import Parquet02 from '../textures/apartment-left-bottom/000/Parquet-2.png';
import Parquet03 from '../textures/apartment-left-bottom/000/Parquet-3.png';
import Parquet04 from '../textures/apartment-left-bottom/000/Parquet-4.png';

import Salon01 from '../textures/apartment-left-bottom/000/Salon-1.png';
import Salon02 from '../textures/apartment-left-bottom/000/Salon-2.png';

import Tableamanger01 from '../textures/apartment-left-bottom/000/Tableamanger-1.png';
import Tableamanger02 from '../textures/apartment-left-bottom/000/Tableamanger-2.png';
import Tableamanger03 from '../textures/apartment-left-bottom/000/Tableamanger-3.png';

import Tablebasse01 from '../textures/apartment-left-bottom/000/Tablebasse-1.png';
import Tablebasse02 from '../textures/apartment-left-bottom/000/Tablebasse-2.png';
import Tablebasse03 from '../textures/apartment-left-bottom/000/Tablebasse-3.png';
import Tablebasse04 from '../textures/apartment-left-bottom/000/Tablebasse-4.png';
import Tablebasse05 from '../textures/apartment-left-bottom/000/Tablebasse-5.png';

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
                { time: 0, texture: Parquet04 },

                // 19:00
                { time: 33, texture: Parquet03 },

                // 21:00
                { time: 100, texture: Parquet01 },
            ]
        },
        {
            name: 'cuisine',
            level: 0,

            animations: [
                // 18:00
                { time: 0, texture: Cuisine02 },

                // 19:00
                { time: 41, texture: Cuisine01 },

                // 20:00
                { time: 66, texture: Cuisine02 },
                { time: 83, texture: Cuisine01 },
            ]
        },
        {
            name: 'salon',
            level: .15,

            animations: [
                // 18:00
                { time: 0, texture: Salon01 },

                // 19:00
                { time: 33, texture: Salon02 },

                // 20:00
                { time: 83, texture: Salon01 },

                // 21:00
                { time: 100, texture: Salon02 },
            ]
        },
        {
            name: 'horloge',
            level: 0,

            animations: [
                // 18:00
                { time: 0, texture: Horloge03 },

                // 19:00
                { time: 33, texture: Horloge01 },

                // 20:00
                { time: 83, texture: Horloge02 },
            ]
        },
        {
            name: 'table',
            level: .5,

            animations: [
                // 18:00
                { time: 0, texture: Tableamanger02 },

                // 19:00
                { time: 33, texture: Tableamanger01 },
                { time: 41, texture: Tableamanger03 },

                // 20:00
                { time: 83, texture: Tableamanger02 },
            ]
        },
        {
            name: 'tablebasse',
            level: .6,

            animations: [
                // 18:00
                { time: 0, texture: Tablebasse04  },

                // 19:00
                { time: 33, texture: Tablebasse03 },

                // 20:00
                { time: 83, texture: Tablebasse01 },
            ]
        },
    ],
    [
        {
            name: 'cadre',
            animations: [
                // 18:00
                { time: 0, texture: Fenetre4VR },
                // 21:00
                { time: 100, texture: Fenetre4VN },
            ]
        }
    ],
];