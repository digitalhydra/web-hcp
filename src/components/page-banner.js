import React from 'react';
import PropTypes from 'prop-types';

const PageBanner = ({title}) => {
  return (
    <div className=" h-banner font-serif font-hairline flex items-center justify-center self-start text-secondary bg-cover"
      style={{backgroundImage:'url(/banner-hcp.jpg)'}}
    >
        <h1 className="container mx-auto text-4xl md:text-5xl text-secondary text-center px-2">
          {title}
        </h1>
    </div>
  );
};

PageBanner.propTypes = {
  title: PropTypes.string,
};

export default PageBanner;