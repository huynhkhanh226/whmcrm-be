module.exports = {


  friendlyName: 'Get coupons',


  description: '',


  inputs: {

  },


  fn: async function (inputs) {

    return await Coupons.find();

  }


};

