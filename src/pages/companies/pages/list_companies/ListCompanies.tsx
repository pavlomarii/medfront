import { FC } from "react";
import { useCompaniesQuery } from "../../../../api/queries";
import { useNavigate } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import { CompaniesTable } from "./CompaniesTable";

export const ListCompanies: FC = () => {
  const { useGetCompaniesQuery } = useCompaniesQuery();
  const { data } = useGetCompaniesQuery();

  const navigate = useNavigate();

  if (!data) return null;

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={0}
      >
        <Typography variant="h4" mb={4}>
          Companies
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/companies/new");
          }}
        >
          Create New Company
        </Button>
      </Stack>
      <CompaniesTable companies={data} />
    </>
  );
};
