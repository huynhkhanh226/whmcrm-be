module.exports = {


  friendlyName: 'Auth',


  description: 'Auth whm.',

  fn: async function () {
    // All done.
   

    try{
      const packages = await Packages.find();
      if (!packages){ 
        await sails.helpers.whm.packages();
        packages = await Packages.find();
      }
      
      return {
        code: 200,
        data: packages
      }
    }catch(error){
      return {
        code: 1000,
        data: error.message
      }
    }
  }


};
