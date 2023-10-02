import menuHamburguer from "../../public/assets/Menu_Hamburger.svg";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div class="nav-menu">
        <div class="nav-bar">
          <p class="logo">STARLINK</p>
          <div class="nav-links">
            {/* <a href="#" class="underlined-link">
              RESIDENCIAL
            </a> */}

            <Link to="/" href="#" className="underlined-link">RESIDENCIAL</Link>
            <Link to="/" href="#">EMPRESAS</Link>
            <a href="#">ITINERANTE</a>
            <a href="#">MOVILIDAD</a>
            <a href="#">MARÍTIMO</a>
            <a href="#">AVIACIÓN</a>
            <a href="#">IOT</a>
            <a href="#">TECNOLOGÍA</a>
            <a href="#">ASISTENCIA</a>
            <a class="hamburguer" id="sideMenuListener">
              <Image src={menuHamburguer} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
