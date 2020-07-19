/**
 * @copyright 2019 © DigiNet
 * @author rocachien
 * @create 2019/04/24 17:24
 * @update 2019/04/24 17:24
 */
'use strict';

const isInt = (val) => {
    if(val.length === 0) {
        return false;
    }

    let regex = /^[1-9]\d*$/g;

    return regex.test(val);
};

const intLimit = (val, min, max) => {
    if( !isInt(val) ) {
        return false;
    }

    min = min ? min : Number.MIN_VALUE;
    max = max ? max : Number.MAX_VALUE;

    if(parseInt(val) > max) {
        return false;
    }

    if(parseInt(val) < min) {
        return false;
    }

    return true;
};

const isPositiveNumber = (val) =>{
    let regex = /^[0-9]\d*$/g;
    if( regex.test(val) && parseInt(val) > 0 ){
        return true;
    }
    return false;
};


module.exports = {
    isInt:              isInt,
    intLimit:           intLimit,
    isPositiveNumber:   isPositiveNumber,
};
