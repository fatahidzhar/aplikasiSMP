import React from "react";

export default function ButtonBase({ type, className, children }) {
  return (
    <button
      type={type}
      className={`${className} px-5 py-2.5 text-sm font-medium`}>
      {children}
    </button>
  );
}
