module.exports = {


  friendlyName: 'Auth',


  description: 'Auth whm.',

  fn: async function () {
    // All done.
    const res = await sails.helpers.whm.register.with();
    if (res.status == 200) {
      return {
        code: 200,
        data: res.data.data
      }
    } else {
      return {
        code: 1000,
        data: res.statusText
      }
    }
  }


};
