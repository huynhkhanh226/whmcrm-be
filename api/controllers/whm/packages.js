module.exports = {


  friendlyName: 'Auth',


  description: 'Auth whm.',

  fn: async function () {
    // All done.
   
debugger;
    try{
      const packages = await Packages.find();
      if (packages.length == 0){ 
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
