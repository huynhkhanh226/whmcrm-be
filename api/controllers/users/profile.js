module.exports = {


  friendlyName: 'View faq',


  description: 'Display "FAQ" page.',

  inputs: {
    username: {
      type: "string",
    }
  },

  fn: async function (inputs) {
    const user = await sails.helpers.users.find.with({username: inputs.username});
    if (user){
      return {
        code: 200,
        data: user
      };
    }else{
      return {
        code: 10000,
        message: "Invalid user"
      };
    }
    
  }
};
