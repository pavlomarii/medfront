import axios from "axios";

import { ApiPaths } from "./ApiPaths";
import { CompanyBody, CompanyModel } from "../models";

interface IUseCompaniesApiRes {
  handleGetCompanies: () => Promise<CompanyModel[]>;
  handlePostCompany: ({ body }: { body: CompanyBody }) => Promise<CompanyModel>;
}

export const useCompaniesApi = (): IUseCompaniesApiRes => {
  const handleGetCompanies = async () => {
    const response = await axios.get(
      ApiPaths.apiPath + ApiPaths.companies.getAll
    );
    return response.data as Promise<CompanyModel[]>;
  };

  const handlePostCompany = async ({ body }: { body: CompanyBody }) => {
    const response = await axios.post(
      ApiPaths.apiPath + ApiPaths.companies.getAll,
      body
    );
    return response.data as Promise<CompanyModel>;
  };

  return {
    handleGetCompanies,
    handlePostCompany,
  };
};
