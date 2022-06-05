import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { EditPatient, ShowPatient, ListPatients, CreatePatient } from "./pages";
import { Paths } from "../../utils/Paths";

export const Patients: FC = () => {
  return (
    <Routes>
      <Route path={Paths.patients.edit} element={<EditPatient />} />
      <Route path={Paths.patients.show} element={<ShowPatient />} />
      <Route path={Paths.patients.list} element={<ListPatients />} />
      <Route path={Paths.patients.create} element={<CreatePatient />} />
    </Routes>
  );
};
