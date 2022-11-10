/**
 * Playlist.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "playlist",
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    songs: {
      type: 'json',
    }
  },

};

