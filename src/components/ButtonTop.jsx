import React from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

export default function ButtonTop() {
  return (
    <div className="w-20 h-20 m-2 p-2 float-right">
      <a href="#" alt="retourner en haut de la page">
        <button
          type="button"
          className="animate-bounce m-2 relative w-12 h-12 inline-flex items-center justify-center overflow-y-hidden text-sm font-medium text-gray-900 rounded-lg group"
        >
          <KeyboardDoubleArrowUpIcon fontSize="large"/>
        </button>
      </a>
    </div>
  );
}
