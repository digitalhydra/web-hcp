import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PageBanner from "../components/page-banner";
import { FaWhatsapp } from "react-icons/fa";
import ImageProvider from '../components/fluid-image-provider';


const Recetas = () => {

  return (
    <Layout headerClass="bg-white relative" isInternal title="Cotizaciones">
      <div className="min-h-internal">
        <PageBanner title="Cotizaciones" />
        <div className="container mx-auto">
          <div className=" mt-10 md:mt-20 content-between">
            <ul className="flex mb-6 w-full items-center justify-center">
              <li><a className="mx-3 text-center text-3xl text-primary" href="#cotizaciones">Cotizaciones</a></li>
              <li><a className="mx-3 text-center text-3xl text-primary" href="#productos">Productos</a></li>
              <li><a className="mx-3 text-center text-3xl text-primary hidden" href="#tamanos">Tamaños</a></li>
              <li><a className="mx-3 text-center text-3xl text-primary hidden" href="#proceso">Proceso</a></li>
            </ul>
            <div id="cotizaciones" className="mb-8 text-2xl">
              <p className="">Hola, gracias por tu interes en nuestros productos y servicios, en esta pagina encontraras informacion sobre nuestros productos y servicios, asi como informacion relevante que hara el proceso mas sencillo.
              </p>
              <p>Si ya tienes una idea general de lo que quieres puedes contactarnos al Whatsapp <a className="inline-block bg-pink-400 text-white p-2 py-1 rounded" href="https://api.whatsapp.com/send?phone=573016989495&text=Deseo cotizar X&source=cotizaciones"><FaWhatsapp className="float-left mt-1" /> 301 6989495</a> y solicitar mas informacion.</p>
              <h4 className="text-secondary mt-3">Tips:</h4>
              <p>Para hacer el proceso de cotizacion mas eficiente te recomendamos tener en cuenta la siguiente informacion:</p>
              <ol className="list-disc list-inside mb-3 text-xl">
                <li>La cantidad de porciones que deseas (en el caso de pasteles)</li>
                <li>La tematica general del diseño, si no tienes un diseño de referencia podemos ayudarte enviandote algunas opciones.</li>
                <li>Los pedidos se deben hacer con minimo 4 dias de anticipacion.</li>
                <li>Para todo pedido realizado debe abonarse el 50% del valor, sin excepción</li>
                <li>El transporte del producto no esta incluido y es responsabilidad del cliente.</li>
              </ol>
            </div>
            <div id="productos" className="text-2xl mb-8">
              <h2 className="text-4xl text-primary">Productos</h2>
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                  <ImageProvider src="personalizadas.jpg" className="h-64 lg:h-item rounded" />
                  <h3 className="font-bold font-serif text-3xl text-center">Pasteles Personalizados</h3>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <ImageProvider src="tradicion.jpg" className="h-64 lg:h-item rounded" />
                  <h3 className="font-bold font-serif text-3xl text-center">Pasteles tradicion</h3>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <ImageProvider src="mesas.jpg" className="h-64 lg:h-item rounded" />
                  <h3 className="font-bold font-serif text-3xl text-center">Mesas dulces</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};


export default Recetas;
