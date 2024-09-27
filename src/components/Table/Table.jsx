import { Table, TableBody, TableHead, TableRow } from "@mui/material";
import * as React from "react";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const products = [
  { id: 1, name: "Snow", details: "Jon", price: 35 },
  { id: 2, name: "Lannister", details: "Cersei", price: 42 },
  { id: 3, name: "Lannister", details: "Jaime", price: 45 },
  { id: 4, name: "Stark", details: "Arya", price: 16 },
  { id: 5, name: "Targaryen", details: "Daenerys", price: null },
  { id: 6, name: "Melisandre", details: null, price: 150 },
  { id: 7, name: "Clifford", details: "Ferrara", price: 44 },
  { id: 8, name: "Frances", details: "Rossini", price: 36 },
  { id: 9, name: "Roxie", details: "Harvey", price: 65 },
];

export default function DataTable() {
  return (
    <div>
      <Table>
        {columns.map((item, index) => (
          <TableHead key={index}>{item?.field}</TableHead>
        ))}
        <TableBody>
          {products.map((item, index) => (
            <TableRow>{item?.id}</TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
