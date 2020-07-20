module.exports = {

  friendlyName: '',
  description: '',

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
    // All done.
    const res = await sails.helpers.whm.register.with(inputs);
    if (res.status == 200) {
      return {
        code: 200,
        data: {
          ...inputs,
          ...res.data.data,
        }
      }
    } else {
      return {
        code: 1000,
        message: res.statusText
      }
    }
  }


};
