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
    try {
      await sails.helpers.category.deleteCategory.with({id: inputs.id});
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
