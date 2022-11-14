module.exports = {
  friendlyName: 'All playlist',
  description: 'Get all playlist',

  fn: async function (_, exits) {
    const playlists = await Playlist.find();

    return exits.success({ success: true, data: playlists })
  }
};
