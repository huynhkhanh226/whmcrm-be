module.exports = {


  friendlyName: 'View faq',


  description: 'Display "FAQ" page.',

  inputs: {
    username: {
      type: "string",
    },
    password: {
      type: "string",
    }
  },

  fn: async function (inputs) {
    const user = await sails.helpers.users.find.with({username: inputs.username});
    if (user && user.password == password){
      return {
        code: 200,
        data: user
      };
    }else{
      return {
        code: "INVALID",
        message: "Invalid user"
      };
    }
    
  }
};
