import { ResponsivePie } from "@nivo/pie";
import { useTheme } from "@mui/material";
import { tokens } from "@/theme";
import { mockPieData as data } from "@/data/mockData";

const PieChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsivePie
      data={data}
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
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      margin={{
        top: 40,
        right: isDashboard ? 20 : 80,
        bottom: isDashboard ? 40 : 80,
        left: isDashboard ? 20 : 80,
      }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={4}
      activeOuterRadiusOffset={8}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      legends={
        isDashboard
          ? []
          : [
              {
                anchor: "bottom",
                direction: "row",
                translateY: 56,
                itemWidth: 80,
                itemHeight: 16,
                symbolShape: "circle",
                symbolSize: 14,
              },
            ]
      }
    />
  );
};

export default PieChart;
