import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

function RegisterMedicines() {
  const navigate = useNavigate();
  const [medicamento, setMedicamento] = useState("");
  const [laboratorio, setLaboratorio] = useState("");
  const [dosagem, setDosagem] = useState("");
  const [tipo, setTipo] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");

  async function handleSubmit() {
    const data = {
      medicamento,
      laboratorio,
      dosagem,
      tipo,
      preco,
      descricao,
    };

    await fetch("http://localhost:3001/medicines", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 201) {
        navigate("/lista-de-farmacias");
      }
    });
  }

  return (
    <div className="card-body border m-4 p-4">
      <h5 className="card-title text-center mb-3">
        Cadastrar Novo Medicamento
      </h5>
      <form onSubmit={handleSubmit}>
        <Input
          name="Medicamento"
          type="text"
          required={true}
          onChange={(e) => setMedicamento(e.target.value)}
        />
        <Input
          name="Laboratório"
          type="text"
          required={true}
          onChange={(e) => setLaboratorio(e.target.value)}
        />
        <Input
          name="Dosagem"
          type="text"
          required={true}
          onChange={(e) => setDosagem(e.target.value)}
        />
        <Input
          name="Tipo"
          type="text"
          required={true}
          onChange={(e) => setTipo(e.target.value)}
        />
        <Input
          name="Preço Unitário"
          type="text"
          required={true}
          onChange={(e) => setPreco(e.target.value)}
        />
        <hr className="border-top border-dark-subtle" />
        <div className="input mb-3">
          <label className="form-label">Descrição</label>
          <textarea
            className="form-control"
            type="text"
            rows="3"
            required
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <hr className="border-top border-dark-subtle" />
        <button className="btn" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default RegisterMedicines;
