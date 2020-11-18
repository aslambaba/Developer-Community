
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
                bio
                facebook
                github
                linkedin
            }
            }
    }`);
    
    console.log(result);
    const record = result.data.allContentfulDevelopers.nodes;
    console.log(record);

    actions.createPage(
        {
            path: "/",
            component: require.resolve("./src/templates/home.js"),
            context: record,
        }
    ); 

    actions.createPage(
        {
            path: "developers",
            component: require.resolve("./src/templates/developers.js"),
            context: record,
        }
    );
    
    record.forEach(element => {
        console.log(element.name);
        actions.createPage(
            {
                path: `/developer/${element.name}`,
                component: require.resolve('./src/templates/developer.js'),
                context: element,
            }
        )
    });

    console.log("End of Gatsby Node.js");
} 