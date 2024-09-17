import React from "react";
import { NavLink } from "react-router-dom";
import Bot from "../ChatBot/Bot";

export default function Navbar() {
  return (
    <nav className="flex shadow-green-500 w-full h-16 shadow-sm bg-white items-center justify-between">
      <div className="flex items-center">
        <NavLink to="/">
          <img src="/images/logo.png" alt="/" className="w-40" />
        </NavLink>
        <ul className="flex ml-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `ml-4 font-bold ${isActive ? "text-green-500" : "text-black"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ngo"
              className={({ isActive }) =>
                `ml-4 font-bold ${isActive ? "text-green-500" : "text-black"}`
              }
            >
              NGOs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/community"
              className={({ isActive }) =>
                `ml-4 font-bold ${isActive ? "text-green-500" : "text-black"}`
              }
            >
              Community
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/analysis"
              className={({ isActive }) =>
                `ml-4 font-bold ${isActive ? "text-green-500" : "text-black"}`
              }
            >
              Get Analysed
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="m-2">
        <NavLink to="/authenticate">
          <button className="border-green-500 border-2 rounded-xl w-max px-2 py-1 hover:bg-green-500 hover:text-white font-semibold">
            LOGIN | SIGNUP
          </button>
        </NavLink>
      </div>
      <div className="fixed bottom-2 right-2 ">
        <Bot />
      </div>
    </nav>
  );
}
