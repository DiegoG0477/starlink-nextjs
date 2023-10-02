export default function Footer(){
    return(
        <footer style={{backgroundColor: "black"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
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
              <a href="https://www.starlink.com/legal" class="bold-white-link"
                >Política de Privacidad</a
              >
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
                <a href="https://www.spacex.com/careers"
                  >Carreras Profesionales&nbsp;&nbsp;</a
                >
                |
                <a href="https://starlink.com/satellite-operators"
                  >&nbsp;&nbsp;Operadores de satélites&nbsp;&nbsp;</a
                >
                |
                <a href="https://starlink.com/legal"
                  >&nbsp;&nbsp;Privacidad y Legal&nbsp;&nbsp;</a
                >
                |
                <a id="privacyPreferences" href="#"
                  >&nbsp;&nbsp;Preferencias de privacidad</a
                >
              </p>
            </div>

            <div class="footer-side-links">
              <p class="policy-text">
                Starlink es una división de SpaceX. Visítenos en
                <a href="https://www.spacex.com/" class="bold-white-text"
                  >spacex.com</a
                >
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
}