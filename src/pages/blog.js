import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

import '../components/scss/blog.scss'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
            {posts
              .map(({ node: post }) => (
                <div className="article" key={post.id}>
                <div className="container">
                  <div className="info">
                    <Link style={{ boxShadow: 'none' }} to={post.fields.slug}>
                      <h1 className="naslov">{post.frontmatter.title}</h1>
                      <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
                    </Link>
                    <span className="badge badge-primary"></span>
                  </div>
                  <div className="content">
                    <p>{post.excerpt}</p>
                  </div>
                  <a className="moretxt" href={post.fields.slug}><button type="button" className="btn morebtn">VISE</button></a>
                  </div>
              </div>
              ))}
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "YYYY/MM/DD")
          }
        }
      }
    }
  }
`