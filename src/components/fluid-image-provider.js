import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby";
import _find from 'lodash/find';
const FluidImageProvider = ({src, className}) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp{
        nodes {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
            src
            originalName
          }
        }
      }
    }
  `);
console.log(data.allImageSharp.nodes, src);
  const image = _find(data.allImageSharp.nodes, (node)=>node.fluid.originalName===src);
  return (
    <Img className={className} fluid={image.fluid} />
  );
};


FluidImageProvider.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default FluidImageProvider;