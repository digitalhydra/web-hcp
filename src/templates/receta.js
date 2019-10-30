import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../css/markdown-github.css";
import PageBanner from '../components/page-banner'
import ImageProvider from '../components/fluid-image-provider';
import MdxComponents from '../components/MdxComponents';
export default ({ data }) => {
  const { mdx } = data;
  const {title, image} = mdx.frontmatter;
  const body = mdx.body;
  return (
    <Layout isInternal title={title}>
      <PageBanner title={title} />
      <div className="min-h-internal flex flex-col items-start ">
        <div className="mt-24 bg-white w-full pb-16 mb-20 skew-y-5">
          <div className="container mx-auto px-6 md:px-10 lg:px-24 pt-16 -skew-y-5">
            <div className="markdown-body flex flex-wrap">
              <div className="w-full lg:order-2 lg:w-1/4 order-1 mb-5">
                <ImageProvider src={image} className="h-56 lg:h-full" />
              </div>
              <div className="w-full order-2 lg:order-1 lg:w-3/4 lg:pr-6">
                <MDXProvider components={MdxComponents}>
                  <MDXRenderer>{body}</MDXRenderer>
                </MDXProvider>
              </div>
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
        image
      }
      body
    }
  }
`;
