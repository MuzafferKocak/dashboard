"use client";

import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "@/theme";
import ProgressCircle from "@/components/charts/ProgressCircle";

const CampaignCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      gridColumn={{ xs: "span 12", md: "span 4" }}
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
      p="20px"
      display="flex"
      flexDirection="column"
      height="300px"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Typography variant="h5" fontWeight="600" mb="15px">
        Campaign
      </Typography>

      <ProgressCircle size="95" />

      <Typography
        variant="h5"
        color={colors.greenAccent[500]}
        sx={{ mt: "15px" }}
      >
        $48,352 Revenue Generated
      </Typography>

      <Typography fontSize="14px" mt="5px" color={colors.grey[200]}>
        Includes extra misc expenditures and cost
      </Typography>
    </Box>
  );
};

export default CampaignCard;
