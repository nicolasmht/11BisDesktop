import Bar01 from '../textures/apartment-right-bottom/000/Bar-1.png';
import Bar02 from '../textures/apartment-right-bottom/000/Bar-2.png';
import Bar03 from '../textures/apartment-right-bottom/000/Bar-3.png';
import Bar04 from '../textures/apartment-right-bottom/000/Bar-4.png';
import Bar07 from '../textures/apartment-right-bottom/000/Bar-7.png';
import Bar08 from '../textures/apartment-right-bottom/000/Bar-8.png';
import Bar09 from '../textures/apartment-right-bottom/000/Bar-9.png';

import Cuisine01 from '../textures/apartment-right-bottom/000/Cuisine-1.png';

import Obj01 from '../textures/apartment-right-bottom/000/Obj-1.png';
import Obj02 from '../textures/apartment-right-bottom/000/Obj-2.png';
import Obj03 from '../textures/apartment-right-bottom/000/Obj-3.png';
import Obj04 from '../textures/apartment-right-bottom/000/Obj-4.png';
import Obj05 from '../textures/apartment-right-bottom/000/Obj-5.png';
import Obj06 from '../textures/apartment-right-bottom/000/Obj-6.png';
import Obj07 from '../textures/apartment-right-bottom/000/Obj-7.png';
import Obj08 from '../textures/apartment-right-bottom/000/Obj-8.png';
import Obj09 from '../textures/apartment-right-bottom/000/Obj-9.png';
import Obj10 from '../textures/apartment-right-bottom/000/Obj-10.png';
import Obj11 from '../textures/apartment-right-bottom/000/Obj-11.png';
import Obj12 from '../textures/apartment-right-bottom/000/Obj-12.png';
import Obj13 from '../textures/apartment-right-bottom/000/Obj-13.png';

import Parquet01 from '../textures/apartment-right-bottom/000/Parquet-1.png';
import Parquet02 from '../textures/apartment-right-bottom/000/Parquet-2.png';
import Parquet03 from '../textures/apartment-right-bottom/000/Parquet-3.png';
import Parquet04 from '../textures/apartment-right-bottom/000/Parquet-4.png';
import Parquet05 from '../textures/apartment-right-bottom/000/Parquet-5.png';

import Porte01 from '../textures/apartment-right-bottom/000/Porte-1.png';
import Porte02 from '../textures/apartment-right-bottom/000/Porte-2.png';
import Porte03 from '../textures/apartment-right-bottom/000/Porte-3.png';
import Porte04 from '../textures/apartment-right-bottom/000/Porte-4.png';

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
                { time: 0, texture: Parquet02 },
                { time: 25, texture: Parquet01 },

                // 22:00
                { time: 133, texture: Parquet05 },

                // 23:00
                { time: 175, texture: Parquet04 },

                // 00:00
                { time: 216, texture: Parquet03 },
            ]
        },
        {
            name: 'porte',
            level: 0,

            animations: [
                // 18:00
                { time: 0, texture: Porte04 },
                { time: 150, texture: Porte03 },
                { time: 158, texture: Porte01 },

                // 23:00
                { time: 175, texture: Porte02 },
            ]
        },
        {
            name: 'bar',
            level: .15,

            animations: [
                // 18:00
                { time: 0, texture: Bar01 },
                { time: 8, texture: Bar07 },
                { time: 16, texture: Bar02 },
                { time: 25, texture: Bar01 },

                // 22:00
                { time: 133, texture: Bar04 },

                // 23:00
                { time: 175, texture: Bar08 },
                { time: 191, texture: Bar09 },

                // 00:00
                { time: 216, texture: Bar03 },
            ]
        },
        {
            name: 'cuisine',
            level: 0,

            animations: [
                // 18:00
                { time: 0, texture: Cuisine01 },
            ]
        },
        {
            name: 'object',
            level: 0.25,

            animations: [
                // 18:00
                { time: 25, texture: Obj12 },

                // 19:00
                { time: 33, texture: Obj11 },
                { time: 41, texture: Obj10 },
                { time: 50, texture: Obj09 },
                { time: 58, texture: Obj08 },

                // 20:00
                { time: 66, texture: Obj07 },
                { time: 75, texture: Obj06 },
                { time: 83, texture: Obj05 },
                { time: 91, texture: Obj04 },

                // 21:00
                { time: 100, texture: Obj03 },
                { time: 108, texture: Obj02 },
                { time: 116, texture: Obj01 },

                // 00:00
                { time: 216, texture: Obj13 },
            ]
        },
    ],
    [
        {
            name: 'cadre',
            animations: [
                // 18:00
                { time: 0, texture: Fenetre4VJ },
                // 00:00
                { time: 216, texture: Fenetre4VN },
            ]
        }
    ]
];