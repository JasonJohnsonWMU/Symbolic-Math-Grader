import React from "react";

// MSAL imports
import {
  PublicClientApplication,
  EventType,
  EventMessage,
  AuthenticationResult,
} from "@azure/msal-browser";
import { MsalProvider, useMsal } from "@azure/msal-react";
import { msalConfig, loginRequest } from "./authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

// on an event, if it was the login event, then we can get the account
msalInstance.addEventCallback((event: EventMessage) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
    const payload = event.payload as AuthenticationResult;
    const account = payload.account;
    msalInstance.setActiveAccount(account);
  }
});

export interface AuthenticationProviderProps {
  children: React.ReactNode;
}

function AuthenticationProvider(props: AuthenticationProviderProps) {
  return (
    <MsalProvider instance={msalInstance}>
      <div>{props.children}</div>
    </MsalProvider>
  );
}

function useAuthentication() {
  const { instance } = useMsal();

  const login = () => {
    instance.loginRedirect(loginRequest);
  };

  const logout = () => {
    instance.logoutRedirect();
  };

  const switchAccounts = () => {
    // const accounts = msalInstance.getAllAccounts();
    // if (accounts.length > 0) {
    //     msalInstance.setActiveAccount(accounts[0]);
    // }
    // is this wanted? we might want a switch view for teachers instead, almost all users will only have one account
  };
  return { login, logout, switchAccounts };
}

export { AuthenticationProvider, useAuthentication };
