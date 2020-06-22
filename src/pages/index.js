import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import Footer from "../components/footer";
import "../css/footer.css";
// import HeroHeader from "../components/heroHeader";
// import Navbar from "../components/navbar";
const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <Helmet>
        <title>Support Genie Blog</title>
        <meta name="description" content={"Support Genie | Blog"} />
      </Helmet>
      {/* <HeroHeader /> */}
      {/* <Navbar /> */}
      <h2 style={{ fontSize: "28px", fontWeight: "bolder" }}>
        Blog Posts &darr;
      </h2>
      <div className="grids">{Posts}</div>
      {/* <Footer /> */}
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`;