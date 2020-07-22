module.exports = {

  friendlyName: 'Sendmail',
  description: 'Sendmail system.',

  inputs: {
    to: {
      type: "string",
      required: true
    },
    subject:{
      type: "string",
      required: true
    },
    content: {
      type: "string",
    },
  },

  fn: async function (inputs) {

    // All done.
    return await sails.helpers.system.sendmail.with(inputs);

  }


};
