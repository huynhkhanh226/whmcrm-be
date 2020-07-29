
module.exports = {

  friendlyName: 'Token',

  description: 'Token something.',

  inputs: {
    username: {
      type: "string",
    },
    email: {
      type: "string",
    }
  },


  fn: async function (inputs) {
    if (inputs.username){
      //const sql = `SELECT  * FROM Users WHERE users.username = $1`;
      //return await sails.getDatastore("mysql").sendNativeQuery(sql, [inputs.username]);
      return await Users.findOne({ username: inputs.username });
    }
   
      //return await Users.findOne({ username: inputs.username }).populate('orders');

    if (inputs.email)
      return await Users.findOne({ email: inputs.email });
  }


};

