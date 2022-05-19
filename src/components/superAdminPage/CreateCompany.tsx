import { useFormik } from "formik";
import { CompanyValidationSchema as validationSchema } from "../../validation_schemes/CompanyValidationSchema";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useCompanyMutations } from "../../api/mutations";
import { CompanyBody } from "../../api/models";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";

export const CreateCompany = () => {
  const { companyPostMutation } = useCompanyMutations();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const formik = useFormik({
    initialValues: { name: "" },
    validationSchema,
    onSubmit: (values: CompanyBody) => {
      companyPostMutation.mutate(
        { body: values },
        {
          onSuccess: () => {
            navigate("/super_admin_page");
            queryClient.invalidateQueries("companies");
          },
        }
      );
    },
  });

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={0}
      >
        <Typography variant="h4" mb={4}>
          Create New Company
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Save
        </Button>
      </Stack>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        required
        value={formik.values.name}
        onChange={formik.handleChange}
        error={!!formik.errors.name}
        helperText={formik.errors.name}
      />
    </>
  );
};
