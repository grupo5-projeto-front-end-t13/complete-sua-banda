import { AnimatePresence } from "framer-motion";
import { Routes, Route, Navigate } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterBand } from "../pages/RegisterBand";
import { RegisterMusician } from "../pages/RegisterMusician";
import { DashboardBand } from "../pages/DashboardBand";
import { DashboardMusician } from "../pages/DashboardMusician";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

export const AllRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registerBand" element={<RegisterBand />} />
        <Route path="/registerMusician" element={<RegisterMusician />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboardBand" element={<DashboardBand />} />
          <Route path="/dashboardMusician" element={<DashboardMusician />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </AnimatePresence>
  );
};
