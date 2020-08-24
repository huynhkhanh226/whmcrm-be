module.exports = {


  friendlyName: 'Update category',


  description: '',

  inputs: {
    id: { 
      type: "string",
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

   try {
    await sails.helpers.category.updateCategory.with({...inputs});
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
