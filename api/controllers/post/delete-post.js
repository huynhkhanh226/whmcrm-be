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

    try {
      await sails.helpers.post.deletePost.with({id: inputs.id});
      return {
        code: 200
      }
     } catch (error) {
       return {
         code: 10000,
         message: "Không thể xoá dữ liệu"
       }
     }
  }


};
