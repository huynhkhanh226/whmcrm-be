var jwt = require('jsonwebtoken')

module.exports = {

  friendlyName: 'create',
  description: 'Send an email using a template.',
  extendedDescription: '',

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
    expiresIn: {
      description: '',
      type: 'string',
      required: true
    },
  },

  fn: async function (inputs) {
    const user = await sails.helpers.users.find.with({username: inputs.username});
    return new Promise(async (resolve, reject) => {
      if (user && user.password === inputs.password) {
        jwt.sign(
          {
            data: user
          },
          sails.config.session.secret,
          {
            algorithm: "HS256",
            expiresIn: inputs.expiresIn,
          },
          (error, token) => {
            if (error) {
              return reject(error);
            }
            resolve(token);
          });
      } else {
        resolve({
          code: 401,
          message: 'Unauthencation'
        });
      }

    });
  }
};
