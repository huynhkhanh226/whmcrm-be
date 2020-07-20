module.exports = {

  friendlyName: 'Sendmail',
  description: 'Sendmail system.',

  inputs: {

  },


  fn: async function (inputs) {

    // All done.
    const result = await sails.helpers.system.sendmail.with();
    return result;

  }


};
