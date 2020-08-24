module.exports = {


  friendlyName: 'Save post',


  description: '',


  inputs: {
    subject: {
      type: 'string',
      required: true,
    },
    shortDescription: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    thumbnail: {
      type: 'string',
    },
    author: {
      type: 'string',
      required: true,
    },
    categoryId: {
      type: 'number',
      required: true,
    },
  },


  fn: async function (inputs) {
    return await  Posts.create(inputs);
  }


};

