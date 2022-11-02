// Authentication
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { useAuthentication } from "../../Authentication/AuthenticationProvider";

// UI Components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NavBarMenu from "../AccountMenu/AccountMenu";

function NavBar() {
  const { login } = useAuthentication();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Title Here
            {/* TODO: Come up with title */}
          </Typography>
          <AuthenticatedTemplate>
            <NavBarMenu />
          </AuthenticatedTemplate>

          <UnauthenticatedTemplate>
            <Button color="inherit" variant="outlined" onClick={login}>
              Login
            </Button>
          </UnauthenticatedTemplate>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
