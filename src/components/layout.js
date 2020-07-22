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
        <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=5f187efb07173c00125314c9&product=inline-share-buttons&cms=sop' async='async'></script>
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
