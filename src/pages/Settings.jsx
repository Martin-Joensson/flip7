import { useSettingStore } from "../stores/settingsStore";
import { CapitalizeFirstLetter } from "../components/CapitalizeFirstLetter";
import { useNavigate } from "react-router-dom";
import { ToggleSwitch } from "../components/ToggleSwitch";

export const Settings = () => {
  const numberOfPlayers = useSettingStore((state) => state.numberOfPlayers);
  const setNumberOfPlayers = useSettingStore(
    (state) => state.setNumberOfPlayers
  );

  const navigate = useNavigate();

  const viewMode = useSettingStore((state) => state.viewMode);
  const setViewMode = useSettingStore((state) => state.setViewMode);

  const hideHistory = useSettingStore((state) => state.hideHistory);
  const setHideHistory = useSettingStore((state) => state.setHideHistory);

  const scoreGoal = useSettingStore((state) => state.scoreGoal);
  const setScoreGoal = useSettingStore((state) => state.setScoreGoal);
  const numericScore = scoreGoal === "" ? 0 : Number(scoreGoal);

  const handleChange = (e) => {
    let value = e.target.value;

    // Only allow digits or empty string
    if (/^\d*$/.test(value)) {
      // Remove leading zeros, but allow empty string
      value = value.replace(/^0+(?=\d)/, "");
      setScoreGoal(value);
    }
  };

  return (
    <>
      <div className="p-4 tablet:w-3/4 laptop:w-2/2 m-auto">
        <div className="border bg-flip7-beige dark:bg-flip7-rose text-darkFont dark:text-lightFont rounded-lg pt-4">
          <h2>Settings</h2>

          <div className="border bg-flip7- rounded-lg m-4 p-4">
            <h3>Score Goal:</h3>
            <input
              className="w-20 bg-lightBackground dark:bg-darkBackground border rounded-full my-4 text-xl text-center"
              type="number"
              inputMode="numeric"
              style={{
                width: "100%",
                padding: "0.5rem",
                marginBottom: "0.5rem",
              }}
              min={0}
              value={scoreGoal}
              onChange={handleChange}
            />
          </div>
          <div className="m-4 border rounded-lg p-4">
            <h3>Round History:</h3>
            <div className="my-4">
              <ToggleSwitch
                size="md"
                pip1="bg-flip7-beige"
                pip2="bg-flip7-dark"
                border="true"
                checked={!hideHistory}
                onChange={() => setHideHistory(!hideHistory)}
              />
              {hideHistory ? <p>Hide rounds</p> : <p>Show Rounds</p>}
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
};
