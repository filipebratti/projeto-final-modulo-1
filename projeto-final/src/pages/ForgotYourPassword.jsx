import { useNavigate } from "react-router-dom";

function ForgotYourPassword() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <div className="card-body position-absolute top-50 start-50 translate-middle border p-5">
      <h5 className="card-title text-center mb-3">Login</h5>
      <form onSubmit={handleSubmit}>
        <p className="text-center"></p>
        <div className="input-group">
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
        <div className="form-text mb-3">
          Digite o seu e-mail de recuperação de senha.
        </div>
        <button className="btn" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ForgotYourPassword;
