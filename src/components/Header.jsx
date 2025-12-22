import { NavLink, useParams, useLocation } from "react-router-dom";
import logo from "../assets/flip7logo.webp";
import { useSettingStore } from "../stores/settingsStore";
import { CapitalizeFirstLetter } from "./CapitalizeFirstLetter";
import { useGameStore } from "../stores/gameStore";
import { useEffect } from "react";

export const Header = () => {
  const viewMode = useSettingStore((state) => state.viewMode);
  const hideHistory = useSettingStore((state) => state.hideHistory);
  const setHideHistory = useSettingStore((state) => state.setHideHistory);

  const handleHistory = () => {
    setHideHistory(!hideHistory);
  };

  return (
    <div className="flex justify-between mb-4 p-2">
      <NavLink to="/">
        <img className="w-10" src={logo} />
      </NavLink>
      <div className="text-right">

        {/* <span className="text-xs">
          Viewmode: {CapitalizeFirstLetter(viewMode)}
        </span> */}
      </div>
    </div>
  );
};
