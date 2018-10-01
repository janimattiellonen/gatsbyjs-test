import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

export default ({data}) => {

  console.log("sss: " + JSON.stringify(data.allMarkdownRemark, null, 2));
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>

      {data.allMarkdownRemark.edges.map((item, i) => (
        <p key={i}><Link to={item.node.frontmatter.path}>{item.node.frontmatter.title}</Link></p>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          html
          headings {
            depth
            value
          }
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`