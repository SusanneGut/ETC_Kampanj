exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      articles: allDatoCmsArticle {
        edges {
          node {
            slug
          }
        }
      }
      items: allDatoCmsMobilesubscription {
        edges {
          node {
            slug
          }
        }
      }
      pages: allDatoCmsPage {
        edges {
          node {
            slug
          }
        }
      }
      orders: allDatoCmsOrder {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.articles.edges.forEach(({ node }) => {
    const slug = node.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/article.js`),
      context: { slug: slug },
    })
  })

  data.items.edges.forEach(({ node }) => {
    const slug = node.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/mobileSubscription.js`),
      context: { slug: slug },
    })
  })

  data.pages.edges.forEach(({ node }) => {
    const slug = node.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/page.js`),
      context: { slug: slug },
    })
  })
  data.orders.edges.forEach(({ node }) => {
    const slug = node.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/order.js`),
      context: { slug: slug },
    })
  })
}
