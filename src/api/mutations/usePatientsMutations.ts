import { usePatientsApi } from "../hooks";
import { useMutation } from "react-query";
import { BatchCreateModel } from "../models";

export const usePatientsMutations = () => {
  const { handleBatchCreatePatients } = usePatientsApi();

  const patientsBatchUpdateMutation = useMutation(
    ({ body }: { body: BatchCreateModel }) =>
      handleBatchCreatePatients({ body })
  );

  return {
    patientsBatchUpdateMutation,
  };
};
