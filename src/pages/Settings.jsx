import { useSettingStore } from "../stores/settingsStore";

export const Settings = () => {
  const numberOfPlayers = useSettingStore((state) => state.numberOfPlayers);
  const setNumberOfPlayers = useSettingStore(
    (state) => state.setNumberOfPlayers
  );
  return (
    <div>
      <h2>Settings</h2>
      <p>Number of players:</p>
      <input
        type="number"
        min={1}
        value={numberOfPlayers}
        onChange={(e) => setNumberOfPlayers(Number(e.target.value))}
      />

      <p>Current: {numberOfPlayers}</p>
    </div>
  );
};
