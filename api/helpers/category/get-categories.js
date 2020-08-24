module.exports = {


  friendlyName: 'Get categories',


  description: '',


  inputs: {

  },


  fn: async function (inputs) {

 

    // Send back the result through the success exit.
    return await Cateogories.find();

  }


};

