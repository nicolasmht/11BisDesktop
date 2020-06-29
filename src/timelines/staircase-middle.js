import StaircaseOn from '../textures/staircase/light-on.png';
import StaircaseOff from '../textures/staircase/light-off.png';


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
            name: 'staircaseOff',
            level: 0,

            animations: [
                // 18:00
                { time: 0, texture: StaircaseOff },

                // 20:00
                // { time: 66, texture: Cuisine01 },
                // { time: 75, texture: Cuisine01 },
                // { time: 83, texture: Cuisine01 },
                // { time: 91, texture: Cuisine02 },

                // 23:00
                // { time: 166, texture: Cuisine03 },
                // { time: 175, texture: Cuisine03 },
                // { time: 183, texture: Cuisine04 },
                // { time: 191, texture: Cuisine01 },
            ]
        },
    ], 
    [
        {
            name: 'cadre',
            animations: [
                // 18:00
                { time: 0, texture: Fenetre6VR },

                // // 20:00
                // // { time: 66, texture:  },
                // { time: 75, texture: Fenetre6VR },
                
                // // 00:00
                // { time: 225, texture: Fenetre6VR },
            ]
        }
    ]
];