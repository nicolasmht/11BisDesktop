import Autocollant01 from '../textures/apartment-right-top/000/Autocollant-1.png';

import Cuisine01 from '../textures/apartment-right-top/000/Cuisine-1.png';
import Cuisine02 from '../textures/apartment-right-top/000/Cuisine-2.png';
import Cuisine03 from '../textures/apartment-right-top/000/Cuisine-3.png';
import Cuisine04 from '../textures/apartment-right-top/000/Cuisine-4.png';

import Parquet01 from '../textures/apartment-right-top/000/Parquet-1.png';
import Parquet02 from '../textures/apartment-right-top/000/Parquet-2.png';
import Parquet03 from '../textures/apartment-right-top/000/Parquet-3.png';
import Parquet04 from '../textures/apartment-right-top/000/Parquet-4.png';
import Parquet05 from '../textures/apartment-right-top/000/Parquet-5.png';
import Parquet06 from '../textures/apartment-right-top/000/Parquet-6.png';
import Parquet07 from '../textures/apartment-right-top/000/Parquet-7.png';

import Portechambre01 from '../textures/apartment-right-top/000/Portechambre-1.png';
import Portechambre02 from '../textures/apartment-right-top/000/Portechambre-2.png';

import Salon01 from '../textures/apartment-right-top/000/Salon-1.png';
import Salon02 from '../textures/apartment-right-top/000/Salon-2.png';
import Salon03 from '../textures/apartment-right-top/000/Salon-3.png';
import Salon04 from '../textures/apartment-right-top/000/Salon-4.png';

import Table01 from '../textures/apartment-right-top/000/Table-1.png';
import Table02 from '../textures/apartment-right-top/000/Table-2.png';
import Table03 from '../textures/apartment-right-top/000/Table-3.png';
import Table04 from '../textures/apartment-right-top/000/Table-4.png';
import Table05 from '../textures/apartment-right-top/000/Table-5.png';
import Table06 from '../textures/apartment-right-top/000/Table-6.png';
import Table07 from '../textures/apartment-right-top/000/Table-7.png';

import Tablebasse01 from '../textures/apartment-right-top/000/Tablebasse-1.png';
import Tablebasse02 from '../textures/apartment-right-top/000/Tablebasse-2.png';
import Tablebasse03 from '../textures/apartment-right-top/000/Tablebasse-3.png';
import Tablebasse04 from '../textures/apartment-right-top/000/Tablebasse-4.png';
import Tablebasse05 from '../textures/apartment-right-top/000/Tablebasse-5.png';

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
import Porte from '../audios/003/OUVERTURE_PORTE_APPT_SERRURE_01.mp3';
import Clef from '../audios/003/JET_DE_CLEFS_TABLE_V1_01.mp3';
import Tv from '../audios/003/MENU_TV_01.mp3';
import Pipi from '../audios/003/PIPI_V1_01.mp3';
import Frigo from '../audios/003/FRIGO_INTERIEUR_01.mp3';
import Microonde from '../audios/003/MICROONDE_BIP_01.mp3';
import Verre from '../audios/003/VERRE_REMPLISSEMENT_BOUTEILLE_01.mp3';

export default [
    [
        {
            name: 'cuisine',
            level: 0,

            animations: [
                // 18:00
                { time: 0, texture: Cuisine01 },

                // 20:00
                // { time: 66, texture: Cuisine01 },
                // { time: 75, texture: Cuisine01 },
                // { time: 83, texture: Cuisine01 },
                { time: 91, texture: Cuisine02 },

                // 23:00
                // { time: 166, texture: Cuisine03 },
                { time: 175, texture: Cuisine03 },
                { time: 183, texture: Cuisine04 },
                { time: 191, texture: Cuisine01 },
            ]
        },
        {
            name: 'parquet',
            level: 0,

            animations: [
                // 18:00
                { time: 0, texture: Parquet01 },

                // 20:00
                // { time: 66, texture: Parquet01 },
                // { time: 75, texture: Parquet01 },
                { time: 83, texture: Parquet02 },
                { time: 91, texture: Parquet03 },

                // 21:00
                // { time: 100, texture: Parquet01 },
                // { time: 108, texture: Parquet01 },
                { time: 116, texture: Parquet04 },
                // { time: 125, texture: Parquet01 },

                // 22:00
                { time: 133, texture: Parquet05 },
                // { time: 141, texture: Parquet01 },
                { time: 150, texture: Parquet06 },
                { time: 158, texture: Parquet05 },

                // 23:00
                // { time: 166, texture: Parquet01 },
                { time: 175, texture: Parquet07 },
                // { time: 183, texture: Parquet01 },
                // { time: 191, texture: Parquet01 },
            ]
        },
        {
            name: 'porte',
            level: 0,

            animations: [
                // 18:00
                { time: 0, texture: Portechambre01 },

                // 20:00
                // { time: 66, texture: Portechambre01 },
                // { time: 75, texture: Portechambre01 },
                { time: 83, texture: Portechambre02 },
                // { time: 91, texture: Portechambre01 },

                // 21:00
                // { time: 100, texture: Portechambre01 },
                // { time: 108, texture: Portechambre01 },
                { time: 116, texture: Portechambre01 },
                // { time: 125, texture: Portechambre01 },

                // 22:00
                // { time: 133, texture: Portechambre01 },
                // { time: 141, texture: Portechambre01 },
                { time: 150, texture: Portechambre02 },
                { time: 158, texture: Portechambre01 },
            ]
        },
        {
            name: 'salon',
            level: .5,

            animations: [
                // 18:00
                { time: 0, texture: Salon01 },

                // 21:00
                { time: 100, texture: Salon02 },
                // { time: 108, texture: Salon01 },
                { time: 116, texture: Salon03 },
                // { time: 125, texture: Salon01 },

                // 22:00
                { time: 133, texture: Salon04 },
                // { time: 141, texture: Salon01 },
                // { time: 150, texture: Salon01 },
                // { time: 158, texture: Salon01 },

                // 01:00
                // { time: 233, texture: Salon01 },
                // { time: 241, texture: Salon01 },
                { time: 250, texture: Salon03 },
                // { time: 258, texture: Salon01 },
            ]
        },
        {
            name: 'table',
            level: .6,

            animations: [
                // 18:00
                { time: 0, texture: Table01 },
                // { time: 8, texture: Table01 },
                // { time: 16, texture: Table01 },
                // { time: 25, texture: Table01 },

                // 20:00
                // { time: 66, texture: Table01 },
                // { time: 75, texture: Table01 },
                // { time: 83, texture: Table02 },
                { time: 91, texture: Table02 },

                // 21:00
                { time: 100, texture: Table04 },
                // { time: 108, texture: Table01 },
                // { time: 116, texture: Table01 },
                { time: 125, texture: Table05 },

                // 01:00
                // { time: 233, texture: Table01 },
                // { time: 241, texture: Table01 },
                { time: 250, texture: Table07 },
                // { time: 258, texture: Table01 },
            ]
        },
        {
            name: 'tablebasse',
            level: .7,

            animations: [
                // 18:00
                { time: 0, texture: Tablebasse01 },

                // 21:00
                { time: 100, texture: Tablebasse02 },
                // { time: 108, texture: Tablebasse01 },
                // { time: 116, texture: Tablebasse01 },
                // { time: 125, texture: Tablebasse01 },

                // 22:00
                { time: 133, texture: Tablebasse03 },
                // { time: 141, texture: Tablebasse01 },
                // { time: 150, texture: Tablebasse01 },
                // { time: 158, texture: Tablebasse01 },

                // 23:00
                // { time: 166, texture: Tablebasse01 },
                // { time: 175, texture: Tablebasse01 },
                // { time: 183, texture: Tablebasse01 },
                { time: 191, texture: Tablebasse04 },

                // 00:00
                // { time: 200, texture: Tablebasse01 },
                { time: 208, texture: Tablebasse05 },
                // { time: 216, texture: Tablebasse01 },
                // { time: 225, texture: Tablebasse01 },

                // 01:00
                // { time: 233, texture: Tablebasse01 },
                // { time: 241, texture: Tablebasse01 },
                { time: 250, texture: Tablebasse02 },
                // { time: 258, texture: Tablebasse01 },
            ]
        },
        {
            name: 'autocollant',
            level: .4,

            animations: [
                // 18:00
                { time: 0, texture: Autocollant01 },
            ]
        }
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
                // 20:00
                { time: 15, src: Porte },
                { time: 91, src: Clef },

                // 22:00
                { time: 133, src: Tv },
                { time: 150, src: Pipi },

                // 23:00
                { time: 166, src: Frigo },
                { time: 183, src: Microonde },

                // 00:00
                { time: 208, src: Verre },
            ]
        }
    ]
];