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
  'GET  /api/v1/hello':          { action: 'home/hello' },
  'POST  /api/v1/jwt/create':          { action: 'jwt/create' },
  'POST  /api/v1/jwt/refresh':          { action: 'jwt/refresh' },

  'POST  /api/v1/users/register':          { action: 'users/register' },
  'POST  /api/v1/users/login':          { action: 'users/login' },
  'POST  /api/v1/users/profile':          { action: 'users/profile' },


  'POST  /api/v1/whm/packages':          { action: 'whm/packages' },
  'POST  /api/v1/whm/register':          { action: 'whm/register' },
  'POST  /api/v1/system/sendmail':          { action: 'system/sendmail' },
  'POST  /api/v1/whm/order-list':          { action: 'whm/order-list' },
  'POST  /api/v1/whm/get-coupons':          { action: 'whm/get-coupons' },

  'POST  /api/v1/category/get':          { action: 'category/get-categories' },
  'POST  /api/v1/category/update':          { action: 'category/update-category' },
  'POST  /api/v1/category/save':          { action: 'category/save-category' },
  'POST  /api/v1/category/delete':          { action: 'category/delete-category' },

  'POST  /api/v1/post/get':          { action: 'post/get-posts' },
  'POST  /api/v1/post/update':          { action: 'post/update-post' },
  'POST  /api/v1/post/save':          { action: 'post/save-post' },
  'POST  /api/v1/post/delete':          { action: 'post/delete-post' },
};
