"use client";

import { useState } from "react";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { tokens } from "@/theme";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const menuItems = [
  {
    title: "Dashboard",
    icon: <HomeOutlinedIcon />,
    link: "/",
  },

  // Data
  {
    title: "Team",
    icon: <PeopleOutlinedIcon />,
    link: "/team",
    section: "Data",
  },
  {
    title: "Contacts",
    icon: <ContactsOutlinedIcon />,
    link: "/contacts",
    section: "Data",
  },
  {
    title: "Invoices",
    icon: <ReceiptOutlinedIcon />,
    link: "/invoices",
    section: "Data",
  },

  // Pages
  {
    title: "Profile Form",
    icon: <PersonOutlinedIcon />,
    link: "/form",
    section: "Pages",
  },
  {
    title: "Calendar",
    icon: <CalendarTodayOutlinedIcon />,
    link: "/calendar",
    section: "Pages",
  },
  {
    title: "FAQ",
    icon: <HelpOutlineOutlinedIcon />,
    link: "/faq",
    section: "Pages",
  },

  // Charts
  {
    title: "Bar Chart",
    icon: <BarChartOutlinedIcon />,
    link: "/bar",
    section: "Charts",
  },
  {
    title: "Pie Chart",
    icon: <PieChartOutlineOutlinedIcon />,
    link: "/pie",
    section: "Charts",
  },
  {
    title: "Line Chart",
    icon: <TimelineOutlinedIcon />,
    link: "/line",
    section: "Charts",
  },
  {
    title: "Geography",
    icon: <MapOutlinedIcon />,
    link: "/geography",
    section: "Charts",
  },
];

export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [active, setActive] = useState("Dashboard");

  const renderMenuItem = ({ title, icon, link }) => {
    const isActive = active === title;

    const bgColor = isActive
      ? theme.palette.mode === "dark"
        ? colors.primary[600]
        : colors.grey[400]
      : "transparent";

    const hoverBgColor =
      theme.palette.mode === "dark" ? colors.primary[500] : colors.grey[800];

    const textColor = isActive
      ? theme.palette.mode === "dark"
        ? colors.greenAccent[500]
        : colors.blueAccent[500]
      : theme.palette.mode === "dark"
      ? colors.grey[100]
      : colors.grey[500];

    return (
      <ListItem key={title} disablePadding sx={{ display: "block" }}>
        <ListItemButton
          component={Link}
          href={link}
          onClick={() => setActive(title)}
          sx={{
            minHeight: 46,
            justifyContent: isCollapsed ? "center" : "initial",
            px: 2.5,
            backgroundColor: bgColor,
            "&:hover": { backgroundColor: hoverBgColor },
            color: textColor,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 30,
              color: textColor,
              justifyContent: isCollapsed ? "center" : "initial",
            }}
          >
            {icon}
          </ListItemIcon>

          {!isCollapsed && (
            <ListItemText
              primary={
                <Typography sx={{ color: textColor }}>{title}</Typography>
              }
            />
          )}
        </ListItemButton>
      </ListItem>
    );
  };

  const sections = ["Data", "Pages", "Charts"];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isCollapsed ? 50 : 180,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isCollapsed ? 50 : 180,
          boxSizing: "border-box",
          background: colors.primary[400],
          color: colors.grey[100],
          borderRight: `1px solid ${colors.primary[500]}`,
          transition: "width 0.3s",
        },
      }}
    >
      {/* Logo + Hamburger */}
      <Box
        p={2}
        display="flex"
        alignItems="center"
        justifyContent={isCollapsed ? "center" : "space-between"}
      >
        {!isCollapsed && (
          <Typography variant="h5" color={colors.grey[100]} fontWeight="bold">
            ADMIN PANEL
          </Typography>
        )}
        <IconButton
          onClick={() => setIsCollapsed(!isCollapsed)}
          sx={{ color: colors.grey[100] }}
        >
          <MenuOutlinedIcon />
        </IconButton>
      </Box>

      {/* Profile */}
      {!isCollapsed && (
        <Box textAlign="center" mb={2}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Image
              src="/assets/avatar.jpg"
              alt="profile-user"
              width="100"
              height="100"
              loading="eager"
              style={{ borderRadius: "50%", cursor: "pointer" }}
            />
          </Box>
          <Typography variant="h5" fontWeight="bold" mt={1}>
            M E K
          </Typography>
          <Typography variant="h6" color={colors.greenAccent[500]}>
            VP Fancy Admin
          </Typography>
        </Box>
      )}

      {/* Menu Items */}
      <List>
        {renderMenuItem(menuItems.find((i) => i.title === "Dashboard"))}
        {sections.map((section) => (
          <Box key={section}>
            {section !== "" && !isCollapsed && (
              <Typography
                variant="subtitle2"
                sx={{ m: "15px 0 5px 20px", color: colors.grey[300] }}
              >
                {section}
              </Typography>
            )}
            {menuItems
              .filter((item) => item.section === section)
              .map(renderMenuItem)}
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
