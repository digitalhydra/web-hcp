import React from "react";
import { Link } from "gatsby";
import { FaInstagram, FaFacebookSquare, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  
  return (
    <div>
      <div className="relative z-10 w-full px-8 py-4 text-secondary bg-pink-200 flex flex-col md:flex-row justify-between items-start md:items-center shadow-md">
        <div className="flex-initial text-lg font-semibold">Holy Cupcakes Pasteleria ©</div>
        <div>
          <ul className="flex flex-col md:flex-row text-sm -mx-3 font-medium items-center">
          <li className="mx-3">Siguenos:</li>
            <li className="mx-3"><a href="https://www.instagram.com/holycupcakespasteleria/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            <li className="mx-3"><a href="https://www.facebook.com/Holycupcakespasteleria/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a></li>
          </ul>
        </div>
      </div>

      <div className="w-full px-8 py-2 text-white text-xs font-light bg-primary flex flex-col sm:flex-row justify-between items-start md:items-center">
        <div className="w-full md:w-1/2 flex items-center">
          <strong className="font-bold">WhatsApp: </strong>
          <a className="flex items-center ml-3" href="https://api.whatsapp.com/send?phone=573016989495&text=&source=&data=#"><FaWhatsapp /> 301 698 9495</a>
          <strong className="ml-3 font-bold"> Telefono: </strong>
          <a href="tel:301 698 9495"> 301 698 9495</a>
          <strong className="ml-3 font-bold"> Email: </strong>
          <a href="mailto:gerencia@holycupcakes.co"> gerencia@holycupcakes.co </a>
        </div>
        <div>
          <Link to="/" className="hover:underline ml-3">
            Inicio
          </Link>
          <Link to="/recetas" className="hover:underline ml-3">
            Recetas
          </Link>
          <Link to="/recetas" className="hover:underline ml-3">
            Recetas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

