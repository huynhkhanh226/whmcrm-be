
module.exports = {

  friendlyName: 'create',
  description: '',

  inputs: {
    username: {
      description: '',
      type: 'string',
      required: true
    },
    password: {
      description: '',
      type: 'string',
      required: true
    },
    email: {
      description: '',
      type: 'string',
      required: true
    },
    mobile: {
      description: '',
      type: 'string',
      required: true
    },
  },

  fn: async function (inputs) {
    return new Promise(async (resolve, reject) => {
      try {
        //await Users.create(inputs);
        resolve(
          {
            code: 200,
            message: "Bạn đã đăng ký thành công vào hệ thông"
          }
        )
  
      } catch (error) {
        reject({
          code: "ERROR",
          message: "Thêm dữ liệu không thành công"
        })
      }
    });
  }
};
