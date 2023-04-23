import { useEffect, useState } from "react";

function PharmacyList() {
  const [pharmacies, setPharmacies] = useState([]);
  const [pharmacy, setPharmacy] = useState({});

  const fetchPharmacies = async () => {
    const response = await fetch("http://localhost:3001/pharmacies");

    if (response.status === 200) {
      const data = await response.json();
      setPharmacies(data);
    }
  };

  useEffect(() => {
    fetchPharmacies();
  }, []);

  const openModal = (id) => {
    const data = pharmacies.find((pharmacy) => pharmacy.id === id);
    setPharmacy(data);
  };

  return (
    <>
      <div className="card-body position-absolute top-50 start-50 translate-middle border p-5">
        <h5 className="card-title text-center mb-3">
          Lista de Farmácias Cadastradas
        </h5>
        <ul className="list-group">
          {pharmacies.map((pharmacy) => (
            <li className="list-group-item" key={pharmacy.id}>
              {pharmacy.id}. {pharmacy.nomeFantasia}{" "}
              <a
                className="text-decoration-none"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => openModal(pharmacy.id)}
              >
                Mais informações
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="modal fade" id="exampleModal">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {pharmacy.nomeFantasia}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="card-text">Razão Social: {pharmacy.razaoSocial}</p>
              <p className="card-text">CNPJ: {pharmacy.cnpj}</p>
              <p className="card-text">E-mail: {pharmacy.email}</p>
              <p className="card-text">Telefone: {pharmacy.telefone}</p>
              <p className="card-text">Celular: {pharmacy.celular}</p>
              <p className="card-text">CEP: {pharmacy.cep}</p>
              <p className="card-text">Logradouro: {pharmacy.logradouro}</p>
              <p className="card-text">Número: {pharmacy.numero}</p>
              <p className="card-text">Bairro: {pharmacy.bairro}</p>
              <p className="card-text">Cidade: {pharmacy.cidade}</p>
              <p className="card-text">Estado: {pharmacy.estado}</p>
              <p className="card-text">Complemento: {pharmacy.complemento}</p>
              <p className="card-text">Latitude: {pharmacy.latitude}</p>
              <p className="card-text">Longitude: {pharmacy.longitude}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PharmacyList;
