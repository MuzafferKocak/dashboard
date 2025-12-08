"use client";

import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "@/theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width="100%"
      minHeight="130px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap="10px"
      p="5px"
      sx={{
        "@media (max-width: 600px)": {
          flexDirection: "column",
          textAlign: "center",
          minHeight: "150px",
          gap: "6px",
        },
      }}
    >
      <Box
        sx={{
          "@media (max-width: 600px)": { order: 1 },
        }}
      >
        <Box sx={{ "@media(max-width: 600px)": { transform: "scale(0.8)" } }}>
          {icon}
        </Box>

        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: colors.grey[100],
            mt: "5px",
            "@media(max-width: 600px)": { fontSize: "0.9rem" },
            "@media(max-width: 400px)": { fontSize: "0.65rem" },
          }}
          noWrap
        >
          {title}
        </Typography>
      </Box>

      <Box
        sx={{
          "@media (max-width: 600px)": { order: 2 },
          "@media (max-width: 400px)": {
            transform: "scale(0.85)",
          },
        }}
      >
        <ProgressCircle progress={progress} size={35} />
      </Box>

      <Box
        textAlign="right"
        sx={{
          minWidth: "65px",
          "@media (max-width: 600px)": {
            textAlign: "center",
            order: 3,
            minWidth: "auto",
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: colors.greenAccent[400],
            "@media(max-width: 600px)": { fontSize: "0.7rem" },
            "@media(max-width: 400px)": { fontSize: "0.45rem" },
          }}
          noWrap
        >
          {subtitle}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: colors.greenAccent[600],
            fontStyle: "italic",
            "@media(max-width: 600px)": { fontSize: "0.8rem" },
            "@media(max-width: 400px)": { fontSize: "0.6rem" },
          }}
          noWrap
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
