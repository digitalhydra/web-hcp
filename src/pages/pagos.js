import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PageBanner from "../components/page-banner";
import { FaWhatsapp } from "react-icons/fa";
import ImageProvider from "../components/fluid-image-provider";

const Recetas = () => {
  return (
    <Layout headerClass="bg-white relative" isInternal title="Metodos de Pagos">
      <div className="min-h-internal">
        <PageBanner title="Metodos de Pagos" />
        <div className="container mx-auto">
          <div className=" mt-10 md:mt-20 content-between">
            <div id="pagos" className="mb-8 text-2xl">
              <h1 className="text-center text-4xl mb-3 font-bold text-primary">
                Importante
              </h1>
              <hr />
              <p className="">
                Estos son nuestros metodos de pagos, atraves de los cuales
                podras hacer abonos o pagos completos de los productos que
                deseas.
              </p>
              <p>
                Recuerda que debes enviar comprobante o captura de pantalla de
                la transaccion para agilizar el proceso de identificacion de tu
                pedido a nuestro numero de al Whatsapp{" "}
                <a
                  className="inline-block bg-pink-400 text-white p-2 py-1 rounded"
                  href="https://api.whatsapp.com/send?phone=573016989495&text=Deseo cotizar X&source=cotizaciones"
                >
                  <FaWhatsapp className="float-left mt-1" /> 301 6989495
                </a>
                .
              </p>
            </div>
            <div id="metodos" className="text-2xl mb-8">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                  <div className="h-32">
                    <ImageProvider
                      src="logo-bancolombia.png"
                      alt="Pagar en Bancolombia"
                      className="h-auto "
                    />
                  </div>
                  <h3 className="font-bold font-serif text-3xl text-center my-4">
                    Bancolombia
                  </h3>
                  <p>Cuenta de Ahorros</p>
                  <p>Titular: Alejandra Diaz Rey</p>
                  <p>
                    Numero: <strong>30337896649</strong>
                  </p>
                  <p className="my-4 text-xl text-primary">
                    Usa el codigo QR para hacer pagos rapidos a nuestra cuenta
                    de Bancolombia.
                  </p>
                  <ImageProvider
                    alt="30337896649"
                    src="qr-bancolombia.jpeg"
                    className="h-auto"
                  />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                  <div className="h-32">
                    <ImageProvider
                      src="logo-davivienda.png"
                      className="h-auto "
                    />
                  </div>
                  <h3 className="font-bold font-serif text-3xl text-center my-4">
                    Davivienda
                  </h3>
                  <p>Cuenta de Ahorros</p>
                  <p>Titular: Alejandra Diaz Rey</p>
                  <p>
                    Numero: <strong>046470181424</strong>
                  </p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                  <div className="h-32">
                    <ImageProvider src="logo-bitcoin.png" className="h-auto " />
                  </div>
                  <h3 className="font-bold font-serif text-3xl text-center italic my-4">
                    Crypto
                  </h3>
                  <p>Pronto...</p>
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
