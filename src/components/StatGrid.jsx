"use client";

import { Box, useTheme } from "@mui/material";
import { tokens } from "@/theme";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import StatBox from "@/components/StatBox";

const StatGrid = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap="20px">
      <Box
        gridColumn={{ xs: "span 6", sm: "span 3" }}
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="140px"
      >
        <StatBox
          title="12,366"
          subtitle="Emails Sent"
          progress="0.75"
          increase="+18%"
          icon={
            <EmailIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>

      <Box
        gridColumn={{ xs: "span 6", sm: "span 3" }}
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="140px"
      >
        <StatBox
          title="431,225"
          subtitle="Sales Obtained"
          progress="0.5"
          increase="+28%"
          icon={
            <PointOfSaleIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>

      <Box
        gridColumn={{ xs: "span 6", sm: "span 3" }}
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="140px"
      >
        <StatBox
          title="32,441"
          subtitle="New Clients"
          progress="0.30"
          increase="+8%"
          icon={
            <PersonAddIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>

      <Box
        gridColumn={{ xs: "span 6", sm: "span 3" }}
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="140px"
      >
        <StatBox
          title="1,356.255"
          subtitle="Traffic Inbound"
          progress="0.83"
          increase="+48%"
          icon={
            <TrafficIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
    </Box>
  );
};

export default StatGrid;
