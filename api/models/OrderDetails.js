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
    details_id: {
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
    package_id: {
      model: 'Packages',
    },
    order_id: {
      model: 'Orders',
      unique: true
    }

  },
};

