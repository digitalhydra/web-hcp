import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";

function Index({data}) {
  console.log(data);
  return (
    <Layout headerClass="relative bg-white" title="Inicio">
      <div
        className="h-screen w-full relative z-10"
        >
        <div className="container relative mx-auto z-10 md:pt-56">
          <div
            className="bg-white rounded md:w-1/2 lg:w-1/3 flex flex-col sm:flex-row items-start sm:items-center text-sm p-4"
            style={{
              boxShadow:
                "0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)"
            }}
          >
            <div className="flex-1 font-serif p-5">
              <ul>
                <li className="mb-3">
                  <Link to="/cotizaciones" className="text-4xl font-bold text-secondary hover:underline">Cotizaciones</Link>
                  <p className="font-sans text-2xl text-primary">Productos / Tamaños / Pagos</p>
                </li>
                <li className="mb-3">
                  <Link to="/cursos" className="text-4xl font-bold text-secondary hover:underline">Cursos</Link>
                  <p className="font-sans text-2xl text-primary">Clases maestras / Talleres</p>
                </li>
                <li className="mb-3">
                  <Link to="/recetas" className="text-4xl font-bold text-secondary hover:underline">Recetas</Link>
                  <p className="font-sans text-2xl text-primary">Para talleres y mas</p>
                </li>
                <li className="mb-3 hidden">
                  <Link to="/faq" className="text-4xl font-bold text-secondary hover:underline">Preguntas</Link>
                  <p className="font-sans text-2xl text-primary">Frecuentes</p>
                </li>
                <li className="mb-0 hidden">
                  <Link to="/contacto" className="text-4xl font-bold text-secondary hover:underline">Contacto</Link>
                </li>
              </ul>
            </div>
            <div className="flex-initial mt-6 sm:mt-0">
              <Link to="/contact">
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute z-0 w-full h-screen left-0 top-0">
          <Img fluid={data.imageSharp.fluid} className="w-full h-screen left-0 top-0" />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query bgImage {
    imageSharp(fluid: {originalName: {eq: "bg-home.jpg"}}) {
      fluid {
        src
      }
    }
  }
`;
export default Index;
