import { useCompaniesApi } from "../hooks";
import { useMutation } from "react-query";
import { CompanyBody } from "../models";

export const useCompanyMutations = () => {
  const { handlePostCompany } = useCompaniesApi();

  const companyPostMutation =
    useMutation(({ body }: { body: CompanyBody }) =>
      handlePostCompany({ body })
    );

  return {
    companyPostMutation,
  }
};
