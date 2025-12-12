"use client"

import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "@/data/mockGeoFeatures";
import { mockGeographyData as data } from "@/data/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "@/theme";

const Geography = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveChoropleth
      data={data}
      features={geoFeatures.features}
      margin={{
        top: isDashboard ? 0 : 20,
        right: isDashboard ? 0 : 20,
        bottom: isDashboard ? 0 : 20,
        left: isDashboard ? 0 : 20,
      }}
      colors="nivo"
      domain={[0, 1000000]}
      unknownColor={colors.grey[600]}
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.6]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={!isDashboard}
      graticuleLineColor={colors.grey[700]}
      borderWidth={1}
      borderColor={colors.grey[100]}
      theme={{
        tooltip: {
          container: {
            background: colors.primary[400],
            color: colors.grey[100],
            borderRadius: "6px",
            padding: "6px 10px",
            fontSize: "0.9rem",
          },
        },
        labels: {
          text: {
            fill: colors.grey[100],
            fontSize: 12,
          },
        },
      }}
      legends={
        isDashboard
          ? []
          : [
              {
                anchor: "bottom-left",
                direction: "column",
                translateX: 20,
                translateY: -40,
                itemWidth: 92,
                itemHeight: 18,
                itemsSpacing: 4,
                symbolSize: 18,
                symbolShape: "circle",
                itemTextColor: colors.grey[100],
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
      }
    />
  );
};

export default Geography;
