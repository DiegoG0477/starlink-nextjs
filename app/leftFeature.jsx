import Dish from "../public/assets/dish.png";
import Image from "next/image";

export default function LeftFeature(){
    return(
        <>
        <div className="left-feature">
        <Image src={Dish} alt="" width="683px" height="350px" />
        <div className="info">
          <h1>
            STREAMING,<br />
            VIDEOLLAMADAS, <br />JUEGOS EN LÍNEA Y <br />MUCHO MÁS
          </h1>

          <div className="description-box">
            <p>
              Starlink le permite a usuarios gozar de una conexión continua, y
              de realizar actividades que históricamente no han sido posibles.
            </p>
            <p>
              El servicio de alta velocidad y baja latencia de Starlink es
              posible gracias a la constelación más grande de satélites que
              operan en una órbita baja alrededor de la Tierra.
            </p>
          </div>

          <button>OBTENER MÁS INFORMACIÓN</button>
        </div>
      </div>
        </>
    );
}