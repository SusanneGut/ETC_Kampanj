exports.createPages = async function({actions, graphql}) {
    const {data} = await graphql(`
        query{
            articles: allDatoCmsArticle{
                edges{
                    node{
                        slug
                    }
                }
            }
            items: allDatoCmsMobilesubscription{
                edges{
                    node{
                        slug
                    }
                }
            }
        }

       
    `)
   
       data.articles.edges.forEach(({node}) => {
            const slug = node.slug
            actions.createPage({
                path: slug,
                component: require.resolve(`./src/templates/article.js`),
                context: {slug: slug},
            })
            
        });
    
        data.items.edges.forEach(({node}) => {
            const slug = node.slug
            actions.createPage({
                path: slug,
                component: require.resolve(`./src/templates/mobileSubscription.js`),
                context: {slug: slug},
            })
            
        });
    

    
    

}