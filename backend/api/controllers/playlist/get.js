module.exports = {
  friendlyName: 'Get',
  description: 'Get playlist.',
  fn: async function (_, exits) {
    const id = this.req.params.id;
    const playlist = await Playlist.findOne({ id });

    if(!playlist) {
      return exits.success({ error: true, message: 'Playlist not found!' });
    }

    return exits.success({ success: true, data: playlist });
  }
};
