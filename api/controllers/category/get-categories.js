module.exports = {


  friendlyName: 'Get categories',


  description: '',


  inputs: {

  },


  fn: async function (inputs) {

    try {
  
      return {
        code: 200,
        data:  await sails.helpers.category.getCategories()
      }
     } catch (error) {
       return {
         code: 10000,
         message: "No data"
       }
     }
  

  }


};
