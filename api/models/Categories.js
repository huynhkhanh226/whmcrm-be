/**
 * Categories.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: "categories",
  datastore: "mysql",
  primaryKey: 'id',
  attributes: {
    categoryName: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    posts: {
      collection: 'Posts',
      via: 'categoryId'
    },
  },

};

