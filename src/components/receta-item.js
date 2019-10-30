import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby";
import ImageProvider from '../components/fluid-image-provider';
import { GiSpoon } from "react-icons/gi";

const RecetaItem = ({title, url, image}) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-3 mb-3">
      <div className="m-1 shadow-md rounded overflow-hidden hover:-translate-2 ">
        <Link to={url} className="relative flex flex-col w-full h-full justify-end ">
          <ImageProvider src={image} className="lg:h-item h-56" />
          <span className="absolute text-4xl flex items-center justify-center b-0 rounded-full h-16 w-16 shadow mt-2 bg-gray-100 text-pink-400 self-center "><GiSpoon /></span>
        </Link>
        <Link
          to={url}
          className="text-2xl py-3 px-4 text-center block font-normal text-secondary hover:text-indogo-600 hover:underline"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

RecetaItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
};

export default RecetaItem;