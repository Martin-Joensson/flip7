import { NavLink } from "react-router-dom";
import logo from "../assets/flip7logo.webp";
import { useSettingStore } from "../stores/settingsStore";
import { CapitalizeFirstLetter } from "./CapitalizeFirstLetter";

export const Header = () => {
  const viewMode = useSettingStore((state) => state.viewMode);
  return (
    <div className="flex justify-between">
      <NavLink to="/">
        <img className="w-10" src={logo} />
      </NavLink>

      <span className="text-xs">Viewmode: {CapitalizeFirstLetter(viewMode)}</span>
    </div>
  );
};
