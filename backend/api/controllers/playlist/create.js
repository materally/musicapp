module.exports = {
  friendlyName: 'Create',
  description: 'Create playlist.',
  inputs: {
    name: {
      type: 'string',
      required: true
    },
    songIds: {
      type: 'string',
      required: true
    }
  },

  fn: async function ({ name, songIds }, exits) {

    const splitSongIds = songIds.split(',');
    const records = await Library.find({ '_id': { in: splitSongIds } });

    const playlist = await Playlist.create({
      name,
      songs: records
    }).fetch()

    return exits.success({ message: 'success', data: playlist })
  }


};
