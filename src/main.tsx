import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import SeoText from "./seo.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      <Footer />
      <SeoText />
    </BrowserRouter>
  </StrictMode>
);
