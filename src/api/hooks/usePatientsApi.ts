import axios from "axios";

import { ApiPaths } from "./ApiPaths";
import { BatchCreateModel, PatientModel } from "../models";

interface IUsePatientsApiRes {
  handleGetPatients: () => Promise<PatientModel[]>;
  handleBatchCreatePatients: ({
    body,
  }: {
    body: BatchCreateModel;
  }) => Promise<Record<string, never>>;
}

export const usePatientsApi = (): IUsePatientsApiRes => {
  const handleGetPatients = async () => {
    const response = await axios.get(
      ApiPaths.apiPath + ApiPaths.patients.getAll,
      {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("token")?.slice(1, -1),
        },
      }
    );
    return response.data as Promise<PatientModel[]>;
  };

  const handleBatchCreatePatients = async ({
    body,
  }: {
    body: BatchCreateModel;
  }) => {
    const response = await axios.post(
      ApiPaths.apiPath + ApiPaths.patients.batchCreate,
      body,
      {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("token")?.slice(1, -1),
        },
      }
    );
    return response.data as Promise<Record<string, never>>;
  };

  return {
    handleGetPatients,
    handleBatchCreatePatients,
  };
};
