const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    plugins: [
      `gatsby-plugin-material-ui`,
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: process.env.DC_SPACEID,
          accessToken: process.env.DC_TOKEN,
        },
      },
    ],
  };