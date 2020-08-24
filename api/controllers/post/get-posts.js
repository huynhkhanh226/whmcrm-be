module.exports = {


  friendlyName: 'Get posts',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    try {
  
      return {
        code: 200,
        data:  await sails.helpers.post.getPosts()
      }
     } catch (error) {
       return {
         code: 10000,
         message: "No data"
       }
     }

  }


};
