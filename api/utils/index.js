/**
 * @copyright 2019 © DigiNet
 * @author rocachien
 * @create 2019/05/28 11:15
 * @update 2019/04/15 16:40
 */
'use strict';

const isEmail               = require('./isEmail');
const randString            = require('./randString');
const getSetting            = require('./getSetting');
const addZero               = require('./addZero');
const numb                  = require('./numb');
const encryption            = require('./encryption');
const auth                  = require('./auth');
const specialCharacter      = require('./specialCharacter');
const url              = require('./url');

const Utils = {
    auth                    :     auth,
    randString              :     randString,
    getSetting              :     getSetting,
    addZero                 :     addZero,
    isEmail                 :     isEmail,
    isInt                   :     numb.isInt,
    intLimit                :     numb.intLimit,
    isPositiveNumber        :     numb.isPositiveNumber,
    decrypt                 :     encryption.decrypt,
    encrypt                 :     encryption.encrypt,
    createJWT               :     encryption.createJWT,
    verifyJWT               :     encryption.verifyJWT,
    specialCharacter        :     specialCharacter,
    getUrl                  :     url.getUrl,
    getHeader               :     url.getHeader,
    params                  :     url.params
};

module.exports = Utils;
