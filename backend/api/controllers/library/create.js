const ytdl = require('ytdl-core');
const fs = require('fs');

module.exports = {
  friendlyName: 'Create record to library',
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
    const { title, lengthSeconds } = video.videoDetails;

    // download thumbnail
    const imageUrl = video.videoDetails.thumbnails.pop().url;
    const thumbnailFile = await sails.helpers.getImage.with({ url: imageUrl, name: ID })

    // download audio
    const format = ytdl.chooseFormat(video.formats, { quality: 'highestaudio' });
    const audioFile = ID + '.' + format.container;
    ytdl(url, { format }).pipe(fs.createWriteStream('assets/audio/' + audioFile));

    // TODO create record

    const data = {
      thumbnailFile,
      audioFile,
      title,
      lengthSeconds
    }

    return exits.success({ message: 'success', data })
  }
};
