import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Invoices from "./routes/Invoices";
import App from "./App";
import Home from "./routes/Home";
import "./index.css";
import Invoice from "./routes/Invoice";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/invoices" element={<Invoices />}>
            <Route index element={<p>Please select an invoice</p>} />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route path="*" element={<p>404 - Nothing was found here</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
