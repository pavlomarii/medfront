import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { ListCompanies, CreateCompany } from "./pages";
import { Paths } from "../../utils/Paths";

export const Companies: FC = () => {
  return (
    <Routes>
      {/*<Route path={Paths.companies.edit} element={<EditCompany />} />*/}
      {/*<Route path={Paths.companies.show} element={<ShowCompany />} />*/}
      <Route path={Paths.companies.list} element={<ListCompanies />} />
      <Route path={Paths.companies.create} element={<CreateCompany />} />
    </Routes>
  );
};
