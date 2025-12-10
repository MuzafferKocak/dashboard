"use client"

import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "@/theme";
import { mockLineData as data } from "@/data/mockData";

const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveLine
      data={data}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
      margin={{
        top: 50,
        right: isDashboard ? 20 : 110,
        bottom: isDashboard ? 50 : 80,
        left: 60,
      }}
      theme={{
        axis: {
          domain: { line: { stroke: colors.grey[100] } },
          ticks: {
            line: { stroke: colors.grey[100], strokeWidth: 1 },
            text: { fill: colors.grey[100], fontSize: 12 },
          },
          legend: { text: { fill: colors.grey[100] } },
        },
        legends: { text: { fill: colors.grey[100] } },
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
        crosshair: {
          line: {
            stroke: colors.grey[200], 
            strokeWidth: 1,
            strokeDasharray: "6 6",
          },
        },
      }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        stacked: true,
      }}
      enableGridX={false}
      enableGridY={false}
      axisBottom={
         {
              tickRotation: -40,
              legend: "transportation",
              legendOffset: 36,
              legendPosition: "middle",
            }
      }
      axisLeft={
         {
              legend: "count",
              legendOffset: -40,
              tickValues: 5,
              legendPosition: "middle",
            }
      }
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={
        isDashboard
          ? []
          : [
              {
                anchor: "bottom-right",
                direction: "column",
                translateX: 100,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: "circle",
              },
            ]
      }
    />
  );
};

export default LineChart;
