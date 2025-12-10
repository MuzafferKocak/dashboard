"use client";

import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "@/components/Header";
import { tokens } from "@/theme";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import BarChart from "@/components/BarChart";
import GeographyChart from "@/components/GeographyChart";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import StatBox from "@/components/StatBox";
import ProgressCircle from "@/components/ProgressCircle";
import { mockTransactions } from "@/data/mockData";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your Dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      {/*Charts */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            "@media (max-width: 600px)": {
              gridColumn: "span 6",
              
            },
          }}
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
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            "@media (max-width: 600px)": {
              gridColumn: "span 6",
              
            },
          }}
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
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            "@media (max-width: 600px)": {
              gridColumn: "span 6",
              
            },
          }}
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
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            "@media (max-width: 600px)": {
              gridColumn: "span 6",
              
            },
          }}
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

        <Box
          
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          sx={{
            "@media (max-width: 600px)": {
              gridColumn: "span 12",
              height: "auto",
            },
          }}
        >
          <Box
            mt="15px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
                
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $69,342,38
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" mt="-30px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* */}
        <Box
          
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          sx={{
            "@media (max-width: 600px)": {
              gridColumn: "span 12",
              height: "auto",
            },
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p="15px"
          >
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Recent Transactions
            </Typography>
          </Box>

          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
              sx={{
                "@media (max-width: 600px)": {
                  gridColumn: "span 12",
                  height: "auto",
                },
              }}
            >
              <Box>
                <Typography color={colors.greenAccent[500]} variant="h5">
                  {transaction.txId}
                </Typography>

                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>

              <Box>
                <Typography color={colors.grey[100]}>
                  {transaction.date}
                </Typography>
              </Box>
              <Box>
                <Typography
                  bgcolor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  ${transaction.cost}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        {/* */}
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
          <Typography variant="h5" fontWeight="600" >
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="80" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 Revenue Generated
            </Typography>
            <Typography>Includes extra misc expenditures and cost</Typography>
          </Box>
        </Box>

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
          <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
            Geography Based Traffic
          </Typography>
          <Box height="200px" mt="25px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
