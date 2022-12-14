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

  'POST /youtube/search' : 'youtube/search',

  'GET /library': 'library/index',
  'POST /library': 'library/create',

  'GET /playlist/': 'playlist/index',
  'GET /playlist/:id': 'playlist/get',
  'POST /playlist/create': 'playlist/create'

};
