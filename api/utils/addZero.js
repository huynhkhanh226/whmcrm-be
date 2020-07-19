/**
 * @copyright 2019 © DigiNet
 * @author rocachien
 * @create 2019/04/24 17:24
 * @update 2019/04/24 17:24
 */
'use strict';

let addZero = (i) => {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
};

module.exports = addZero;
