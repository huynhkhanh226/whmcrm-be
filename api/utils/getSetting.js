/**
 * @copyright 2019 © DigiNet
 * @author rocachien
 * @create 2019/04/24 17:24
 * @update 2019/04/24 17:24
 */
'use strict';

const getSetting = (name) => {
    const settings = sails.settings || [];

    for (let i = 0; i < settings.length; i++) {
        let set = settings[i];

        if(set.name === name) {
            return set.value;
        }
    }

    return null;
};

module.exports = getSetting;
