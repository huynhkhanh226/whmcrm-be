
'use strict';

const getUrl = (path, obj) => {
    return sails.config.whm.base + path + sails.config.whm.version + (obj && "&" + params(obj));
};

const getHeader = () => {
    return  {
        headers: {
          "Authorization": `whm ${sails.config.whm.acc}:${sails.config.whm.token}`
        }
      };
};

const params = (obj) => {
    return Object.keys(obj).map(function(key) {
        return key + '=' + encodeURI(obj[key]);
      }).join('&');
}


module.exports = {
    getUrl:              getUrl,
    getHeader:           getHeader,
    params: params,
};

