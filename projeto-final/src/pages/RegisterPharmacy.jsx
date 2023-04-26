import { useState } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

function RegisterPharmacy() {
  const [razaoSocial, setRazaoSocial] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [nomeFantasia, setNomeFantasia] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [complemento, setComplemento] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()
    const data = {
      razaoSocial,
      cnpj,
      nomeFantasia,
      email,
      telefone,
      celular,
      cep,
      logradouro,
      numero,
      bairro,
      cidade,
      estado,
      complemento,
      latitude,
      longitude,
    };

    await fetch("http://localhost:3001/pharmacies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 201) {
        navigate("/cadastrar-novo-medicamento");
        // window.location.href = "/cadastrar-novo-medicamento"
      }
    });
  }

  async function fetchAddress(cep) {
    if (cep.length === 8) {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (!data.erro) {
        setLogradouro(data.logradouro);
        setBairro(data.bairro);
        setCidade(data.localidade);
        setEstado(data.uf);
      }
    }
  }

  return (
    <div className="card-body border m-4 p-4">
      <h5 className="card-title text-center mb-3">Cadastro de Nova Farmácia</h5>
      <form onSubmit={handleSubmit}>
        <Input
          name="Razão Social"
          type="text"
          required={true}
          onChange={(e) => setRazaoSocial(e.target.value)}
        />
        <Input
          name="CNPJ"
          type="number"
          required={true}
          onChange={(e) => setCnpj(e.target.value)}
        />
        <Input
          name="Nome Fantasia"
          type="text"
          required={true}
          onChange={(e) => setNomeFantasia(e.target.value)}
        />
        <Input
          name="E-mail"
          type="text"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          name="Telefone"
          type="number"
          required={false}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <Input
          name="Celular"
          type="number"
          required={true}
          onChange={(e) => setCelular(e.target.value)}
        />
        <hr className="border-top border-dark-subtle" />
        <Input
          name="CEP"
          type="number"
          required={true}
          onChange={(e) => {
            setCep(e.target.value);
            fetchAddress(e.target.value);
          }}
        />
        <Input
          name="Logradouro"
          type="text"
          required={true}
          value={logradouro}
          onChange={(e) => setLogradouro(e.target.value)}
        />
        <Input
          name="Número"
          type="number"
          required={true}
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <Input
          name="Bairro"
          type="text"
          required={true}
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />
        <Input
          name="Cidade"
          type="text"
          required={true}
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
        <Input
          name="Estado"
          type="text"
          required={true}
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        />
        <Input
          name="Complemento"
          type="text"
          required={true}
          onChange={(e) => setComplemento(e.target.value)}
        />
        <Input
          name="Latitude"
          type="number"
          required={true}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <Input
          name="Longitude"
          type="number"
          required={true}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <hr className="border-top border-dark-subtle" />
        <button className="btn" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default RegisterPharmacy;
