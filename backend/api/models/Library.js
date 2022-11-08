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
    lengthSeconds: {
      type: 'string',
      required: true,
      columnName: 'length'
    },
    thumbnailFile: {
      type: 'string',
      required: true,
      columnName: 'thumbnail'
    },
    audioFile: {
      type: 'string',
      required: true,
      columnName: 'audio'
    }
  },
};
