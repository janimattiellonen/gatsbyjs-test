import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

import logo from "../images/gatsbyjs-logo.png";

export default ({data}) => {
  return (
    <Layout>
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