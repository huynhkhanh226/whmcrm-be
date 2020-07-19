
module.exports = {

  friendlyName: 'Token',

  description: 'Token something.',

  inputs: {
    username: {
      type: "string",
    },
    email: {
      type: "string",
    }
  },


  fn: async function (inputs) {
    if (inputs.username)
      return await Users.findOne({ username: inputs.username });
    if (inputs.email)
      return await Users.findOne({ email: inputs.email });
  }


};

