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
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.FB_apiKey,
          authDomain: process.env.FB_authDomain,
          databaseURL: process.env.FB_databaseURL,
          projectId: process.env.FB_projectId,
          storageBucket: process.env.FB_storageBucket,
          messagingSenderId: process.env.FB_messagingSenderId,
          appId: process.env.FB_appId
        },
        features: {
          auth: true,
        }
      },
    }
  ],
};