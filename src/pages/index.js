import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

export default ({data}) => {
  return (
    <Layout>
      <h1>Hi people!</h1>
      <p>Welcome to my humble blog.</p>
      <p><Link to="/page-2/">Go to page 2</Link></p>

      <ul>
        {data.allMarkdownRemark.edges.map((item, i) => (
          <li key={i}><Link to={item.node.frontmatter.path}>{item.node.frontmatter.title}</Link></li>
        ))}
      </ul>
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