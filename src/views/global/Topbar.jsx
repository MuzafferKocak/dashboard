"use client";

import {
  Box,
  IconButton,
  InputBase,
  useTheme,
  Menu,
  MenuItem,
  Badge,
} from "@mui/material";
import { useContext, useState } from "react";
import { SearchContext } from "@/context/SearchContext";
import { ColorModeContext, tokens } from "@/theme";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { setSearchTerm } = useContext(SearchContext);

  const [notifAnchor, setNotifAnchor] = useState(null);
  const [settingsAnchor, setSettingsAnchor] = useState(null);
  const [profileAnchor, setProfileAnchor] = useState(null);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search */}

      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase
          sx={{ ml: 2, flex: 1 }}
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Icons */}

      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton onClick={(e) => setNotifAnchor(e.currentTarget)}>
          <Badge badgeContent={5} color="error">
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>
        <Menu
          anchorEl={notifAnchor}
          open={Boolean(notifAnchor)}
          onClose={() => setNotifAnchor(null)}
        >
          <MenuItem>New message received</MenuItem>
          <MenuItem>Server updated</MenuItem>
          <MenuItem>5 unread alerts</MenuItem>
        </Menu>

        <IconButton onClick={(e) => setSettingsAnchor(e.currentTarget)}>
          <SettingsOutlinedIcon />
        </IconButton>
        <Menu
          anchorEl={settingsAnchor}
          open={Boolean(settingsAnchor)}
          onClose={() => setSettingsAnchor(null)}
        >
          <MenuItem>Preferences</MenuItem>
          <MenuItem>Theme Settings</MenuItem>
          <MenuItem>System Info</MenuItem>
        </Menu>

        <IconButton onClick={(e) => setProfileAnchor(e.currentTarget)}>
          <PersonOutlinedIcon />
        </IconButton>
        <Menu
          anchorEl={profileAnchor}
          open={Boolean(profileAnchor)}
          onClose={() => setProfileAnchor(null)}
        >
          <MenuItem>My Profile</MenuItem>
          <MenuItem>Account Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Topbar;
