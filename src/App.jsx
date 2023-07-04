import React from "react";

import { Router } from "./Router";
import { AuthProvider } from "./contexts/AuthContext";

export const App = () => (
  <>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </>
);
