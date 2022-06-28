import axios from "axios";

import { ApiPaths } from "./ApiPaths";
import { CompanyBody, CompanyModel, CompanySlimModel } from "../models";

interface IUseCompaniesApiRes {
  handleGetCompanies: () => Promise<CompanySlimModel[]>;
  handleGetCompany: ({ id }: { id: number | string }) => Promise<CompanyModel>;
  handlePostCompany: ({ body }: { body: CompanyBody }) => Promise<CompanyModel>;
}

export const useCompaniesApi = (): IUseCompaniesApiRes => {
  const handleGetCompanies = async () => {
    const response = await axios.get(
      ApiPaths.apiPath + ApiPaths.companies.getAll,
      {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("token")?.slice(1, -1),
        },
      }
    );
    return response.data as Promise<CompanySlimModel[]>;
  };

  const handleGetCompany = async ({ id }: { id: number | string }) => {
    const response = await axios.get(
      ApiPaths.apiPath + ApiPaths.companies.getOne(id),
      {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("token")?.slice(1, -1),
        },
      }
    );
    return response.data as Promise<CompanyModel>;
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
    handleGetCompany,
    handlePostCompany,
  };
};
