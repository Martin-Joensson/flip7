import logo from "../assets/flip7logo.webp";
import { NavLink } from "react-router-dom";
import { useSettingStore } from "../stores/settingsStore";
import { useGameStore } from "../stores/gameStore";
import { Footer } from "../components/Footer";

export const Start = () => {
  const viewMode = useSettingStore((state) => state.viewMode);
  const startGame = useGameStore((s) => s.startGame);
  const isStarted = useGameStore((s) => s.isStarted);
  let destination = "/play-" + viewMode;

  return (
    <div className="flex flex-col gap-2">
      <img className="w-1/3 m-auto" src={logo} />
      <h1>
        <span className="hidden">Flip 7</span>Score App
      </h1>
      <div className="flex mx-auto flex-col w-1/3 gap-2">
        <NavLink to={"/play"}>
          {isStarted ? <button className="CTA w-full">Continue</button> : null}
        </NavLink>
        <NavLink to={"/play"}>
          <button className="CTA w-full" onClick={startGame}>
            New Game
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
