import { useSettingStore } from "../stores/settingsStore";
import { CapitalizeFirstLetter } from "../components/CapitalizeFirstLetter";
import { NavLink } from "react-router-dom";

export const Settings = () => {
  const numberOfPlayers = useSettingStore((state) => state.numberOfPlayers);
  const setNumberOfPlayers = useSettingStore(
    (state) => state.setNumberOfPlayers
  );

  const viewMode = useSettingStore((state) => state.viewMode);
  const setViewMode = useSettingStore((state) => state.setViewMode);

  return (
    <div>
      <h2>Settings</h2>
      <div className="border rounded-lg m-10 p-4">
        <h3>Number of players:</h3>
        <input
          className="w-10"
          type="number"
          min={1}
          value={numberOfPlayers}
          onChange={(e) => setNumberOfPlayers(Number(e.target.value))}
        />

        <p>Current: {numberOfPlayers}</p>
      </div>
      <div className="border rounded-lg m-10 p-4">
        <h3>View mode:</h3>
        <button
          onClick={() => setViewMode("grid")}
          disabled={viewMode === "grid"}
        >
          Grid
        </button>

        <button
          onClick={() => setViewMode("row")}
          disabled={viewMode === "row"}
        >
          Row
        </button>

        <p>Current view: {CapitalizeFirstLetter(viewMode)}</p>
      </div>
      <NavLink to="/">
        <button>Back</button>
      </NavLink>
    </div>
  );
};
