import logo from "../assets/flip7logo.webp";
import { NavLink } from "react-router-dom";
import { useSettingStore } from "../stores/settingsStore";
import { useGameStore } from "../stores/gameStore";
import { Footer } from "../components/Footer";

export const Start = () => {
  const viewMode = useSettingStore((state) => state.viewMode);

  const numberOfPlayers = useSettingStore((state) => state.numberOfPlayers);
  const setNumberOfPlayers = useSettingStore(
    (state) => state.setNumberOfPlayers
  );

  const startGame = useGameStore((s) => s.startGame);
  const isStarted = useGameStore((s) => s.isStarted);
  let destination = "/play-" + viewMode;

  const handleStart = (players) => {
    if (players === 0) {
      const value = prompt("How many players?", 6);
      setNumberOfPlayers(Number(value));
      startGame();
    } else {
      setNumberOfPlayers(players);
      startGame();
    }
  };

  return (
    <div className="flex flex-col m-auto gap-2">
      <img className="w-1/3 m-auto" src={logo} />
      <h1 className="text-center">
        <span className="hidden">Flip 7</span>Score App
      </h1>
      <div className="flex mx-auto flex-col gap-2">
        <NavLink to={"/play"}>
          {isStarted ? <button className="CTA w-full">Continue</button> : null}
        </NavLink>

        <h2 className="w-full" onClick={startGame}>
          New Game
        </h2>

        <div className="flex flex-col flex-1 contents-center m-auto gap-2">
          <div className="flex flex-wrap justify-center gap-2">
            <NavLink to={"/play"}>
              <button className="CTA" onClick={() => handleStart(3)}>
                3 players
              </button>
            </NavLink>
            <NavLink to={"/play"}>
              <button className="CTA" onClick={() => handleStart(4)}>
                4 players
              </button>
            </NavLink>
            <NavLink to={"/play"}>
              <button className="CTA" onClick={() => handleStart(5)}>
                5 players
              </button>
            </NavLink>
          </div>
        </div>
        <NavLink to={"/play"}>
          <button className="CTA w-full" onClick={() => handleStart(0)}>
            More players
          </button>
        </NavLink>
        <NavLink to="/settings">
          <button className="bg-secondary w-full">Settings</button>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};
