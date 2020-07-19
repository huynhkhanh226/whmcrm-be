/**
 * @copyright 2019 © DigiNet
 * @author hoangtuan
 * @create 2019/09/11 10:12
 * @update 2019/09/11 10:12
 */
'use strict';
const  regex = /[^\w\s]/gi;
const specialCharacter = {
    check: (value) => {
        return regex.test(value);
    },
    remove: (value) => {
        if( value ){
            return value.replace( regex , '');
        }
    }
};
module.exports = specialCharacter;
