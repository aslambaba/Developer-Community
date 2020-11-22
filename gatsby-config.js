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
          apiKey: "AIzaSyByNw_4hUdfY5KgVygJGsYs4xrldXhyBtg",
          authDomain: "developer-community-94e05.firebaseapp.com",
          databaseURL: "https://developer-community-94e05.firebaseio.com>",
          projectId: "developer-community-94e05",
          storageBucket: "developer-community-94e05.appspot.com",
          messagingSenderId: "166212288546",
          appId: "1:166212288546:web:1723244da94c715a5a4a7b"
        },
      },
    }
  ],
};