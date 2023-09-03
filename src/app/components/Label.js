import React from "react";

export default function Label({ className, children }) {
  return (
    <div>
      <label
        className={`${className} block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>
        {children}
      </label>
    </div>
  );
}
