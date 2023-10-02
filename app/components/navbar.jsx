import { useState } from 'react'; // Añadimos useState
import menuHamburguer from "../../public/assets/Menu_Hamburger.svg";
import Image from "next/image";
import Link from "next/link";
import SideMenu from "./sideMenu";

export default function Navbar() {
  const [isSideMenuVisible, setSideMenuVisible] = useState(false); // Estado para controlar la visibilidad del menú lateral

  const toggleSideMenu = () => {
    setSideMenuVisible(!isSideMenuVisible);
  };

  return (
    <>
      <div className="nav-menu">
        <div className="nav-bar">
          <p className="logo">STARLINK</p>
          <div className="nav-links">
            <Link href="/asistencia" className="underlined-link">RESIDENCIAL</Link>
            <Link href="/asistencia">EMPRESAS</Link>
            <Link href="/asistencia">ITINERANTE</Link>
            <Link href="/asistencia">MOVILIDAD</Link>
            <Link href="/asistencia">MARÍTIMO</Link>
            <Link href="/asistencia">AVIACIÓN</Link>
            <Link href="/asistencia">IOT</Link>
            <Link href="/asistencia">TECNOLOGÍA</Link>
            <Link href="/asistencia">ASISTENCIA</Link>
            <a href="#" className="hamburguer" onClick={toggleSideMenu}>
              <Image src={menuHamburguer} alt="" />
            </a>
          </div>
        </div>
      </div>
      {isSideMenuVisible && <SideMenu />} {/* Renderiza el SideMenu si isSideMenuVisible es verdadero */}
    </>
  );
}
