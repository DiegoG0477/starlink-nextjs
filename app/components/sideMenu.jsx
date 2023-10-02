export default function SideMenu(){
    return(
        <div className="side-bar" style={{position:"absolute"}}>
            <a className="close-button" id="closeMenuBtn">
                {/* <img src="./assets/Close_Menu.svg" alt="" /> */}
            </a>

            <div className="side-links">
                <a href="" className="side-link">MAPA DE DISPONIBILIDAD</a>
                <hr />
                <a href="" className="side-link">RECURSOS</a>
                <hr />
                <a href="" className="side-link">ESPECIFICACIONES</a>
                <hr />
                <a href="" className="side-link">MX</a>
                <hr />
                <a href="" className="side-link">INICIAR SESIÓN</a>
                <hr />
            </div>
        </div>
    );
}