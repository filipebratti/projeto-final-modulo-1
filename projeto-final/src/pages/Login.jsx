import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/cadastrar-nova-farmacia");
  };

  return (
    <div className="card-body position-absolute top-50 start-50 translate-middle border p-5">
      <h5 className="card-title text-center mb-3">Login</h5>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <span id="email" className="input-group-text">
            E-mail
          </span>
          <input
            className="form-control"
            type="email"
            placeholder="exemplo@email.com"
            aria-label="Digite aqui o seu email"
            aria-describedby="email"
            required
          />
        </div>
        <div className="input-group mb-3">
          <span id="senha" className="input-group-text">
            Senha
          </span>
          <input
            className="form-control"
            type="password"
            placeholder="Digite aqui a sua senha"
            aria-label="Digite aqui a sua senha"
            aria-describedby="senha"
            minLength={8}
            required
          />
        </div>
        <button className="btn" type="submit">
          Entrar
        </button>
        <Link
          to="/esqueci-minha-senha"
          className="btn btn-link text-decoration-none"
        >
          Esqueci a minha senha
        </Link>
      </form>
    </div>
  );
}

export default Login;
