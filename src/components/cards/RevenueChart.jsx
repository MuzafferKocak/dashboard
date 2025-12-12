"use client";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "@/theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "@/components/charts/LineChart";

const RevenueChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      gridColumn={{ xs: "span 12", md: "span 8" }}
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
      p="20px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="300px"
      overflow="hidden"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
            Revenue Generated
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.greenAccent[500]}
          >
            $69,342.38
          </Typography>
        </Box>

        <IconButton>
          <DownloadOutlinedIcon
            sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
          />
        </IconButton>
      </Box>

      <Box mt="10px" height="100%">
        <LineChart isDashboard />
      </Box>
    </Box>
  );
};

export default RevenueChart;
