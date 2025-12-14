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

  const hideHistory = useSettingStore((state) => state.hideHistory);
  const setHideHistory = useSettingStore((state) => state.setHideHistory);

  const scoreGoal = useSettingStore((state) => state.scoreGoal);
  const setScoreGoal = useSettingStore((state) => state.setScoreGoal);

  return (
    <div>
      <h2>Settings</h2>
      <div className="border rounded-lg m-10 p-4">
        <h3>Number of players:</h3>
        <input
          className="w-20"
          type="number"
          min={1}
          value={numberOfPlayers}
          onChange={(e) => setNumberOfPlayers(Number(e.target.value))}
        />

        <p>Current: {numberOfPlayers}</p>
      </div>

      <div className="border rounded-lg m-10 p-4">
        <h3>Score Goal:</h3>
        <input
          className="w-20"
          type="number"
          min={1}
          value={scoreGoal}
          onChange={(e) => setScoreGoal(Number(e.target.value))}
        />

        <p>Current: {scoreGoal}</p>
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

      <div className="border rounded-lg m-10 p-4">
        <h3>Hide Round History:</h3>
        <button
          onClick={() => setHideHistory("true")}
          disabled={viewMode === "true"}
        >
          Yes, hide it.
        </button>

        <button
          onClick={() => setHideHistory("false")}
          disabled={viewMode === "false"}
        >
          No, show it.
        </button>

        <p>Current view: {CapitalizeFirstLetter(hideHistory)}</p>
      </div>

      <NavLink to="/">
        <button>Back</button>
      </NavLink>
    </div>
  );
};
