import React from "react";
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
      <h1>Score App</h1>
      <NavLink to={destination}>
        {isStarted ? <button className="CTA">Continue</button> : null}
      </NavLink>
      <NavLink to={destination}>
        <button className="CTA" onClick={startGame}>
          New Game
        </button>
      </NavLink>
      <NavLink to="/settings">
        <button className="bg-secondary">Settings</button>
      </NavLink>
      {/* 
      <div className="colorArrayTest flex font-bold font-shadow-md">
        <div className="player1 w-20 rounded-full">...</div>
        <div className="player2 w-20 rounded-full">...</div>
        <div className="player3 w-20 rounded-full">...</div>
        <div className="player4 w-20 rounded-full">...</div>
        <div className="player5 w-20 rounded-full">...</div>
        <div className="player6 w-20 rounded-full">...</div>
        <div className="player7 w-20 rounded-full">...</div>
        <div className="player8 w-20 rounded-full">...</div>
        <div className="player9  w-20 rounded-full">...</div>
        <div className="player10 w-20 rounded-full">...</div>
        <div className="player11 w-20 rounded-full">...</div>
        <div className="player12 w-20 rounded-full">...</div>
        <div className="player13 w-20 rounded-full">...</div>
        <div className="player14 w-20 rounded-full">...</div>
        <div className="player15 w-20 rounded-full">...</div>
        <div className="player16 w-20 rounded-full">...</div>
        <div className="player17 w-20 rounded-full">...</div>
        <div className="player18 w-20 rounded-full">...</div>
      </div> */}
      <Footer />
    </div>
  );
};
