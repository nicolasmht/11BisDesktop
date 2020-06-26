import Bureau01 from '../textures/apartment-right-middle/000/Bureau-1.png';
import Bureau02 from '../textures/apartment-right-middle/000/Bureau-2.png';
import Bureau03 from '../textures/apartment-right-middle/000/Bureau-3.png';
import Bureau04 from '../textures/apartment-right-middle/000/Bureau-4.png';

import Chaise01 from '../textures/apartment-right-middle/000/Chaise-1.png';
import Chaise02 from '../textures/apartment-right-middle/000/Chaise-2.png';
import Chaise03 from '../textures/apartment-right-middle/000/Chaise-3.png';

import Cuisine01 from '../textures/apartment-right-middle/000/Cuisine-1.png';
import Cuisine02 from '../textures/apartment-right-middle/000/Cuisine-2.png';
import Cuisine03 from '../textures/apartment-right-middle/000/Cuisine-3.png';
import Cuisine04 from '../textures/apartment-right-middle/000/Cuisine-4.png';
import Cuisine05 from '../textures/apartment-right-middle/000/Cuisine-5.png';

import Entree01 from '../textures/apartment-right-middle/000/Entree-1.png';
import Entree02 from '../textures/apartment-right-middle/000/Entree-2.png';
import Entree03 from '../textures/apartment-right-middle/000/Entree-3.png';
import Entree04 from '../textures/apartment-right-middle/000/Entree-4.png';

import Mur01 from '../textures/apartment-right-middle/000/Mur-1.png';

import Obj01 from '../textures/apartment-right-middle/000/OBJ-1.png';
import Obj02 from '../textures/apartment-right-middle/000/OBJ-2.png';
import Obj03 from '../textures/apartment-right-middle/000/OBJ-3.png';
import Obj04 from '../textures/apartment-right-middle/000/OBJ-4.png';
import Obj05 from '../textures/apartment-right-middle/000/OBJ-5.png';
import Obj06 from '../textures/apartment-right-middle/000/OBJ-6.png';

import Parquet01 from '../textures/apartment-right-middle/000/Parquet-1.png';
import Parquet02 from '../textures/apartment-right-middle/000/Parquet-2.png';
import Parquet03 from '../textures/apartment-right-middle/000/Parquet-3.png';

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
                { time: 16, texture: Parquet02 },

                // 20:00
                { time: 66, texture: Parquet01 },

                // 23:00
                { time: 166, texture: Parquet02 },

                // 00:00
                { time: 200, texture: Parquet03 },

                // 01:00
                { time: 233, texture: Parquet02 },
            ]
        },
        {
            name: 'cuisine',
            level: 0,

            animations: [
                // 18:00
                { time: 0, texture: Cuisine01 },
                { time: 16, texture: Cuisine02 },

                // 21:00
                { time: 100, texture: Cuisine03 },
                { time: 108, texture: Cuisine05 },
                { time: 116, texture: Cuisine04 },

                // 23:00
                { time: 166, texture: Cuisine05 },
                
                // 02:00
                { time: 291, texture: Cuisine02 },
            ]
        },
        {
            name: 'bureau',
            level: 0,

            animations: [
                // 18:00
                { time: 0, texture: Bureau01 },
                // { time: 8, texture: Bureau01 },
                { time: 16, texture: Bureau02 },
                // { time: 25, texture: Bureau01 },

                // 20:00
                { time: 66, texture: Bureau01 },
                // { time: 75, texture: Bureau01 },
                { time: 83, texture: Bureau04 },
                // { time: 91, texture: Bureau01 },

                // 23:00
                { time: 166, texture: Bureau02 },
                // { time: 175, texture: Bureau01 },
                // { time: 183, texture: Bureau01 },
                // { time: 191, texture: Bureau01 },

                // 00:00
                { time: 200, texture: Bureau03 },
                // { time: 208, texture: Bureau01 },
                // { time: 216, texture: Bureau01 },
                // { time: 225, texture: Bureau01 },

                // 01:00
                { time: 233, texture: Bureau02 },
                // { time: 241, texture: Bureau01 },
                // { time: 250, texture: Bureau01 },
                // { time: 258, texture: Bureau01 },
            ]
        },
        {
            name: 'mur',
            level: 0,

            animations: [
                // 18:00
                { time: 0, texture: Mur01 },
            ]
        },
        {
            name: 'entree',
            level: .5,

            animations: [
                // 18:00
                { time: 0, texture: Entree01 },
                // { time: 8, texture: Entree01 },
                { time: 16, texture: Entree02 },
                // { time: 25, texture: Entree01 },

                // 20:00
                { time: 66, texture: Entree01 },
                { time: 75, texture: Entree03 },
                // { time: 83, texture: Entree01 },
                // { time: 91, texture: Entree01 },

                // 22:00
                // { time: 133, texture: Entree01 },
                // { time: 141, texture: Entree01 },
                { time: 150, texture: Entree04 },
                // { time: 158, texture: Entree01 },

                // 23:00
                { time: 166, texture: Entree02 },
                // { time: 175, texture: Entree01 },
                // { time: 183, texture: Entree01 },
                // { time: 191, texture: Entree01 },
            ]
        },
        {
            name: 'chaise',
            level: .5,

            animations: [
                // 18:00
                { time: 0, texture: Chaise01 },
                // { time: 8, texture:  },
                { time: 16, texture: Chaise02 },
                // { time: 25, texture:  },

                // 20:00
                { time: 66, texture: Chaise01 },

                // 23:00
                { time: 166, texture: Chaise02 },

                // 00:00
                { time: 200, texture: Chaise03 },

                // 01:00
                { time: 233, texture: Chaise02 },
                // { time: 241, texture:  },
                // { time: 250, texture:  },
                // { time: 258, texture:  },
            ]
        },
        {
            name: 'objects',
            level: .7,

            animations: [
                // 18:00
                { time: 0, texture: Obj01 },
                { time: 8, texture: Obj02 },

                // 20:00
                { time: 91, texture: Obj03 },

                // 22:00
                { time: 133, texture: Obj04 },

                // 00:00
                { time: 216, texture: Obj05 },

                // 01:00
                { time: 233, texture: Obj06 },
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