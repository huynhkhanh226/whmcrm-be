/**
 * @copyright 2019 © DigiNet
 * @author rocachien
 * @create 2019/04/24 17:24
 * @update 2019/04/24 17:24
 */
'use strict';

const isJsonString = (str) => {
    try {
        if( JSON.parse(str)){
            return true;
        }
        return false;
    } catch (e) {
        sails.log.warn('== isJsonString error: ' + (e.name || e.message));
        return false;
    }
};

module.exports = isJsonString;
