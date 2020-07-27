module.exports = {

  friendlyName: '',
  description: '',

  inputs: {
    username: {
      description: '',
      type: 'string',
      required: true
    },
    domain: {
      description: '',
      type: 'string',
      required: true
    },
    pkgname: {
      description: '',
      type: 'string',
      required: true
    },
    payment_method: {
      description: '',
      type: 'string',
    },
    bill_address: {
      description: '',
      type: 'string',
    },
    details: {
      description: '',
      type: 'json',
    }
  },

  fn: async function (inputs) {
    // All done.
    const res = await sails.helpers.whm.register.with(inputs);
    if (res.code == 200) {
      debugger;
      const user = await sails.helpers.users.find.with({ username: inputs.username });
      debugger;
      const mail = await sails.helpers.system.sendmail.with({
        to: user.email,
        subject: "Mail tự động từ VNDEVHOST",
        content: "Cảm ơn quý khách đã tin dùng dịch vụ của VNDEVHOST. </br> Và đây là thông toàn bộ thông tin bạn cần."
      });
      console.log(mail);
      return {
        code: 200,
        data: {
          ...inputs,
          //...res.data.data,
          mail
        }
      }
    } else {
      return {
        code: 1000,
        message: res.statusText
      }
    }
  }


};
