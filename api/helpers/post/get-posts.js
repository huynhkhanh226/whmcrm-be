module.exports = {


  friendlyName: 'Get posts',


  description: '',


  inputs: {

  },

  fn: async function (inputs) {

    return await Posts.find();

  }


};

