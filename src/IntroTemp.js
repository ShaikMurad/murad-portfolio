import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutTemp from "./AboutTemp";
import BasicTemp from "./BasicTemp";
import ContactTemp from "./ContactTemp";
import ProjectTemp from "./ProjectTemp";
import TopbarTemp from "./TopbarTemp";

export default function IntroTemp() {
  return (
    <div className="container-fluid">
      <TopbarTemp />
      <Routes>
        <Route path="/" element={<BasicTemp />}></Route>
        <Route path="/project" element={<ProjectTemp />}></Route>
        <Route path="/contact" element={<ContactTemp />}></Route>
        <Route path="/about" element={<AboutTemp />}></Route>
      </Routes>
    </div>
  );
}
