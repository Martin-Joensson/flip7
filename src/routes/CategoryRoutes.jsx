import { Routes, Route } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Start } from "../pages/Start";
import { Settings } from "../pages/Settings";
import { PlayGrid } from "../pages/PlayGrid";
import { PlayRow } from "../pages/PlayRow";

export const CategoryRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/play-grid" element={<PlayGrid />} />
      <Route path="/play-row" element={<PlayRow />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
