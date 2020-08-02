/**
 * OrderDetails.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: "order_details",
  datastore: "mysql",
  primaryKey: 'id',
  attributes: {
    detailId: {
      type: 'string',
      required: true,
      unique: true,
    },
    amount: {
      type: 'number',
      required: true,
    },
    price: {
      type: 'number',
      required: true,
    },
    total: {
      type: 'number',
      required: true,
    },
    packageId: {
      model: 'Packages',
    },
    orderId: {
      model: 'Orders',
      unique: true
    }

  },
};

