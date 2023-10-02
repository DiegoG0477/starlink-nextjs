export default function AvailabilityBox() {
  return (
    <>
      <div class="availability-box">
        <div class="son">
          <p id="cityStatus" class="location-invalid-text"></p>
          <div class="location-form">
            <input
              type="text"
              name=""
              placeholder="DIRECCIÓN DE SERVICIO"
              id="cityInput"
            />
            <button id="consultButton" class="consult-button">
              CONSULTAR DISPONIBILIDAD
            </button>
          </div>

          <div class="terms">
            <a id="mapListener">
              <p class="availability-text">VER MAPA DE DISPONIBILIDAD </p>
            </a>
            <p class="policy-text">
              Al hacer clic en CONSULTAR DISPONIBILIDAD, acepta nuestra
              <a href="https://www.starlink.com/legal">
                Política de privacidad
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
