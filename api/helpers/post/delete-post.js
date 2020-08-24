module.exports = {


  friendlyName: 'Delete post',


  description: '',


  inputs: {
    id: {
      type: "string",
      required: true
    },
  },



  fn: async function (inputs) {
    // TODO
    return await Posts.destroyOne({id: Number(inputs.id)});
  }


};

