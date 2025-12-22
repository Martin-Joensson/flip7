export const ToggleSwitch = ({
  checked,
  onChange,
  color1,
    color2,
  border,
  size = "md",
}) => {
  // Size classes
  const sizes = {
    sm: { w: "w-8", h: "h-4", knob: "w-2 h-2", translate: "translate-x-4" },
    md: { w: "w-14", h: "h-7", knob: "w-5 h-5", translate: "translate-x-7" },
    lg: { w: "w-20", h: "h-10", knob: "w-8 h-8", translate: "translate-x-10" },
  };

  const s = sizes[size] || sizes.md;

    const bgColor1 = color1 || "bg-flip7-teal";
    const bgColor2 = color2 || "bg-gray-300";

    const frame = border || ""

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
                    ${checked ? bgColor1 : bgColor2} ${border ? "border rounded-full" : null}`}
      ></span>
      <span
        className={`absolute bg-white rounded-full transition-transform duration-200
                    ${s.knob} left-1 top-1
                    ${checked ? s.translate : ""}`}
      ></span>
    </label>
  );
};
