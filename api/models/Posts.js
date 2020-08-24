/**
 * Posts.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: "posts",
  datastore: "mysql",
  primaryKey: 'id',
  attributes: {
    subject: {
      type: 'string',
      required: true,
    },
    shortDescription: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    thumbnail: {
      type: 'string',
    },
    author: {
      type: 'string',
      required: true,
    },
    categoryId: {
      model: 'Categories'
    },
  },

};

