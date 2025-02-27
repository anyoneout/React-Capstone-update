import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";
import { Home } from "./Views/Home";
import { Nav } from "./Views/Nav";
import { About } from "./Views/About";
import { BfPage } from "./Views/BfPage";
import { OaPage } from "./Views/OaPage";



const root = createRoot(window.bodyTag);
root.render(
  <HashRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/OaPage" element={<OaPage />} />
      <Route path="/BfPage" element={<BfPage />} />
      <Route path="/About" element={<About />} />
    </Routes>
  </HashRouter>
);