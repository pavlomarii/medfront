import React, { FC } from "react";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Preferences } from "./components/preferences/Preferences";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/login/Login";
import { useToken } from "./hooks/useToken";
import { Paths } from "./utils/Paths";
import { ListPatients } from "./pages/patients/pages";
import { ListCompanies } from "./pages/companies/pages";

const App: FC = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <Routes>
        <Route path={Paths.patients.list} element={<ListPatients />} />
        <Route path={Paths.companies.list} element={<ListCompanies />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="*" element={<Navigate to="/patients" replace />} />
      </Routes>
    </div>
  );
};

export default App;
