import React from "react";
import Helmet from "react-helmet";

import Header from "./header";
import Footer from "./footer";
import SEO from './seo'
import "../css/style.css";

const Layout = ({ headerClass, children, title, isInternal }) => {
  
  return (
    <>
      <SEO title={title}/>
      <Helmet>
        <script data-ad-client="ca-pub-5224853986664567" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <body className="font-sans antialiased bg-gray-100" />
      </Helmet>

      <Header className={headerClass} isInternal={isInternal} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
