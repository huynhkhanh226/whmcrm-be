const axios = require('axios');
const Utils = require('../../utils');
const { v4: uuidv4 } = require('uuid');

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
    // TODO
    // /json-api/createacct?api.version=1&username=raymond&domain=vndevops.com


    return new Promise(async (resolve, reject) => {
      try {

        //const url = Utils.getUrl("/json-api/createacct", body);
        const user = await sails.helpers.users.find.with({ username: inputs.username });
        if (!user) {
          resolve(
            {
              code: 10000,
              message: "Tài khoản không hợp lệ"
            }
          )
        }
        const data = {
          username: inputs.username,
          doamin: inputs.domain,
          pkgname: inputs.pkgname,
          password: user.password,
          contactemail: user.email,

        }
        //const body = { ...data };
        //const config = Utils.getHeader();
        //await axios.post(url, body, config);
        const orderId = uuidv4().toString();
        const order = await Orders.create({
          order_id: orderId,
          bill_address: inputs.bill_address,
          payment_method: inputs.payment_method,
          payment_status: "0",
          owner: user.id,
          customer_id: user.id,
        }).fetch();


        const details = inputs.details;

        const dataDetail = details.map(element => {
          return {
            details_id: uuidv4().toString(),
            amount: element.amount,
            price: element.price,
            total: element.total,
            order_id: orderId,
            package_id: element.package_id,
            owner: order.id
          }
        });

        const records = await OrderDetails.createEach(dataDetail).fetch();
        
        resolve(
          {
            code: 200,
            message: "Bạn đã đăng ký thành công vào hệ thông"
          }
        )

      } catch (error) {
        reject({
          code: "ERROR",
          message: error.message
        })
      }
    });
  }
};

