"use client";

import AppLogo from "./AppLogo";
import { FaAtlassian } from "react-icons/fa6";

function AppNav() {
  const showMsg = () => {
    alert("HI");
  };
  return (
    <div>
      <h1>AppNav</h1>
      <AppLogo />
      <FaAtlassian size={50} />
      <button onClick={showMsg}>Click</button>
    </div>
  );
}

export default AppNav;
