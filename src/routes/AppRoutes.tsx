import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import MainLayout from "../components/layout/MainLayout";
import AuthGuard from "../components/common/AuthGuard";
import TestCreation from "../pages/TestCreation/TestCreation";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AuthGuard />}>
          <Route element={<MainLayout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/test-creation" element={<TestCreation />} />
            <Route path="/test-creation/:testId/questions" element={<TestCreation />} />
            <Route path="/test-creation/:testId/scheduler" element={<TestCreation />} />
            <Route path="/test-creation/:testId/preview" element={<TestCreation />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
