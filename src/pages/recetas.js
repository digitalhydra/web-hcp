import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RecetaItem from "../components/receta-item";
import PageBanner from "../components/page-banner";
const Recetas = ({ data }) => {
  const recetas = data.recetas.edges;

  return (
    <Layout headerClass="bg-white relative" isInternal title="Recetas">
      <div className="min-h-internal">
        <PageBanner title="Recetas" />
        <div className="container mx-auto">
          <div className="flex flex-wrap mt-10 md:mt-20 content-between">
            {recetas.map(({ node }) => (
              <RecetaItem
                title={node.frontmatter.title}
                url={node.fields.slug}
                key={node.fields.slug}
                image={node.frontmatter.image}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    recetas: allMdx(
      filter: { fileInfo: { sourceInstanceName: { eq: "recetas" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            image
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Recetas;
