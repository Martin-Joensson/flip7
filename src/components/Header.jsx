import { NavLink } from "react-router-dom";
import logo from "../assets/flip7logo.webp";
import { useSettingStore } from "../stores/settingsStore";
import { CapitalizeFirstLetter } from "./CapitalizeFirstLetter";
import { useGameStore } from "../stores/gameStore";

export const Header = () => {
  const viewMode = useSettingStore((state) => state.viewMode);
  const hideHistory = useSettingStore((state) => state.hideHistory);
  const setHideHistory = useSettingStore((state) => state.setHideHistory);
  const editable = useSettingStore((state) => state.editable);
  const setEditable = useSettingStore((state) => state.setEditable);
  const isStarted = useGameStore((state) => state.isStarted);

  const handleEdit = () => {
    setEditable(!editable);
  };

  const handleHistory = () => {
    setHideHistory(!hideHistory);
  };

  return (
    <div className="flex justify-between mb-4 p-2">
      <NavLink to="/">
        <img className="w-10" src={logo} />
      </NavLink>
      {isStarted ? (
        <button onClick={handleEdit}>
          {editable ? "Save" : "Change Names and Colors"}
        </button>
      ) : null}

      <div className="text-right">
        <NavLink to="/settings">
          <p className="text-xs" src={logo}>
            Settings
          </p>
        </NavLink>
        <span className="text-xs cursor-pointer" onClick={handleHistory}>
          Hide history: {CapitalizeFirstLetter(hideHistory)}
        </span>

        {/* <span className="text-xs">
          Viewmode: {CapitalizeFirstLetter(viewMode)}
        </span> */}
      </div>
    </div>
  );
};
