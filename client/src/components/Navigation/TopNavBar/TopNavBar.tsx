// React
import { useState } from "react";

// Authentication
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { useAuthentication } from "../../Authentication/AuthenticationProvider";

// UI Components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Turn as MenuToggleButton } from "hamburger-react";

import NavBarMenu from "../AccountMenu/AccountMenu";
import SearchBar from "../SearchBar/SearchBar";

// Animations
import { motion } from "framer-motion";

// define the props to take a function to set the state of the drawer
interface TopNavBarProps {
  setIsSideNavBarOpen: (open: boolean) => void;
  isSideNavBarOpen: boolean;
}

function TopNavBar(props: TopNavBarProps) {
  const { login } = useAuthentication();

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backdropFilter: "blur(20px)",
      }}
    >
      <Toolbar>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
        >
          <MenuToggleButton
            size={26}
            toggled={props.isSideNavBarOpen}
            toggle={() => props.setIsSideNavBarOpen(!props.isSideNavBarOpen)}
          ></MenuToggleButton>
        </motion.div>
        {/* TODO: possibly add some x padding here */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* TODO: Come up with title */}
          {/* TODO: When someone clicks on name, redirect them home*/}
          Title Here
        </Typography>
        <AuthenticatedTemplate>
          <SearchBar />
          <NavBarMenu />
        </AuthenticatedTemplate>

        <UnauthenticatedTemplate>
          <Button color="inherit" variant="outlined" onClick={login}>
            Login
          </Button>
        </UnauthenticatedTemplate>
      </Toolbar>
    </AppBar>
  );
}

export default TopNavBar;
