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


  exits: {

  },


  fn: async function (inputs) {

    try {
      await sails.helpers.post.savePost.with({...inputs});
      return {
        code: 200
      }
     } catch (error) {
       return {
         code: 10000,
         message: error.message
       }
     }

  }


};
