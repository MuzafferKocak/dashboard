"use client";

import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "@/theme";
import { mockDataTeam } from "@/data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "@/components/Header";
import CustomToolbar from "@/components/CustomToolbar";
import { useContext } from "react";
import { SearchContext } from "@/context/SearchContext";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { searchTerm } = useContext(SearchContext);

  const filteredTeam = mockDataTeam.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
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
      headerAlign: "left",
      align: "left",
      flex: 0.5,
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
      field: "access",
      headerName: "Access Level",
      flex: 1,
      align: "center",
      headerAlign: "center",
      headerClassName: "textCenter",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              minWidth: 50,
              width: "fit-content",
              mx: "auto",
              px: "8px",
              py: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",

              backgroundColor:
                access === "admin"
                  ? colors.greenAccent[600]
                  : colors.greenAccent[700],
            }}
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography
              color={colors.grey[100]}
              sx={{
                ml: "5px",

                "@media (max-width: 600px)": {
                  display: "none",
                },
              }}
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-row:hover": {
            backgroundColor: `${colors.blueAccent[500]} !important`,

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
          rows={filteredTeam}
          columns={columns}
          slots={{ toolbar: CustomToolbar }}
          showToolbar
        />
      </Box>
    </Box>
  );
};

export default Team;
