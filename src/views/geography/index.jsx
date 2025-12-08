"use client"

import { Box } from "@mui/material";
import Header from "@/components/Header";
import GeographyChart from "@/components/GeographyChart";
import { tokens } from "@/theme";
import { useTheme } from "@mui/material";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" border={`1px solid ${colors.grey[200]}`} borderRadius="4px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />

      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
