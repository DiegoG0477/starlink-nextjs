import Thing from "../public/assets/thing.png"
import Image from "next/image";

export default function RightFeature() {
  return (
    <>
      <div class="right-feature">
        <div class="info">
          <h1>
            AUTOINSTALACIÓN
            <br />
            SENCILLA
          </h1>

          <div class="description-box">
            <p>
              Su kit de Starlink llega con todo lo necesario para obtener
              conectividad en cuestión de minutos, incluyendo la antena
              Starlink, router Wi-Fi, cables y base.
            </p>
            <p>
              Haga clic <a href="#">aquí</a> para ver las especificaciones
              técnicas de Starlink.
            </p>
          </div>

          <button>VER INSTALACIÓN</button>
        </div>
        <Image src={Thing} alt="" width="683px" height="350px" />
      </div>
    </>
  );
}
