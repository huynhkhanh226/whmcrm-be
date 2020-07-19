module.exports = {


  friendlyName: 'Auth',


  description: 'Auth whm.',

  fn: async function () {
    // All done.
    const res = await sails.helpers.whm.packages.with();
    if (res.status == 200) {
      return {
        code: 200,
        data: res.data.data.pkg
      }
    } else {
      return {
        code: 1000,
        data: res.statusText
      }
    }
  }


};
