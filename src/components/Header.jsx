import { NavLink, useParams, useLocation } from "react-router-dom";
import logo from "../assets/flip7logo.webp";
import { useSettingStore } from "../stores/settingsStore";
import { CapitalizeFirstLetter } from "./CapitalizeFirstLetter";
import { useGameStore } from "../stores/gameStore";
import { useEffect, useState } from "react";
import { Confetti } from "./Confetti";
import { ToggleSwitch } from "./ToggleSwitch";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const hideHistory = useSettingStore((state) => state.hideHistory);
  const setHideHistory = useSettingStore((state) => state.setHideHistory);

  const [showTooltip, setShowTooltip] = useState(false);

  const handleToggle = () => {
    setHideHistory(!hideHistory);
    setShowTooltip(true); // Show tooltip on toggle
  };

  // Hide tooltip after 2 seconds
  useEffect(() => {
    if (!showTooltip) return;
    const timer = setTimeout(() => setShowTooltip(false), 2000);
    return () => clearTimeout(timer);
  }, [showTooltip]);

  return (
    <div className="flex justify-between p-2">
      <NavLink to="/">
        <img className="w-14" src={logo} />
      </NavLink>

      <div className="relative flex items-center">
        <ThemeToggle />

        <div className="relative flex self-center group">
          <ToggleSwitch
            size="sm"
            pip1="bg-flip7-beige"
            pip2="bg-flip7-dark"
            border="true"
            checked={!hideHistory}
            onChange={handleToggle}
          />

          {/* Tooltip */}
          <div
            className={`
              absolute right-1/2 top-full mb-2 bg-gray-700 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-50
              transition-opacity
              ${showTooltip || "opacity-0"} 
              ${showTooltip ? "opacity-100" : ""}
              group-hover:opacity-100
            `}
          >
            {hideHistory ? "Hiding rounds" : "Showing rounds"}
          </div>
        </div>
      </div>
    </div>
  );
};
