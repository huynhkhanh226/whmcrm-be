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
  primaryKey: 'package_id',
  attributes: {
    package_id: {
      type: 'string',
      required: true,
      unique: true,
    },
    package_name: {
      type: 'string',
      required: true,
    },
    bandwidth: {
      type: 'string',
      required: true,
    },
    disk_quota: {
      type: 'string',
      required: true,
    },
    max_addon: {
      type: 'string',
      required: true,
    },
    max_sub: {
      type: 'string',
      required: true,
    },
    max_ftp: {
      type: 'string',
      required: true,
    },
    max_park: {
      type: 'string',
      required: true,
    },
    max_sql: {
      type: 'string',
      required: true,
    },
  },

};

