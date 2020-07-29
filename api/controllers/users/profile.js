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
    debugger;
    if (user && user.password == inputs.password){
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
