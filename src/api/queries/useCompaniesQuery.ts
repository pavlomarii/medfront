import { useQuery, UseQueryResult } from "react-query";

import { useCompaniesApi } from "../hooks";
import { CompanyModel, CompanySlimModel } from "../models";

interface IUseCompaniesQueryRes {
  useGetCompaniesQuery: () => UseQueryResult<CompanySlimModel[]>;
  useGetCompanyQuery: ({
    id,
  }: {
    id: string | number;
  }) => UseQueryResult<CompanyModel>;
}

export const useCompaniesQuery = (): IUseCompaniesQueryRes => {
  const { handleGetCompanies, handleGetCompany } = useCompaniesApi();

  const useGetCompaniesQuery = () => {
    return useQuery("companies", () => handleGetCompanies());
  };

  const useGetCompanyQuery = ({ id }: { id: string | number }) => {
    return useQuery(["company", `${id}`], () => handleGetCompany({ id }));
  };

  return {
    useGetCompaniesQuery,
    useGetCompanyQuery,
  };
};
