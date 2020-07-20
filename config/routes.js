/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'POST  /api/v1/jwt/create':          { action: 'jwt/create' },
  'POST  /api/v1/jwt/refresh':          { action: 'jwt/refresh' },

  'POST  /api/v1/users/register':          { action: 'users/register' },
  'POST  /api/v1/users/profile':          { action: 'users/profile' },


  'POST  /api/v1/whm/packages':          { action: 'whm/packages' },
  'POST  /api/v1/whm/register':          { action: 'whm/register' },
  'POST  /api/v1/system/sendmail':          { action: 'system/sendmail' },
};
