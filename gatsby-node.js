exports.createPages = async function({actions, graphql}) {
    const {data} = await graphql(`
    query{
        allDatoCmsArticle{
            edges{
                node{
                    slug
                }
            }
        }
       }
    `)
    data.allDatoCmsArticle.edges.forEach(({node}) => {
        const slug = node.slug
        actions.createPage({
            path: slug,
            component: require.resolve(`./src/templates/article.js`),
            context: {slug: slug},
        })
        
    });
}