import Swal from "sweetalert2";

export default function Footer() {
  function showPrivacyPreferences() {
    Swal.fire({
      background: "#000",
      html:
        '<div class="modal-content"><div class="modal-body">' +
        '<p class="logo-modal">STARLINK</p>' +
        "<h4>Centro de preferencia de la privacidad</h4>" +
        "<p>Cuando visita cualquier sitio web, el mismo podría obtener o guardar información en su navegador, generalmente mediante el uso de cookies. Esta información puede ser acerca de usted, sus preferencias o su dispositivo, y se usa principalmente para que el sitio funcione según lo esperado. Por lo general, la información no lo identifica directamente, pero puede proporcionarle una experiencia web más personalizada. Ya que respetamos su derecho a la privacidad, usted puede escoger no permitirnos usar ciertas cookies. Haga clic en los encabezados de cada categoría para saber más y cambiar nuestras configuraciones predeterminadas. Sin embargo, el bloqueo de algunos tipos de cookies puede afectar su experiencia en el sitio y los servicios que podemos ofrecer.</p>" +
        "</div>" +
        "</div>",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText: "Rechazarlas todas",
      cancelButtonColor: "#262626",
      confirmButtonColor: "#262626",
      confirmButtonText: "Confirmar mis preferencias",
      buttonsStyling: true,
    });
  }

  return (
    <footer style={{ backgroundColor: "black" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div class="line"></div>
      </div>

      <div class="register">
        <p>¿Interesado en estar al día con Starlink?</p>
      </div>

      <div class="register-form">
        <div class="location-form">
          <input type="text" name="" placeholder="E-MAIL" id="" />
          <button>INSCRIBIRSE</button>
        </div>
      </div>

      <div class="register-form">
        <div class="location-form">
          <p class="policy-text">
            Al hacer clic en Registrarse, acepta nuestra
            <a href="https://www.starlink.com/legal" class="bold-white-link">
              Política de Privacidad
            </a>
          </p>
        </div>
      </div>

      <div class="footer-links-box">
        <div class="footer-links">
          <div class="footer-left">
            <div class="footer-side-links">
              <p class="policy-text">Starlink © 2023</p>
            </div>
          </div>

          <div class="about-links">
            <p>
              <a href="https://www.spacex.com/careers">
                Carreras Profesionales&nbsp;&nbsp;
              </a>
              |
              <a href="https://starlink.com/satellite-operators">
                &nbsp;&nbsp;Operadores de satélites&nbsp;&nbsp;
              </a>
              |
              <a href="https://starlink.com/legal">
                &nbsp;&nbsp;Privacidad y Legal&nbsp;&nbsp;
              </a>
              |
              <a
                id="privacyPreferences"
                href="#"
                onClick={showPrivacyPreferences}
              >
                &nbsp;&nbsp;Preferencias de privacidad
              </a>
            </p>
          </div>

          <div class="footer-side-links">
            <p class="policy-text">
              Starlink es una división de SpaceX. Visítenos en
              <a href="https://www.spacex.com/" class="bold-white-text">
                spacex.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
