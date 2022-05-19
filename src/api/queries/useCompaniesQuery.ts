import { useQuery, UseQueryResult } from "react-query";

import { useCompaniesApi } from "../hooks";
import { CompanyModel } from "../models";

interface IUseCompaniesQueryRes {
  useGetCompaniesQuery: () => UseQueryResult<CompanyModel[]>;
}

export const useCompaniesQuery = (): IUseCompaniesQueryRes => {
  const { handleGetCompanies } = useCompaniesApi();

  const useGetCompaniesQuery = () => {
    return useQuery("companies", () => handleGetCompanies());
  };

  return {
    useGetCompaniesQuery,
  };
};
