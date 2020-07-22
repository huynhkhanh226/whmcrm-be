module.exports = {

  friendlyName: '',
  description: '',

  inputs: {
    username: {
      description: '',
      type: 'string',
      required: true
    },
    password: {
      description: '',
      type: 'string',
      required: true
    },
    domain: {
      description: '',
      type: 'string',
      required: true
    },
    contactemail: {
      description: '',
      type: 'string',
      required: true
    },
    pkgname: {
      description: '',
      type: 'string',
      required: true
    },
  },

  fn: async function (inputs) {
    // All done.
    const res = await sails.helpers.whm.register.with(inputs);
    if (res.status == 200) {
      const mail = await sails.helpers.system.sendmail.with({
        to: inputs.contactemail,
        subject: "Mail tự động từ VNDEVHOST",
        content: "Cảm ơn quý khách đã tin dùng dịch vụ của VNDEVHOST. </br> Và đây là thông toàn bộ thông tin bạn cần."
      });
      console.log(mail);
      return {
        code: 200,
        data: {
          ...inputs,
          ...res.data.data,
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
