/**
 * Coupons.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: "coupons",
  datastore: "mysql",
  primaryKey: 'id',
  attributes: {
    coupon_id: {
      type: 'string',
      required: true,
      unique: true,
    },
    coupon_name: {
      type: 'string',
      required: true,
    },
    rate: {
      type: 'number',
      required: true,
    }
  },

};

