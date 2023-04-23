import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import ForgotYourPassword from "./pages/ForgotYourPassword.jsx";
import RegisterPharmacy from "./pages/RegisterPharmacy.jsx";
import RegisterMedicines from "./pages/RegisterMedicines.jsx";
import PharmacyList from "./pages/PharmacyList.jsx";
import MedicinesList from "./pages/MedicinesList.jsx";
import Header from "./components/Header";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/esqueci-minha-senha" element={<ForgotYourPassword />} />
        <Route path="/cadastrar-nova-farmacia" element={<RegisterPharmacy />} />
        <Route
          path="/cadastrar-novo-medicamento"
          element={<RegisterMedicines />}
        />
        <Route path="/lista-de-farmacias" element={<PharmacyList />} />
        <Route path="/lista-de-medicamentos" element={<MedicinesList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
