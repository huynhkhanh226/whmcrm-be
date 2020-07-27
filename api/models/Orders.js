/**
 * Orders.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: "orders",
  datastore: "mysql",
  primaryKey: 'id',
  attributes: {
    order_id: {
      type: 'string',
      required: true,
      unique: true,
    },
    bill_addres: {
      type: 'string',
    },
    payment_method: {
      type: 'string',
      required: true,
    },
    payment_status: {
      type: 'string',
      required: true,
    },
    details: {
      collection: 'OrderDetails',
      via: 'owner'
    },
    owner: {
      model: 'Users'
    },
    customer_id: {
      type: 'string',
    }
  },
  

};

