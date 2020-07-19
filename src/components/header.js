import React, { useState } from "react";
import { Link } from "gatsby";
import logoHCP from "../../static/holycupcakes.png";

const Header = ({ className, isInternal }) => {
  let [isExpanded, toggleExpansion] = useState(false);

  return (
    <div className={`${isInternal ? "relative" : "absolute"} z-30 w-full `}>
      <div className="container mx-auto flex flex-wrap md:flex-no-wrap flex-row items-start md:items-center justify-between text-indigo-700">
        <div className={`p-4 md:py-${isInternal ? 8 : 8} flex md:flex-col lg:flex-row justify-center items-center w-full md:w-auto flex-row`}>
          {!isInternal && (
            <Link to="/">
              <img className="w-24 md:w-32 lg:w-48 " src={logoHCP} alt="Logo Holycupcakes Pasteleria" />
            </Link>
          )}
          {isInternal && (
            <Link to="/">
              <img className="w-24 md:w-32 lg:w-32" src={logoHCP} alt="Logo Holycupcakes Pasteleria" />
            </Link>
          )}
          <p className="ml-3 text-primary font-serif font-bold text-lg font-thin italic leading-tight">
            <span className="text-sm">por</span> <br />
            <a
              href="https://www.instagram.com/alejandradiaz_cakes/"
              className="hover:underline"
            >
              Alejandra <br />
              Diaz
            </a>
          </p>
        </div>

        <div
          className=" w-auto flex flex-wrap flex-row justify-center md:justify-end md:items-stretch items-center p-4 md:rounded-4xl md:shadow-menu"
          
        >
          <Link
            className="text-gray-800 font-bold hover:underline hover:text-primary leading-snug text-2xl pr-4 pl-4  border-secondary"
            to="/"
          >
            Inicio
          </Link>
          <Link
            className="text-gray-800 font-bold hover:underline hover:text-primary leading-snug text-2xl pr-4 pl-4  border-secondary"
            to="/cotizaciones"
          >
            Cotizar
          </Link>
          <a
            className="text-gray-800 font-bold hover:underline hover:text-primary leading-snug text-2xl pr-4 pl-4  border-secondary"
            href="https://holycupcakes.co/youtube"
          >
            Cursos
          </a>
          <Link
            className="text-gray-800 font-bold hover:underline hover:text-primary leading-snug text-2xl pr-4 pl-4  border-secondary"
            to="/recetas"
          >
            Recetas
          </Link>
          <Link
            className="text-gray-800 font-bold hover:underline hover:text-primary leading-snug text-2xl mr-4 ml-4 "
            to="/pagos"
          >
            Pagos
          </Link>
          <Link
            className="text-gray-800 font-bold hover:underline hover:text-primary leading-snug text-2xl mr-4 ml-4 hidden"
            to="/faq"
          >
            Preguntas
          </Link>
          <Link
            className="text-gray-800 font-bold hover:underline hover:text-primary leading-snug text-2xl mr-4 ml-4 hidden"
            to="/contact"
          >
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
