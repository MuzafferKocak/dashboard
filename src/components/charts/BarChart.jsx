"use client"

import { ResponsiveBar } from "@nivo/bar";
import { useTheme } from "@mui/material";
import { tokens } from "@/theme";
import { mockBarData as data } from "@/data/mockData";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar
      data={data}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      borderRadius={3}
      theme={{
        tooltip: {
          container: {
            background: colors.primary[400],
            color: colors.grey[100],
            fontSize: 14,
            borderRadius: "8px",
            boxShadow: "0px 3px 10px rgba(0,0,0,0.4)",
            padding: "8px 12px",
          },
        },
        axis: {
          domain: { stroke: colors.grey[100] },
          legend: { text: { fill: colors.grey[100] } },
          ticks: {
            line: { stroke: colors.grey[100], strokeWidth: 1 },
            text: { fill: colors.grey[100] },
          },
        },
        legends: {
          text: { fill: colors.grey[100] },
        },
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      axisBottom={{
        legend: isDashboard ? undefined : "country (indexBy)",
        legendOffset: 32,
      }}
      axisLeft={{ legend: isDashboard ? undefined : "food", legendOffset: -40 }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          translateX: 120,
          itemsSpacing: 3,
          itemWidth: 100,
          itemHeight: 16,
        },
      ]}
    />
  );
};

export default BarChart;
