module.exports = {
  friendlyName: 'Index',
  description: 'Index library.',

  fn: async function (_, exits) {
    const records = await Library.find();

    return exits.success({ success: true, data: records });
  }
};
