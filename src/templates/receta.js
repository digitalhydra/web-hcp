import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../css/markdown-github.css";
import PageBanner from '../components/page-banner'
import MdxComponents from '../components/MdxComponents';
export default ({ data }) => {
  const { mdx } = data;
  const title = mdx.frontmatter.title;
  const body = mdx.body;
  return (
    <Layout isInternal title={title}>
      <PageBanner title={title} />
      <div
        className="min-h-internal flex flex-col items-start bg-no-repeat bg-fixed bg-cover">
        <div className="mt-24 bg-white w-full pb-16 mb-20 skew-y-5">
          <div className="container mx-auto px-6 md:px-10 lg:px-24 pt-16 -skew-y-5">
            <h1>{title}</h1>
            <div className="markdown-body">
            <MDXProvider coomponents={MdxComponents}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter{
        title
      }
      body
    }
  }
`;
