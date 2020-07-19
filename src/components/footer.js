import React from "react";
import { Link } from "gatsby";
import { FaInstagram, FaFacebookSquare, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  
  return (
    <div className="">
      <div className="relative z-10 w-full px-8 py-4 text-secondary bg-pink-100 flex flex-col md:flex-row justify-between items-start md:items-center shadow-md">
        <div className="flex-initial text-lg font-semibold font-serif italic">Holy Cupcakes Pasteleria ©</div>
        <div>
          <ul className="flex flex-row text-lg -mx-3 font-medium items-center">
          <li className="mx-3">Siguenos:</li>
            <li className="mx-3 text-2xl"><a href="https://www.instagram.com/holycupcakespasteleria/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            <li className="mx-3 text-2xl"><a href="https://www.facebook.com/Holycupcakespasteleria/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a></li>
            <li className="mx-3 text-2xl"><a href="https://holycupcakes.co/youtube" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row w-full px-8 py-2 text-white text-xs font-light bg-primary flex-wrap justify-between items-start md:items-center">
        <div className="w-full lg:w-1/2 flex flex-col md:flex-row items-center">
          <strong className="font-bold">WhatsApp: </strong>
          <a className="flex items-center ml-3" href="https://api.whatsapp.com/send?phone=573016989495&text=&source=&data=#"><FaWhatsapp /> 301 698 9495</a>
          <strong className="ml-3 font-bold"> Telefono: </strong>
          <a href="tel:301 698 9495"> 301 698 9495</a>
          <strong className="ml-3 font-bold"> Email: </strong>
          <a href="mailto:gerencia@holycupcakes.co"> gerencia@holycupcakes.co </a>
        </div>
        <div className="flex flex-col md:flex-row items-center text-center md:w-auto w-full">
          <Link to="/" className="hover:underline ml-3 p-2">
            Inicio
          </Link>
          <Link to="/cotizaciones" className="hover:underline ml-3 p-2 w-full md:w-auto">
            Cotizaciones
          </Link>
          <Link to="/recetas" className="hover:underline ml-3 p-2 w-full md:w-auto">
            Recetas
          </Link>
          <Link to="/cursos" className="hover:underline ml-3 p-2 w-full md:w-auto">
            Cursos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

