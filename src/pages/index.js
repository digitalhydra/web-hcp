import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import bgImage from "../../static/bg-home.jpg";
import YouTubeSubscribe from "../components/SubscribeButton";
import YouTube from "react-youtube";

function Index({ data }) {
  // console.log(data);
  let channelid = "UClPIm_TUBVb0I3oF_FNnujw";
  const youtubeOpts = {
    playerVars: {
      autoplay: false,
    },
  };
  return (
    <Layout headerClass="relative bg-white" title="Inicio">
      <div
        className="bg-bottom md:bg-right-bottom bg-no-repeat bg-cover pb-12 md:pb-0"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="h-auto md:h-screen w-full relative z-10">
          <div className="container mx-auto" style={{ paddingTop: "25vh" }}>
            <div className="flex flex-col items-start lg:w-2/3 sm:w-full">
              <YouTube
                videoId="vrn38ESw1xA" // defaults -> null
                id="vrn38ESw1xA" // defaults -> null
                className="livestream-embed border-red-500 rounded-lg border-4 border-solid shadow-xl w-full h-full mx-auto" // defaults -> null
                containerClassName="livestream-video mb-6  w-full" // defaults -> noop
                opts={youtubeOpts}
              />
              <div className="bg-gray-200 flex items-center flex-row shadow-lg md:w-1/2 w-full">
                <h2 className="text-3xl text-primary font-black ml-3 rounded-md p-4">
                  Suscribete
                </h2>
                <YouTubeSubscribe
                  channelid={channelid}
                  theme={"default"}
                  layout={"full"}
                  count={"default"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query bgImage {
    imageSharp(fluid: { originalName: { eq: "bg-home.jpg" } }) {
      fluid {
        src
      }
    }
  }
`;
export default Index;
