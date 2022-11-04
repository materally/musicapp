const ytdl = require('ytdl-core');

module.exports = {
  friendlyName: 'Youtube Search',
  description: 'Youtube search API.',
  inputs: {
    url: {
      type: 'string',
      required: true
    }
  },

  fn: async function (inputs, exits) {
    const { url } = inputs;
    const isValidUrl = ytdl.validateURL(url);

    if(!isValidUrl){
      return exits.success({ error: true, message: 'Not valid Youtube URL!' });
    }

    const video = (await ytdl.getInfo(url)).videoDetails
    const { title, lengthSeconds, viewCount, thumbnails, embed: { iframeUrl } } = video;

    const data = {
      iframeUrl,
      title,
      lengthSeconds,
      viewCount,
      thumbnail: thumbnails.pop()
    }

    return exits.success({ success: true, data });
  }
};
