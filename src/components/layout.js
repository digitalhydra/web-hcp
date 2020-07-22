import React from "react";
import Helmet from "react-helmet";

import Header from "./header";
import Footer from "./footer";
import SEO from './seo'
import "../css/style.css";

const Layout = ({ headerClass, children, title, isInternal, ...props }) => {
  
  return (
    <>
      <SEO title={title} {...props}/>
      <Helmet>
        <meta name="google-site-verification" content="tNgg_NYBUoKEukRp7rQcwCPqFoLYl9mg5JBz9ZgChyg" />
        <body className="font-sans antialiased bg-gray-100" />
      </Helmet>

      <Header className={headerClass} isInternal={isInternal} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
