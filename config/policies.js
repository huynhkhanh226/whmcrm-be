/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  //'*': 'is-logged-in',

  // Bypass the `is-logged-in` policy for:
  // 'entrance/*': true,
  // 'account/logout': true,
  // 'view-homepage-or-redirect': true,
  // 'view-faq': true,
  // 'view-contact': true,
  // 'legal/view-terms': true,
  // 'legal/view-privacy': true,
  // 'deliver-contact-form-message': true,
  // '*':true,
  'jwt/create': true,
  'jwt/refresh': true,
  'users/profile': true,
  'users/login': true,
  'users/register': true,
  'whm/packages': true,
  'whm/register': true,
  'system/sendmail': true,
  'whm/order-list': true,
  'whm/get-coupons': true,
  "category/updateCategory": true,
};
