import React, { FC } from "react";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Preferences } from "./components/preferences/Preferences";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/login/Login";
import { useToken } from "./hooks/useToken";
import { SuperAdminPage } from "./components/superAdminPage/SuperAdminPage";
import { CreateCompany } from "./components/superAdminPage/CreateCompany";

const App: FC = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/super_admin_page" element={<SuperAdminPage />} />
          <Route path="/super_admin_page/create_company" element={<CreateCompany />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
