/* eslint-disable react/prop-types */
export function Button({ onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full mt-4 text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  me-2 mb-2 "
    >
      {label}
    </button>
  );
}
