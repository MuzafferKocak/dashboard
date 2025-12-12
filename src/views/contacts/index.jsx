"use client";

import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "@/theme";
import { mockDataContacts } from "@/data/mockData";
import Header from "@/components/Header";
import CustomToolbar from "@/components/CustomToolbar";
import { useContext } from "react";
import { SearchContext } from "@/context/SearchContext";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { searchTerm } = useContext(SearchContext);

  const filteredContacts = mockDataContacts.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      flex: 0.5,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-row:hover": {
            backgroundColor: `${colors.blueAccent[500]} !important`,
          },
          "& .MuiDataGrid-root": {
            border: "none",
            backgroundColor: "transparent",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: `${colors.blueAccent[800]} !important`,
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: `${colors.blueAccent[800]} !important`,
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[800],
          },
          "& .MuiDataGrid-cell--textCenter": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <DataGrid
          rows={filteredContacts}
          columns={columns}
          slots={{ toolbar: CustomToolbar }}
          showToolbar
        />
      </Box>
    </Box>
  );
};

export default Contacts;
