const axios = require('axios');
const Utils = require('../../utils');
const { package } = require('grunt');

module.exports = {
  friendlyName: 'Auth',
  description: 'Auth whm.',

  fn: async function () {
    // TODO
    const config = Utils.getHeader();
    const body = { "want": "all" };
    const url = Utils.getUrl("/json-api/listpkgs");
    console.log(url);
    const response = await axios.post(url, body, config);
    // packageID: data[i].name,
    // bandwidth: data[i].BWLIMIT,
    // diskQuota: data[i].QUOTA,
    // maxAddon: data[i].MAXADDON,
    // maxSub: data[i].MAXSUB,
    // maxFTP: data[i].MAXFTP,
    // maxPark: data[i].MAXPARK,
    // maxSQL: data[i].MAXSQL,
    const asyncFunc = response.data.data.pkg.map(async (package) => {
      const exist = await Packages.findOne({ packageId: package.name})
      if (!exist){
        await Packages.create({
          packageId: package.name,
          packageName: package.name.split('_')[1],
          bandwidth: package.BWLIMIT,
          diskQuota: package.QUOTA,
          maxAddon: package.MAXADDON,
          maxSub: package.MAXSUB,
          maxFtp: package.MAXFTP,
          maxPark: package.MAXPARK,
          maxSql: package.MAXSQL,
        })
      } 
    })
    return Promise.all(asyncFunc);
  }
};

