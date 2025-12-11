"use client";

import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "@/theme";
import PieChart from "@/components/PieChart";

const PieChartCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      gridColumn="span 4"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
      p="15px"
      sx={{
        "@media (max-width: 600px)": {
          gridColumn: "span 12",
          height: "auto",
        },
      }}
    >
      <Typography variant="h5" fontWeight="600" mb="15px">
        Sales Breakdown
      </Typography>

      <Box height="230px">
        <PieChart isDashboard={true} />
      </Box>
    </Box>
  );
};

export default PieChartCard;
