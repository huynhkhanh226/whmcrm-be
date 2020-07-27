const { specialCharacter } = require("../../utils");
const { listenerCount } = require("nodemailer/lib/mailer");

module.exports = {


  friendlyName: 'Order list',


  description: '',


  inputs: {
    username: {
      description: '',
      type: 'string',
      required: true
    },
  },


  fn: async function (inputs) {

    // All done.
    const result = await sails.helpers.whm.orderList.with({...inputs});
    if (result.code == 200){
      return {
        code: 200,
        data: result.data
      }
    }
    return {
      return: 10000,
      message: "Có lỗi xảy ra trong quá trình lấy dữ liệu"
    }

  }


};
