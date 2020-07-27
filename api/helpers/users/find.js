
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
      var user = await Users.findOne({ username: inputs.username }).populate('orders');
      user.orders = await Orders
      .find({ id: 1 })
      .populate('details');
    
     return user;
    if (inputs.email)
      return await Users.findOne({ email: inputs.email });
  }


};

