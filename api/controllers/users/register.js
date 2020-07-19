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
    email: {
      type: "string",
      required: true
    },
    mobile: {
      type: "string",
      required: true
    }
  },

  fn: async function (inputs) {
    const checkUser = await sails.helpers.users.find.with({username: inputs.username});
    if (checkUser){
      return {
        code: "EXIST",
        message: "Tên người dùng này đã tồn tại trong hệ thống."
      }
    }
    const checkEmail = await sails.helpers.users.find.with({email: inputs.email});
    if (checkEmail){
      return {
        code: "EXIST",
        message: "Email này đã tồn tại trong hệ thống."
      }
    }
    return await sails.helpers.users.register.with({...inputs});
  }
};
