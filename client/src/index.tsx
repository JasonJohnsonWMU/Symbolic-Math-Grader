// React Imports
import React from "react";
import { createRoot } from "react-dom/client";

// Routing
import { Route, Routes, BrowserRouter } from "react-router-dom";

// Service Worker / PWA
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

// UI Components
import Layout from "./components/Layout/Layout";

// HOCs / Contexts / Wrappers / Providers
import { AuthenticationProvider } from "./components/Authentication/AuthenticationProvider";

// Pages
import Home from "./pages/Home";
import Account from "./pages/Account";
import Courses from "./pages/Courses";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthenticationProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </Layout>
      </AuthenticationProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// TODO: do we want this?
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// TODO: implement this or remove it
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
