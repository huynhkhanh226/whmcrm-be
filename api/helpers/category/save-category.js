module.exports = {


  friendlyName: 'Save category',


  description: '',

  inputs: {
    categoryName: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
    }
  },


  fn: async function (inputs) {
    return await  Categories.create(inputs);
  }


};

