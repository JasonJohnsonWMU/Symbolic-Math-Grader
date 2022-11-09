// React
import { useEffect, useState } from "react";

// UI Components
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";

// Icons
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// Animations
import { motion } from "framer-motion";

// Routing
import { useLocation, useNavigate } from "react-router-dom";

interface SideNavBarProps {
  setIsOpen: (open: boolean) => void;
  isOpen: boolean;
}

// TODO: should the width be fixed, or sized to content, or sized as a percentage of the screen?
const drawerWidth = 240;

// TODO: if the drawer is collapsed, show hamburger menu icon, and icons for each item
// TODO: add entrance animation
// TODO: add animation for selected item - highlight, or outline, or something

function SideNavBar(props: SideNavBarProps) {
  const [isCompact, setIsCompact] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      text: "Courses",
      icon: <AutoStoriesIcon />,
    },
    {
      text: "Calendar",
      icon: <CalendarMonthIcon />,
    },
    {
      text: "Inbox",
      icon: <MailIcon />,
    },
  ];

  // use location to set initial selected item
  useEffect(() => {
    const path = location?.pathname?.split("/")[1];

    const index = menuItems.findIndex(
      (item) => item.text.toLowerCase() === path
    );

    setSelectedItem(index);
  }, [location, menuItems]);

  return (
    <SwipeableDrawer
      anchor="left"
      open={props.isOpen}
      onClose={() => props.setIsOpen(false)}
      onOpen={() => props.setIsOpen(true)}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuItems.map((menuItem, index) => (
            <ListItem
              selected={selectedItem === index}
              key={menuItem.text}
              disablePadding
              onClick={() => {
                navigate(`/${menuItem.text.toLowerCase()}`);
                props.setIsOpen(false);
              }}
            >
              <ListItemButton>
                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                <ListItemText primary={menuItem.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List
          sx={{
            position: "absolute",
            bottom: "0",
            right: "0",
            left: "0",
          }}
        >
          <Divider />

          <ListItem disablePadding onClick={() => setIsCompact(!isCompact)}>
            <ListItemButton>
              <ListItemIcon>
                {isCompact ? (
                  <OpenInFullIcon sx={{ transform: "rotate(45deg)" }} />
                ) : (
                  <CloseFullscreenIcon sx={{ transform: "rotate(45deg)" }} />
                )}
              </ListItemIcon>
              <ListItemText primary={"Collapse"} />
            </ListItemButton>
          </ListItem>
        </List>
        {/* // button will toggle between mini variant and normal: https://mui.com/material-ui/react-drawer/#mini-variant-drawer */}
      </Box>
    </SwipeableDrawer>
  );
}

export default SideNavBar;
