"use client";

import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "@/theme";
import BarChart from "@/components/BarChart";

const SalesBarCard = () => {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="10px"
          sx={{
            "@media (max-width: 600px)": {
              gridColumn: "span 12",
              height: "auto",
            },
          }}
        >
          <Typography variant="h5" fontWeight="600" sx={{ mb: "15px " }}>
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
  )
}

export default SalesBarCard