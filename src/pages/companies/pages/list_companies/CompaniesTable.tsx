import { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CompanySlimModel } from "../../../../api/models";

interface ICompaniesTable {
  companies: CompanySlimModel[];
}

export const CompaniesTable: FC<ICompaniesTable> = ({ companies }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Website</TableCell>
            <TableCell align="right">Amount Doctors</TableCell>
            <TableCell align="right">Amount Patients</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companies.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.website}</TableCell>
              <TableCell align="right">{row.amount_users}</TableCell>
              <TableCell align="right">{row.amount_patients}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
