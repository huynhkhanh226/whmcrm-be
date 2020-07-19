const axios = require('axios');
const Utils = require('../../utils');

module.exports = {
  friendlyName: 'Auth',
  description: 'Auth whm.',

  fn: async function () {
    // TODO
    const config = Utils.getHeader();
    const body = { "want": "all" };
    const url = Utils.getUrl("/json-api/listpkgs");
    return await axios.post(url, body, config);
  }
};

