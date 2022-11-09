import React from "react";

// Themeing
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { dark } from "./Theme/theme";

// Animations
import { AnimatePresence } from "framer-motion";

// Notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// UI Components
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

// TODO: match the toast colors to the theme

function Layout(props: LayoutProps) {
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />
      {/* this is used for animating when things enter / exit / move */}
      <AnimatePresence>
        {/* using a key attribute is a workaround to avoid getting `Two Children with the Same Key` error */}
        <Header key={0} />
        {/* TODO: add padding for size of navbar */}
        {props.children}
        <Footer key={2} />
      </AnimatePresence>
      <ToastContainer theme="colored" />
    </ThemeProvider>
  );
}

export default Layout;
