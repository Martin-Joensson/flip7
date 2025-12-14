import { Routes, Route } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Start } from "../pages/Start";
import { Settings } from "../pages/Settings";

export const CategoryRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
