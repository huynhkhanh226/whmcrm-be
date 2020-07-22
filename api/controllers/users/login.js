const create = require('../jwt/create');
module.exports = {

  friendlyName: '',
  description: '',

  inputs: {
    username: {
      type: "string",
      required: true
    },
    password: {
      type: "string",
      required: true
    },
  },

  fn: async function (inputs) {
    const user = await sails.helpers.users.find.with({ username: inputs.username });
    if (!user){ 
      return {
        code: 10000,
        message: "Tài khoản bạn không tồn tại trong hệ thống"
      }
    }
    if (user.password === inputs.password) {
      const token =  await sails.helpers.jwt.create.with({
        ...inputs,
        expiresIn: "1h"
    })
      return {
        code: 200,
        message: "Bạn đã đăng nhập thành công",
        data: {
          ...user,
          token
        }
      }
    } else {
      return {
        code: 10000,
        message: "Mật khẩu không chính xác"
      }
    }
  }
}
