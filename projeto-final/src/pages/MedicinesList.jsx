import { useEffect, useState } from "react";

function MedicinesList() {
  const [medicines, setMedicines] = useState([]);
  const [medicine, setMedicine] = useState({});

  const fetchmedicines = async () => {
    const response = await fetch("http://localhost:3001/medicines");

    if (response.status === 200) {
      const data = await response.json();
      setMedicines(data);
    }
  };

  useEffect(() => {
    fetchmedicines();
  }, []);

  const openModal = (id) => {
    const data = medicines.find((medicine) => medicine.id === id);
    setMedicine(data);
  };

  return (
    <>
      <div className="card-body position-absolute top-50 start-50 translate-middle border p-5">
        <h5 className="card-title text-center mb-3">
          Lista de Medicamentos Cadastradas
        </h5>
        <ul className="list-group">
          {medicines.map((medicine) => (
            <li className="list-group-item" key={medicine.id}>
              {medicine.id}. {medicine.medicamento}{" "}
              <a
                className="text-decoration-none"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => openModal(medicine.id)}
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
                {medicine.medicamento}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="card-text">Laboratório: {medicine.laboratorio}</p>
              <p className="card-text">Dosagem: {medicine.dosagem}</p>
              <p className="card-text">Tipo: {medicine.tipo}</p>
              <p className="card-text">Preço: {medicine.preco}</p>
              <hr className="border-top border-dark-subtle" />
              <p className="card-text">Descrição: {medicine.descricao}</p>
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

export default MedicinesList;
