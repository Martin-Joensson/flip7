import { NavLink, useParams, useLocation } from "react-router-dom";
import logo from "../assets/flip7logo.webp";
import { useSettingStore } from "../stores/settingsStore";
import { CapitalizeFirstLetter } from "./CapitalizeFirstLetter";
import { useGameStore } from "../stores/gameStore";
import { useEffect } from "react";
import { Confetti } from "./Confetti";
import { ToggleSwitch } from "./ToggleSwitch";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const viewMode = useSettingStore((state) => state.viewMode);
  const hideHistory = useSettingStore((state) => state.hideHistory);
  const setHideHistory = useSettingStore((state) => state.setHideHistory);

  const handleHistory = () => {
    setHideHistory(!hideHistory);
  };

  return (
    <div className="flex justify-between p-2">
      <NavLink to="/">
        <img className="w-14" src={logo} />
      </NavLink>
      <div className="flex items-center text-right">
        <ThemeToggle />

        <div className="relative flex self-center group">
          <ToggleSwitch
            size="sm"
            pip1="bg-flip7-beige"
            pip2="bg-flip7-dark"
            border="true"
            checked={!hideHistory}
            onChange={() => setHideHistory(!hideHistory)}
          />
          <div className="absolute right-1/2 top-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-700 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-50">
            {hideHistory ? "Hiding rounds" : "Showing rounds"}
          </div>
        </div>
      </div>
    </div>
  );
};
