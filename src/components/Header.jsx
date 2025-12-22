import { NavLink, useParams, useLocation } from "react-router-dom";
import logo from "../assets/flip7logo.webp";
import { useSettingStore } from "../stores/settingsStore";
import { CapitalizeFirstLetter } from "./CapitalizeFirstLetter";
import { useGameStore } from "../stores/gameStore";
import { useEffect } from "react";
import { Confetti } from "./Confetti";
import { ToggleSwitch } from "./ToggleSwitch";

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
      <div className="text-right">

        <ToggleSwitch
          size="sm"
          checked={!hideHistory}
          onChange={() => setHideHistory(!hideHistory)}
        />
        <div className="opacity-25">
          {hideHistory ? <p>Hiding rounds</p> : <p>Showing Rounds</p>}
        </div>
      </div>
    </div>
  );
};
