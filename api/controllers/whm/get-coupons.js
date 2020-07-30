module.exports = {


  friendlyName: 'Get coupons',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    try{
      const coupons = await sails.helpers.whm.getCoupons();
      
      return {
        code: 200,
        data: coupons
      }
    }catch(error){
      return {
        code: 1000,
        data: error.message
      }
    }

  }


};
