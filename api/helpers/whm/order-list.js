

module.exports = {


  friendlyName: 'Order list',


  description: '',


  inputs: {
    username: {
      description: '',
      type: 'string',
      required: true
    },
  },


  fn: async function (inputs) {
    // TODO
    const user = await Users.findOne({ username: inputs.username }).populate("orders");
    const ids = user.orders.map((order) => order.id);
    user.orders = await Orders
      .find({ id: ids})
      .populate('details');

    return {
      code: 200,
      data: user
    }
  }



};

