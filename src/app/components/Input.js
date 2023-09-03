"use client";

export default function Input({
  id,
  type,
  disable,
  required,
  placeholder,
  nameClass,
}) {
  return (
    <div>
      <input
        id={id}
        type={type}
        disabled={disable}
        required={required}
        placeholder={placeholder}
        className={`${nameClass} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
      />
    </div>
  );
}
