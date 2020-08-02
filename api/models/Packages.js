/**
 * Packages.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  // packageID: data[i].name,
  // bandwidth: data[i].BWLIMIT,
  // diskQuota: data[i].QUOTA,
  // maxAddon: data[i].MAXADDON,
  // maxSub: data[i].MAXSUB,
  // maxFTP: data[i].MAXFTP,
  // maxPark: data[i].MAXPARK,
  // maxSQL: data[i].MAXSQL,
  tableName: "packages",
  datastore: "mysql",
  primaryKey: 'packageId',
  attributes: {
    packageId: {
      type: 'string',
      required: true,
      unique: true,
    },
    packageName: {
      type: 'string',
      required: true,
    },
    bandwidth: {
      type: 'string',
      required: true,
    },
    diskQuota: {
      type: 'string',
      required: true,
    },
    maxAddon: {
      type: 'string',
      required: true,
    },
    maxSub: {
      type: 'string',
      required: true,
    },
    maxFtp: {
      type: 'string',
      required: true,
    },
    maxPark: {
      type: 'string',
      required: true,
    },
    maxSql: {
      type: 'string',
      required: true,
    },
  },

};

