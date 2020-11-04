
const ArrayData = [
    {
        name: "Usama Yasin",
        Job: "Mern Stack Developer",
    },
    {
        name: "Aslam Sarfraz",
        Job: "Full Stack Developer"
    },
    {
        name: "Uzair Ishfaq",
        Job: "LAMP Stack Developer",
    }
]

exports.createPages = async function ({ actions, graphql }) {

    const result = await graphql(`{
        allContentfulDevelopers {
            nodes {
                name
                job
            }
            }
    }`)
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
    console.log(result);
    const record = result.data.allContentfulDevelopers.nodes;
    console.log("Outside "+record);
    record.forEach(element => {
        console.log("Inside " + element);
        actions.createPage(
            {
                path: "developers",
                component: require.resolve("./src/templates/developers.js"),
                context: {
                    CommunityRecords: element
                } 
            }
        ); 
    });
    console.log("End of Gatsby Node.js");
} 