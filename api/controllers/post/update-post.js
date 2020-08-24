module.exports = {


  friendlyName: 'Update post',


  description: '',


  inputs: {
    id: {
      type: 'string',
      required: true,
    },
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
    },
    categoryId: {
      type: 'string',
      required: true,
    },
  },



  fn: async function (inputs) {

    try {
      await sails.helpers.post.updatePost.with({...inputs});
      return {
        code: 200
      }
     } catch (error) {
       return {
         code: 10000,
         message: "Lưu không thành công"
       }
     }

  }


};
