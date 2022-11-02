import React from "react";
import { ToastContainer } from "react-toastify";
import CssBaseline from "@mui/material/CssBaseline";
import "react-toastify/dist/ReactToastify.css";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { dark } from "./Theme/theme";

export interface LayoutProps {
  children: React.ReactNode;
}

// TODO: match the toast colors to the theme

function Layout(props: LayoutProps) {
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <Header />
      {props.children}
      <Footer />
      <ToastContainer theme="colored" />
    </ThemeProvider>
  );
}

export default Layout;
