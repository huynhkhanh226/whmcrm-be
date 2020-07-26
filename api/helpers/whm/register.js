const axios = require('axios');
const Utils = require('../../utils');

module.exports = {
  friendlyName: 'Auth',
  description: 'Auth whm.',


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
    details: {
      description: '',
      type: 'string',
    }
  },

  fn: async function (inputs) {
    // TODO
    // /json-api/createacct?api.version=1&username=raymond&domain=vndevops.com


    return new Promise(async (resolve, reject) => {
      try {
        
        //const url = Utils.getUrl("/json-api/createacct", body);
        const user = await sails.helpers.users.find.with({username: inputs.username});
        const data = {
          username: inputs.username,
          password: user.password,
          doamin: inputs.doamin,
          contactemail: user.email,
          pkgname: inputs.pkgname
        }
        //const body = { ...data };
        //const config = Utils.getHeader();
        //await axios.post(url, body, config);
        await Orders.create({
          order_id: 1,
          bill_address: inputs.bill_address, 
          payment_method: inputs.payment_method,
          payment_status: false ,
          details: []
        });
        resolve(
          {
            code: 200,
            message: "Bạn đã đăng ký thành công vào hệ thông"
          }
        )

      } catch (error) {
        reject({
          code: "ERROR",
          message: "Thêm dữ liệu không thành công"
        })
      }
    });
  }
};

