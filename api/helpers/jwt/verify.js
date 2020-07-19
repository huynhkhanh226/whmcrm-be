var jwt = require('jsonwebtoken')

module.exports = {

  friendlyName: 'create',
  description: 'Send an email using a template.',
  extendedDescription: '',

  inputs: {
    token: {
      description: '',
      type: 'string',
      required: true
    }
  },

  fn: async function ({token}) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, sails.config.session.secret, { algorithm: "HS256" }, (error, decoded) => {
        if (error) {
          return reject(error);
        }
        resolve(decoded);
      });
    })
  }
}


