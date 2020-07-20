const axios = require('axios');
const Utils = require('../../utils');

module.exports = {
  friendlyName: 'Auth',
  description: 'Auth whm.',


  inputs: {
    username: {
      description: '',
      type: 'string',
      required: true
    },
    password: {
      description: '',
      type: 'string',
      required: true
    },
    domain: {
      description: '',
      type: 'string',
      required: true
    },
    contactemail: {
      description: '',
      type: 'string',
      required: true
    },
    pkgname: {
      description: '',
      type: 'string',
      required: true
    },
    
  },

  fn: async function (inputs) {
    // TODO
    // /json-api/createacct?api.version=1&username=raymond&domain=vndevops.com
    const body = { ...inputs };
    const url = Utils.getUrl("/json-api/createacct", body);

    const config = Utils.getHeader();
    return await axios.post(url, body, config);
  }
};

