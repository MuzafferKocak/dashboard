"use client";

import { Typography, Box, useTheme, IconButton } from "@mui/material";
import Image from "next/image";
import { tokens } from "@/theme";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width="100%"
      py="8px"
      backgroundColor={colors.primary[400]}
      zIndex={999}
      boxShadow="0 -2px 6px rgba(0,0,0,0.3)"
      display="flex"
      alignItems="center"
    >
      <Box
        flex={1}
        display="flex"
        alignItems="center"
        gap="10px"
        pl="20px"
        textAlign="left"
      >
        <Image
          src="/assets/logo00.jpg"
          alt="logo"
          width={40}
          height={40}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            cursor: "pointer",
          }}
        />

        <Typography
          variant="h5"
          color={colors.greenAccent[400]}
          fontWeight="bold"
          sx={{ cursor: "pointer" }}
          onClick={() =>
            window.open("https://muzaffer-kocak.vercel.app/", "_blank")
          }
        >
          MeK
        </Typography>
      </Box>

      <Box flex={1} textAlign="center">
        <Typography variant="h6" color={colors.grey[300]}>
          © {new Date().getFullYear()} All rights reserved.
        </Typography>
      </Box>

      <Box
        flex={1}
        textAlign="right"
        pr="20px"
        display="flex"
        justifyContent="flex-end"
        gap="10px"
      >
        <IconButton
          href="https://www.linkedin.com/in/muzaffer-kocak/"
          target="_blank"
          sx={{ color: colors.grey[100] }}
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          href="https://github.com/MuzafferKocak"
          target="_blank"
          sx={{ color: colors.grey[100] }}
        >
          <GitHubIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
