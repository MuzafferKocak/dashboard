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
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const menu = [
  { title: "Dashboard", icon: <HomeOutlinedIcon />, link: "/" },
  { title: "Team", icon: <PeopleOutlinedIcon />, link: "/team" },
  { title: "Contacts", icon: <ContactsOutlinedIcon />, link: "/contacts" },
  { title: "Invoices", icon: <ReceiptOutlinedIcon />, link: "/invoices" },
  { title: "Profile Form", icon: <PersonOutlinedIcon />, link: "/form" },
  { title: "Calendar", icon: <CalendarTodayOutlinedIcon />, link: "/calendar" },
  { title: "FAQ", icon: <HelpOutlineOutlinedIcon />, link: "/faq" },
  { title: "Bar Chart", icon: <BarChartOutlinedIcon />, link: "/bar" },
  { title: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, link: "/pie" },
  { title: "Line Chart", icon: <TimelineOutlinedIcon />, link: "/line" },
  { title: "Geography", icon: <MapOutlinedIcon />, link: "/geography" },
];

export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [active, setActive] = useState("Dashboard");

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isCollapsed ? 80 : 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isCollapsed ? 80 : 240,
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
          <Typography variant="h5" fontWeight="bold">
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
              style={{ borderRadius: "50%", cursor: "pointer" }}
            />
          </Box>
          <Typography variant="h4" fontWeight="bold" mt={1}>
            Ed Roh
          </Typography>
          <Typography variant="body2" color={colors.greenAccent[500]}>
            VP Fancy Admin
          </Typography>
        </Box>
      )}

      {/* Menu Items */}
      <List>
        {menu.map(({ title, icon, link }) => (
          <ListItem key={title} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              component={Link}
              href={link}
              onClick={() => setActive(title)}
              sx={{
                minHeight: 48,
                justifyContent: isCollapsed ? "center" : "initial",
                px: 2.5,
                backgroundColor:
                  active === title ? colors.primary[600] : "transparent",
                "&:hover": { backgroundColor: colors.primary[500] },
                color:
                  active === title ? colors.greenAccent[500] : colors.grey[100],
              }}
            >
              <ListItemIcon
                sx={{
                  color:
                    active === title
                      ? colors.greenAccent[500]
                      : colors.grey[100],
                  minWidth: 32,
                }}
              >
                {icon}
              </ListItemIcon>
              {!isCollapsed && <ListItemText primary={title} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
