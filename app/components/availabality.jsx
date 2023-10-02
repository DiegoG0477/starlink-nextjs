'use client'
import React, { useState } from "react";
import { Loader } from '@googlemaps/js-api-loader';
import google_maps_apiKey from "../../public/PATH_VARIABLES"

export default function AvailabilityBox() {
  const [isLoading, setIsLoading] = useState(false);
  const [cityStatusText, setCityStatusText] = useState("");
  const [cityStatusColor, setCityStatusColor] = useState("");
  let map, infoWindow;

  const startLoadingAnimation = () => {
    setIsLoading(true);
    setTimeout(() => {
      stopLoadingAnimation();
    }, 1500);
  };

  const stopLoadingAnimation = () => {
    let city = cityInput.value;

    setIsLoading(false);

    if (city === "") {
      setCityStatusText("INCLUYA UNA DIRECCIÓN O UN CÓDIGO PLUS");
      setCityStatusColor("red");
    } else {
      setCityStatusText(`LA CIUDAD DE ${city.toUpperCase()} ESTÁ DISPONIBLE`);
      setCityStatusColor("#01cd18");
    }
  };

  const showMap = () => {
    const loader = new Loader({
      apiKey: nextConfig.google_maps_apiKey,
    });
  
    loader
      .importLibrary('maps')
      .then(({ Map }) => {
        new Map(document.getElementById("map"), {
          center: { lat: 33.9207, lng: -118.3278 },
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.HYBRID,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  

  return (
    <>
      <div className="availability-box">
        <div className="son">
          <p
            style={{ color: cityStatusColor }}
            className="location-invalid-text"
          >
            {cityStatusText}
          </p>
          <div className="location-form">
            <input
              type="text"
              name=""
              placeholder="DIRECCIÓN DE SERVICIO"
              id="cityInput"
            />
            <button
              id="consultButton"
              className="consult-button"
              onClick={startLoadingAnimation}
              disabled={isLoading}
            >
              {isLoading ? (
                <img
                  src="assets/loading.png"
                  alt="Loading"
                  className="button-spinner"
                />
              ) : (
                "CONSULTAR DISPONIBILIDAD"
              )}
            </button>
          </div>

          <div className="terms">
            <a id="mapListener" onClick={showMap}>
              <p className="availability-text">VER MAPA DE DISPONIBILIDAD </p>
            </a>
            <p className="policy-text">
              Al hacer clic en CONSULTAR DISPONIBILIDAD, acepta nuestra
              <a href="https://www.starlink.com/legal">
                Política de privacidad
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div class="map-container" id="mapContainer">
        <div id="map"></div>
      </div>
    </>
  );
}
