import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/home";
import MemoCallBack from "../Pages/MemoCallBack";
import { Layout } from "../components/layout/Layout";
import StateCheck from "../Pages/state";
import StudyPage from "../Pages/StudyPage";
import ArrayMethods from "../Pages/StudyPage/ArrayMethods";
import GroupAndCount from "../Pages/StudyPage/GroupAndCount";

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/memo" element={<MemoCallBack />} />
          <Route path="/state" element={<StateCheck />} />
          <Route path="/study-page" element={<StudyPage />} />

          {/* Study page Items */}
          <Route path="/array-methods" element={<ArrayMethods />} />
          <Route path="/group-and-count" element={<GroupAndCount />} />
          {/* ---------------- */}

        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
