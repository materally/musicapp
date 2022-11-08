module.exports = {
  friendlyName: 'Index',
  description: 'Index library.',

  fn: async function (_, exits) {

    // get library from mongo

    // All done.
    return exits.success({ success: true, data: [] });
  }
};
