import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/home";
import MemoCallBack from "../Pages/MemoCallBack";
import { Layout } from "../components/layout/Layout";
import StateCheck from "../Pages/state";
import ArrayMethods from "../Pages/ArrayMethods";

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/memo" element={<MemoCallBack />} />
          <Route path="/state" element={<StateCheck />} />
          <Route path="/array-methods" element={<ArrayMethods />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
