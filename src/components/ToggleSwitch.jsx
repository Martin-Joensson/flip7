export const ToggleSwitch = ({ checked, onChange, size = "md" }) => {
  // Size classes
  const sizes = {
    sm: { w: "w-10", h: "h-5", knob: "w-3 h-3", translate: "translate-x-5" },
    md: { w: "w-14", h: "h-7", knob: "w-5 h-5", translate: "translate-x-7" },
    lg: { w: "w-20", h: "h-10", knob: "w-8 h-8", translate: "translate-x-10" },
  };

  const s = sizes[size] || sizes.md;

  return (
    <label className={`relative inline-block ${s.w} ${s.h}`}>
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0"
        checked={checked}
        onChange={onChange}
      />
      <span
        className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0  rounded-full transition-colors duration-200
                    ${checked ? "bg-blue-500" : "bg-gray-300"}`}
      ></span>
      <span
        className={`absolute bg-white rounded-full transition-transform duration-200
                    ${s.knob} left-1 top-1
                    ${checked ? s.translate : ""}`}
      ></span>
    </label>
  );
};
