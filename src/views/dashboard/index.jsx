"use client";

import { Box, Button, useTheme } from "@mui/material";
import Header from "@/components/Header";
import { tokens } from "@/theme";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import StatGrid from "@/components/StatGrid";
import RevenueChart from "@/components/cards/RevenueChart";
import Transactions from "@/components/cards/Transactions";
import CampaignCard from "@/components/cards/CampaignCard";
import PieChartCard from "@/components/cards/PieChartCard";
import GeographyCard from "@/components/cards/GeographyCard";
import { generateDashboardPDF } from "@/utils/generateDashboardPDF";


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box id="dashboard-root" m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your Dashboard" />

        <Box>
          <Button
          onClick={generateDashboardPDF}
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="minmax(150px, auto)"
        gap="20px"
      >
        <Box
          gridColumn="span 12"
          sx={{
            "@media (max-width: 600px)": {
              gridColumn: "span 12",
            },
          }}
        >
          <StatGrid />
        </Box>

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          sx={{
            "@media (max-width: 600px)": {
              gridColumn: "span 12",
              gridRow: "span 1",
            },
          }}
        >
          <RevenueChart />
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          sx={{
            "@media (max-width: 600px)": {
              gridColumn: "span 12",
              gridRow: "span 1",
            },
          }}
        >
          <Transactions />
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          sx={{
            "@media (max-width: 600px)": {
              gridColumn: "span 12",
              gridRow: "span 1",
            },
          }}
        >
          <CampaignCard />
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          sx={{
            "@media (max-width: 600px)": {
              gridColumn: "span 12",
              gridRow: "span 1",
            },
          }}
        >
          <PieChartCard />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          sx={{
            "@media (max-width: 600px)": {
              gridColumn: "span 12",
              gridRow: "span 1",
            },
          }}
        >
          <GeographyCard />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
