import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import SalesWhaleApp from "./SalesWhaleApp";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <HashRouter>
    <SalesWhaleApp/>
  </HashRouter>
);
