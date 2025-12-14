import { NavLink } from "react-router-dom";
import logo from "../assets/flip7logo.webp";
import { useSettingStore } from "../stores/settingsStore";
import { CapitalizeFirstLetter } from "./CapitalizeFirstLetter";

export const Header = () => {
  const viewMode = useSettingStore((state) => state.viewMode);
  const hideHistory = useSettingStore((state) => state.hideHistory);
  return (
    <div className="flex justify-between mb-4 p-2">
      <NavLink to="/">
        <img className="w-10" src={logo} />
      </NavLink>
      <div>
        <NavLink to="/settings">
          <p className="text-xs" src={logo}>
            Settings:
          </p>
        </NavLink>
        <span className="text-xs">
          Hide history: {CapitalizeFirstLetter(hideHistory)}
        </span>

        {/* <span className="text-xs">
          Viewmode: {CapitalizeFirstLetter(viewMode)}
        </span> */}
      </div>
    </div>
  );
};
