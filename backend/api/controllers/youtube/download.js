const ytdl = require('ytdl-core');
const fs = require('fs');

module.exports = {
  friendlyName: 'Download youtube  music',
  description: 'Download  file (returning a state).',
  inputs: {
    url: {
      type: 'string',
      required: true
    }
  },

  fn: async function ({ url }, exits) {
    const ID = Date.now();
    const video = await ytdl.getInfo(url);

    // download thumbnail
    const imageUrl = video.videoDetails.thumbnails.pop().url;
    const thumbnailFile = await sails.helpers.getImage.with({ url: imageUrl, name: ID })

    // download audio
    const format = ytdl.chooseFormat(video.formats, { quality: 'highestaudio' });
    const audioFile = ID + '.' + format.container;
    ytdl(url, { format }).pipe(fs.createWriteStream('assets/audio/' + audioFile));

    const data = {
      thumbnailFile,
      audioFile
    }

    return exits.success({ message: 'success', data })
  }
};
