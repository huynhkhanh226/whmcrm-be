const axios = require('axios');
const Utils = require('../../utils');

module.exports = {
  friendlyName: 'Auth',
  description: 'Auth whm.',

  fn: async function () {
    // TODO
    // /json-api/createacct?api.version=1&username=raymond&domain=vndevops.com
    const body = { 
      username: "raymond" ,
      domain: "vndevops.com"
    };
    const url = Utils.getUrl("/json-api/createacct", body);
    
    const config = Utils.getHeader();
    return await axios.post(url, body, config);
  }
};

