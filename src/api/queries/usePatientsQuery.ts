import { useQuery, UseQueryResult } from "react-query";

import { usePatientsApi } from "../hooks";
import { PatientModel } from "../models";

interface IUsePatientsQueryRes {
  useGetPatientsQuery: () => UseQueryResult<PatientModel[]>;
}

export const usePatientsQuery = (): IUsePatientsQueryRes => {
  const { handleGetPatients } = usePatientsApi();

  const useGetPatientsQuery = () => {
    return useQuery("companies", () => handleGetPatients());
  };

  return {
    useGetPatientsQuery,
  };
};
