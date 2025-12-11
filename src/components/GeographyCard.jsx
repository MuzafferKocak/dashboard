"use client";

import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "@/theme";
import GeographyChart from "@/components/GeographyChart";

const GeographyCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      gridColumn={{ xs: "span 12", md: "span 4" }}
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
      p="20px"
      height="300px"
      display="flex"
      flexDirection="column"
    >
      <Typography variant="h5" fontWeight="600" mb="10px">
        Geography Based Traffic
      </Typography>

      <Box flex={1}>
        <GeographyChart isDashboard={true} />
      </Box>
    </Box>
  );
};

export default GeographyCard;
