import React from "react";
import logo from "../assets/flip7logo.webp";
import { NavLink } from "react-router-dom";

export const Start = () => {
  return (
    <div className="flex flex-col">
      <img className="w-1/2 m-auto" src={logo} />
      <h1>Flip 7 Score App</h1>
      <button>New Game</button>
      <NavLink
        to="/settings
      "
      >
        <button>Settings</button>
      </NavLink>

      <div className="colorArrayTest font-bold font-shadow-md">
        <div className="player1 w-20 rounded-full">Test</div>
        <div className="player2 w-20 rounded-full">Test</div>
        <div className="player3 w-20 rounded-full">Test</div>
        <div className="player4 w-20 rounded-full">Test</div>
        <div className="player5 w-20 rounded-full">Test</div>
        <div className="player6 w-20 rounded-full">Test</div>
        <div className="player7 w-20 rounded-full">Test</div>
        <div className="player8 w-20 rounded-full">Test</div>
        <div className="player9  w-20 rounded-full">Test</div>
        <div className="player10 w-20 rounded-full">Test</div>
        <div className="player11 w-20 rounded-full">Test</div>
        <div className="player12 w-20 rounded-full">Test</div>
        <div className="player13 w-20 rounded-full">Test</div>
        <div className="player14 w-20 rounded-full">Test</div>
        <div className="player15 w-20 rounded-full">Test</div>
        <div className="player16 w-20 rounded-full">Test</div>
        <div className="player17 w-20 rounded-full">Test</div>
        <div className="player18 w-20 rounded-full">Test</div>
      </div>
    </div>
  );
};
