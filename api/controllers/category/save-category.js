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

    try {
      await sails.helpers.category.saveCategory.with({...inputs});
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
