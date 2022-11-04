const path = require('path');
const fs = require('fs');
const http = require('https');

module.exports = {
  friendlyName: 'Get image',
  description: 'Get Youtube thumbnail',
  inputs: {
    url: {
      type: 'string',
      required: true
    },
    name: {
      type: 'string',
      required: true
    }
  },

  fn: async function ({ url, name }, exits) {
    const extension = path.extname(url).split('?')[0];
    const fileName = name + extension;
    const filePath = "assets/image/" + fileName;
    const file = fs.createWriteStream(filePath);

    return http.get(url, (fileResponse) => {
      fileResponse.pipe(file);

      file.on("finish", () => {
          file.close();

          return exits.success({ success: true, fileName });
      });
    });
  }
};
