
module.exports = {


  friendlyName: 'Delete category',


  description: '',


  inputs: {
    id: {
      type: "string",
      required: true
    },
  },


  fn: async function (inputs) {
    // TODO
    console.log(inputs);
    return await Categories.destroyOne({id: Number(inputs.id)});
  }


};

