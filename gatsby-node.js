
exports.createPages = async function ({ actions, graphql }) {

    const result = await graphql(`{
        allContentfulDevelopers {
            nodes {
                name
                job
                image {
                    file {
                      url
                    }
                  }
            }
            }
    }`);
    

    console.log(result);
    const record = result.data.allContentfulDevelopers.nodes;
    console.log(record);

    actions.createPage(
        {
            path: "developers",
            component: require.resolve("./src/templates/developers.js"),
            context: record,
        }
    ); 


    actions.createPage(
        {
            path: "/developer",
            component: require.resolve('./src/templates/developer.js'),
            context: {
                name: 'Sir Aamir Pinger',
                Data: 'Hello This is the Discription',
            },
        }
    );

    console.log("End of Gatsby Node.js");
} 