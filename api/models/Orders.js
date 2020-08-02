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
    orderId: {
      type: 'string',
      required: true,
      unique: true,
    },
    billAddres: {
      type: 'string',
    },
    paymentMethod: {
      type: 'string',
      required: true,
    },
    paymentStatus: {
      type: 'string',
      required: true,
    },
    details: {
      collection: 'OrderDetails',
      via: 'orderId'
    },
    customerId: {
      model: 'Users'
    },
  },
  

};

