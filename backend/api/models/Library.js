/**
 * Library.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "library",
  attributes: {
    title: {
      type: 'string',
      required: true
    },
    length: {
      type: 'string',
      required: true
    },
    thumbnail: {
      type: 'string',
      required: true
    },
    audio: {
      type: 'string',
      required: true
    }
  },
};
