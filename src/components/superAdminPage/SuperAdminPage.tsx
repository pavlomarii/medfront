import { useCompaniesQuery } from "../../api/queries";
import { CompaniesTable } from "./CompaniesTable";
import { Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const SuperAdminPage = () => {
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
            navigate("/super_admin_page/create_company");
          }}
        >
          Create New Company
        </Button>
      </Stack>
      <CompaniesTable companies={data} />
    </>
  );
};
