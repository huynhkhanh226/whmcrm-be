module.exports = {


  friendlyName: 'Update category',


  description: '',


  inputs: {
    id: {
      type: "string",
      required: true
    },
    categoryName: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
    }
  },

  fn: async function (inputs) {
    return await  Categories.updateOne({ id: inputs.id}).set({ 
      categoryName: inputs.categoryName,
      description: inputs.description
    });
  }


};

