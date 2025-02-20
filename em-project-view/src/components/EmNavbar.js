import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

const navbar = () => {
  return (
    <div className="flex bg-slate-800 h-16 px-16 items-center">
      <FontAwesomeIcon
        icon={faAddressCard}
        size="xl"
        style={{ color: "#74C0FC" }}
      />
      <h1 className="text-3xl font-bold text-cyan-500 ml-2">EM-Service</h1>
      <div className="space-x-4 ml-auto">
        <a className="hover:text-cyan-500" href="/">
          Home
        </a>
        <a className="hover:text-cyan-500" href="/">
          Profile
        </a>
        <a className="hover:text-cyan-500" href="/">
          Logout
        </a>
      </div>
    </div>
  );
};

export default navbar;
