import React from "react";

import Layout from "../components/layout";
import PageBanner from "../components/page-banner";
import { FaWhatsapp } from "react-icons/fa";
import ImageProvider from '../components/fluid-image-provider';


const Recetas = () => {

  return (
    <Layout headerClass="bg-white relative" isInternal title="Cursos">
      <div className="min-h-internal">
        <PageBanner title="Cursos" />
        <div className="container mx-auto">
          <div className=" mt-10 md:mt-20 content-between">
            <div id="cotizaciones" className="mb-8 text-2xl">
              <p className="">Cursos vigentes actualmente</p>
              <p>Puedes contactarnos al Whatsapp <a className="inline-block bg-pink-400 text-white p-2 py-1 rounded" href="https://api.whatsapp.com/send?phone=573016989495&text=Deseo cotizar X&source=cotizaciones"><FaWhatsapp className="float-left mt-1" /> 301 6989495</a> y solicitar mas informacion.</p>
              
            </div>
            <div id="productos" className="text-2xl mb-8">
              <div className="flex flex-wrap items-center justify-center">
                <a href="/downloads/curso-basico-fondant-navidad.pdf" className="w-full md:w-1/2 lg:w-1/2 p-4">
                  <ImageProvider src="curso-basico-fondant-navidad.png" className="h-full rounded" />
                  <h3 className="font-bold font-serif text-3xl text-center">Curso basico de fondant, tema Navidad</h3>
                </a>
                <a href="/downloads/galleteritos.pdf" className="w-full md:w-1/2 lg:w-1/2 p-4">
                  <ImageProvider src="curso-galleteritos.jpeg" className="h-full rounded" />
                  <h3 className="font-bold font-serif text-3xl text-center">Taller Galleteritos</h3>
                </a>
                <a href="/downloads/galleteritos.pdf" className="w-full md:w-1/2 lg:w-1/2 p-4">
                  <ImageProvider src="curso-pasteleritos.jpeg" className="h-full rounded" />
                  <h3 className="font-bold font-serif text-3xl text-center">Taller Pasteleritos</h3>
                </a>
                <a href="/downloads/galleteritos.pdf" className="w-full md:w-1/2 lg:w-1/2 p-4">
                  <ImageProvider src="curso-padres-hijos.jpeg" className="h-full rounded" />
                  <h3 className="font-bold font-serif text-3xl text-center">Taller Padres e Hijos</h3>
                </a>
                <div className="w-full md:w-1/2 lg:w-1/2 p-4">
                  <ImageProvider src="taller-conejo.jpg" className="h-full rounded" />
                  <h3 className="font-bold font-serif text-3xl text-center">Taller Conejo</h3>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 p-4">
                <ImageProvider src="taller-circo.jpg" className="h-full rounded" />
                  <h3 className="font-bold font-serif text-3xl text-center">Taller Circo</h3>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 p-4">
                <ImageProvider src="taller-navidad.jpg" className="h-full rounded" />
                  <h3 className="font-bold font-serif text-3xl text-center">Taller Cupcakes navideños</h3>
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
