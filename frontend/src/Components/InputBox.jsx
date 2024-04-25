/* eslint-disable react/prop-types */
export function InputBox({ placeholder, label }) {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <input
        placeholder={placeholder}
        className=" w-full px-2 py-1 border rounded-slate-200"
      />
    </div>
  );
}
