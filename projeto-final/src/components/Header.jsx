import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar">
      <div className="container-fluid">
        <img
          src="./public/logo.png"
          className="img-responsive mx-2"
          alt="Logo Nome do APP"
        />
        <Link className="navbar-brand text-white" to="/">
          LagesCenterLab
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-decoration-none text-white"
                aria-current="page"
                to="/cadastrar-nova-farmacia"
              >
                Cadastro de Farmácia
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-decoration-none text-white"
                aria-current="page"
                to="/cadastrar-novo-medicamento"
              >
                Cadastro de Medicamento
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-decoration-none text-white"
                aria-current="page"
                to="/lista-de-farmacias"
              >
                Lista de Farmácias
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-decoration-none text-white"
                aria-current="page"
                to="/lista-de-medicamentos"
              >
                Lista de Medicamentos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
