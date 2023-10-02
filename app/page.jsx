'use client'

import Header from "./components/header";
import MainImageSection from "./components/mainImageSection";
import LeftFeature from "./components/leftFeature";
import TwoBtnFeature from "./components/twoBtnFeature";
import RightFeature from "./components/rightFeature";
import "./styles/styles.css";
import Feedback from "./components/feedback";
import Dish from "../public/assets/dish.png";
import Thing from "../public/assets/thing.png";
import Mountains from "../public/assets/mountain.png"
import TravelInfo from "./components/travelInfo";
import Smartphone from "../public/assets/smartphone.png";
import Night from "../public/assets/tree.png";
import Rocket from "../public/assets/rocket.png"
import StoreContainer from "./components/storeContainer";
import Footer from "./components/footer";

export default function LandingPage() {
  return (
    <>
      <div className="landpage">
        <Header />
        <MainImageSection />

        <LeftFeature
          title="STREAMING,
          VIDEOLLAMADAS,
          JUEGOS EN LÍNEA Y
          MUCHO MÁS"
          description="
          Starlink le permite a usuarios gozar de una conexión continua, y de realizar actividades que históricamente no han sido posibles.
          El servicio de alta velocidad y baja latencia de Starlink es posible gracias a la constelación más grande de satélites que operan en una órbita baja alrededor de la Tierra."
          buttonText="OBTENER MÁS INFORMACIÓN"
          image={Dish}
        />

        <RightFeature 
        title="AUTOINSTALACIÓN
        SENCILLA" 
        description="
        Su kit de Starlink llega con todo lo necesario para obtener conectividad en cuestión de minutos, incluyendo la antena Starlink, router Wi-Fi, cables y base.    
        Haga clic aquí para ver las especificaciones técnicas de Starlink."
        buttonText="VER INSTALACIÓN"
        image={Thing}/>

        <LeftFeature
        title="SIN CONTRATOS,
        PRUEBA DURANTE
        30 DÍAS"
        description="Los contratos a largo plazo impiden a ambas partes hacer cambios razonables en caso de ser necesarios.
        Starlink plantea un trato beneficioso para ambas partes. Starlink puede ajustar las condiciones y los precios del servicio según sea necesario, y los clientes pueden cancelar en cualquier momento y por cualquier motivo.    
        Pruebe cualquier servicio de Starlink durante 30 días y, si no está satisfecho, devuelva el equipo y obtenga un reembolso completo.
        "
        buttonText="CONSULTAR DISPONIBILIDAD"
        image={Mountains}/>

        <TravelInfo />

        <TwoBtnFeature
        title="ADMINISTRE SU
        STARLINK DESDE
        LA APP "
        description="
        La app de Starlink le ayuda a personalizar sus ajustes, recibir actualizaciones, acceder a la sección de Asistencia, y ver datos de rendimiento, velocidad de descarga, latencia y tiempo de actividad. 
        Descarge la app para determinar la mejor ubicación de configuración previo a la instalación. Starlink necesita una vista clara del cielo para poder establecer conexión con los satélites.        "
        buttonTextOne="DESCARGAR PARA IOS"
        buttonTextTwo="DESCARGAR PARA ANDROID"
        image={Smartphone}/>


        <Feedback />

        <LeftFeature 
        title=" LÍDER EN
        SOSTENIBILIDAD
        ESPACIAL"
        description="
        Starlink no solo lidera la industria en cuanto a innovaciones para reducir el brillo de los satélites, también en la mitigación de escombros orbitales, cumpliendo o superando todos los estándares reglamentarios e industriales
        Descarge la app para determinar la mejor ubicación de configuración previo a la instalación. Starlink necesita una vista clara del cielo para poder establecer conexión con los satélites."     
        buttonText="OBETENER MÁS INFORMACIÓN"
        image={Night}
        />

        <RightFeature 
        title="DISEÑADO POR
        SPACEX"
        description="
        SpaceX emplea su amplia experiencia en la construcción de cohetes y naves espaciales para implementar el sistema de Internet de banda ancha más avanzado del mundo. SpaceX, como proveedor líder mundial de servicios de lanzamiento, y el único proveedor con un cohete reutilizable de clase orbital, tiene gran experiencia tanto en naves espaciales como en operaciones en órbita."
        buttonText="OBTENER MÁS INFORMACIÓN"
        image={Rocket}
        />

        <StoreContainer />
        <Footer />
      </div>
    </>
  );
}