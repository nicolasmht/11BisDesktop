import Cadre01 from '../textures/apartment-left-top/000/Cadre-1.png';
import Cadre02 from '../textures/apartment-left-top/000/Cadre-2.png';
import Cadre03 from '../textures/apartment-left-top/000/Cadre-3.png';
import Cadre04 from '../textures/apartment-left-top/000/Cadre-4.png';

import Canape01 from '../textures/apartment-left-top/000/Canape-1.png';
import Canape02 from '../textures/apartment-left-top/000/Canape-2.png';
import Canape03 from '../textures/apartment-left-top/000/Canape-3.png';
import Canape04 from '../textures/apartment-left-top/000/Canape-4.png';

import Cuisine01 from '../textures/apartment-left-top/000/Cuisine-1.png';
import Cuisine02 from '../textures/apartment-left-top/000/Cuisine-2.png';

import Detecteurdefumee01 from '../textures/apartment-left-top/000/Detecteurdefumee-1.png';

import Fumee01 from '../textures/apartment-left-top/000/Fumee-1.png';

import Parquet01 from '../textures/apartment-left-top/000/Parquet-1.png';
import Parquet02 from '../textures/apartment-left-top/000/Parquet-2.png';
import Parquet03 from '../textures/apartment-left-top/000/Parquet-3.png';

import Table01 from '../textures/apartment-left-top/000/Table-1.png';
import Table02 from '../textures/apartment-left-top/000/Table-2.png';
import Table03 from '../textures/apartment-left-top/000/Table-3.png';
import Table04 from '../textures/apartment-left-top/000/Table-4.png';
import Table05 from '../textures/apartment-left-top/000/Table-5.png';

import Tablebasse01 from '../textures/apartment-left-top/000/Tablebasse-1.png';
import Tablebasse02 from '../textures/apartment-left-top/000/Tablebasse-2.png';
import Tablebasse03 from '../textures/apartment-left-top/000/Tablebasse-3.png';
import Tablebasse04 from '../textures/apartment-left-top/000/Tablebasse-4.png';
import Tablebasse05 from '../textures/apartment-left-top/000/Tablebasse-5.png';
import Tablebasse06 from '../textures/apartment-left-top/000/Tablebasse-6.png';
import Tablebasse07 from '../textures/apartment-left-top/000/Tablebasse-7.png';
import Tablebasse08 from '../textures/apartment-left-top/000/Tablebasse-8.png';

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

// Audios
import Keyboard from '../audios/003/CLAVIER_ORDI_01.mp3';
import Porte from '../audios/003/PORTE_GRINCEMENT_01.mp3';
import Parquet from '../audios/003/PAS_SUR_PARQUET_BASKET_BOUCLE.mp3';
import Netflix from '../audios/003/NETFLIX_TOUDOUM_01.mp3';
import Vaiselle from '../audios/003/EMPILEMENT_VAISELLE_01.mp3';

export default [
    [
        {
            name: 'parquet',
            level: 0,

            animations: [
                // 18:00
                { time: 0, texture: Parquet01 },

                // 19:00
                // { time: 33, texture: Parquet01 },
                // { time: 41, texture: Parquet01 },
                // { time: 50, texture: Parquet01 },
                { time: 58, texture: Parquet02 },

                // 22:00
                // { time: 133, texture: Parquet01 },
                { time: 141, texture: Parquet01 },
                { time: 150, texture: Parquet02 },
                // { time: 158, texture: Parquet01 },

                // 00:00
                // { time: 200, texture: Parquet01 },
                // { time: 208, texture: Parquet01 },
                { time: 216, texture: Parquet03 },
                // { time: 225, texture: Parquet01 },
            ]
        },
        {
            name: 'cuisine',
            level: 0,

            animations: [
                // 18:00
                { time: 0, texture: Cuisine01 },
                // { time: 8, texture: Cuisine01 },
                // { time: 16, texture: Cuisine01 },
                { time: 25, texture: Cuisine02 },

                // 19:00
                { time: 33, texture: Cuisine01 },
                // { time: 41, texture: Cuisine01 },
                // { time: 50, texture: Cuisine01 },
                { time: 58, texture: Cuisine02 },

                // 20:00
                // { time: 66, texture: Cuisine01 },
                // { time: 75, texture: Cuisine01 },
                { time: 83, texture: Cuisine01 },
                // { time: 91, texture: Cuisine01 },

                // 22:00
                { time: 133, texture: Cuisine02 },
                // { time: 141, texture: Cuisine01 },
                { time: 150, texture: Cuisine01 },
                // { time: 158, texture: Cuisine01 },
            ]
        },
        {
            name: 'mur',
            level: .15,

            animations: [
                // 18:00
                { time: 0, texture: Cadre01 },
                // { time: 8, texture: Cadre01 },
                // { time: 16, texture: Cadre01 },
                { time: 25, texture: Cadre04 },

                // 19:00
                { time: 33, texture: Cadre01 },
                // { time: 41, texture: Cadre01 },
                // { time: 50, texture: Cadre01 },
                { time: 58, texture: Cadre02 },

                // 22:00
                { time: 133, texture: Cadre03 },
                { time: 141, texture: Cadre04 },
                { time: 150, texture: Cadre02 },
                // { time: 158, texture: Cadre01 },
            ]
        },
        {
            name: 'canape',
            level: 0.25,

            animations: [
            // 18:00
                { time: 0, texture: Canape01 },
                // { time: 8, texture: Canape01 },
                // { time: 16, texture: Canape01 },
                // { time: 25, texture: Canape01 },

                // 19:00
                // { time: 33, texture: Canape01 },
                { time: 41, texture: Canape03 },
                { time: 50, texture: Canape02 },
                // { time: 58, texture: Canape01 },

                // 00:00
                // { time: 200, texture: Canape01 },
                // { time: 208, texture: Canape01 },
                // { time: 216, texture: Canape01 },
                { time: 225, texture: Canape04 },
            ]
        },
        {
            name: 'table',
            level: 1,

            animations: [
                // 18:00
                { time: 0, texture: Table01 },
                // { time: 8, texture: Table01 },
                { time: 16, texture: Table02 },
                { time: 25, texture: Table01 },

                // 19:00
                // { time: 33, texture: Table02 },
                // { time: 41, texture: Table02 },
                { time: 50, texture: Table03 },
                { time: 58, texture: Table04 },

                // 22:00
                // { time: 133, texture: Table03 },
                { time: 141, texture: Table03 },
                { time: 150, texture: Table04 },
                // { time: 158, texture: Table03 },
            ]
        },
        {
            name: 'tablebasse',
            level: .7,

            animations: [
                // 18:00
                { time: 0, texture: Tablebasse01 },

                // 19:00
                { time: 33, texture: Tablebasse02 },
                // { time: 41, texture: Tablebasse01 },
                // { time: 50, texture: Tablebasse01 },
                { time: 58, texture: Tablebasse03 },

                // 20:00
                // { time: 66, texture: Tablebasse03 },
                // { time: 75, texture: Tablebasse03 },
                { time: 83, texture: Tablebasse04 },
                // { time: 91, texture: Tablebasse03 },

                // 21:00
                { time: 100, texture: Tablebasse05 },
                // { time: 108, texture: Tablebasse01 },
                // { time: 116, texture: Tablebasse01 },
                { time: 125, texture: Tablebasse06 },

                // 22:00
                { time: 133, texture: Tablebasse07 },
                // { time: 141, texture: Tablebasse06 },
                // { time: 150, texture: Tablebasse06 },
                // { time: 158, texture: Tablebasse06 },

                // 00:00
                // { time: 200, texture: Tablebasse08 },
                // { time: 208, texture: Tablebasse08 },
                { time: 216, texture: Tablebasse08 },
                // { time: 225, texture: Tablebasse08 },
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
    ],
    [
        {
            name: 'audio',

            audios: [
                { time: 83, src: Keyboard },
                // 18:30
                { time: 16, src: Porte },
                // 19:00
                { time: 33, src: Parquet },
                // 20:30
                { time: 83, src: Netflix },
                // 22:15
                { time: 133, src: Vaiselle },
            ]
        }
    ]
];
/*
// 18:00
{ time: 0, texture:  },
{ time: 8, texture:  },
{ time: 16, texture:  },
{ time: 25, texture:  },

// 19:00
{ time: 33, texture:  },
{ time: 41, texture:  },
{ time: 50, texture:  },
{ time: 58, texture:  },

// 20:00
{ time: 66, texture:  },
{ time: 75, texture:  },
{ time: 83, texture:  },
{ time: 91, texture:  },

// 21:00
{ time: 100, texture:  },
{ time: 108, texture:  },
{ time: 116, texture:  },
{ time: 125, texture:  },

// 22:00
{ time: 133, texture:  },
{ time: 141, texture:  },
{ time: 150, texture:  },
{ time: 158, texture:  },

// 23:00
{ time: 166, texture:  },
{ time: 175, texture:  },
{ time: 183, texture:  },
{ time: 191, texture:  },

// 00:00
{ time: 200, texture:  },
{ time: 208, texture:  },
{ time: 216, texture:  },
{ time: 225, texture:  },

// 01:00
{ time: 233, texture:  },
{ time: 241, texture:  },
{ time: 250, texture:  },
{ time: 258, texture:  },

// 02:00
{ time: 266, texture:  },
{ time: 275, texture:  },
{ time: 283, texture:  },
{ time: 291, texture:  },

// 03:00
{ time: 300, texture:  },
*/