import React from "react";
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
    key="adsense"
      data-ad-client="ca-pub-5224853986664567"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    ></script>,
    <script
    key="sharethis"
      type="text/javascript"
      src="https://platform-api.sharethis.com/js/sharethis.js#property=5f187efb07173c00125314c9&product=inline-share-buttons"
      async="async"
    ></script>,
  ]);
};
