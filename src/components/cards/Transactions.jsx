"use client";

import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "@/theme";
import { mockTransactions } from "@/data/mockData";

const Transactions = () => {
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
    >
      <Typography
        variant="h5"
        fontWeight="600"
        color={colors.grey[100]}
        sx={{ mb: "15px" }}
      >
        Recent Transactions
      </Typography>

      <Box flex={1} overflow="auto" pr="10px">
        {mockTransactions.map((transaction, i) => (
          <Box
            key={`${transaction.txId}-${i}`}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`2px solid ${colors.primary[500]}`}
            py="10px"
          >
            <Box>
              <Typography color={colors.greenAccent[500]} fontWeight="600">
                {transaction.txId}
              </Typography>
              <Typography color={colors.grey[100]} fontSize="14px">
                {transaction.user}
              </Typography>
            </Box>

            <Typography color={colors.grey[100]} fontSize="14px">
              {transaction.date}
            </Typography>

            <Typography
              bgcolor={colors.greenAccent[500]}
              color={colors.grey[900]}
              px="8px"
              py="3px"
              borderRadius="4px"
              fontSize="14px"
            >
              ${transaction.cost}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Transactions;
