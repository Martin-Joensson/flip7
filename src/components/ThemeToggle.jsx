import React from "react";
import { useTheme } from "../hooks/useTheme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

export const ThemeToggle = () => {
  const { isDark, toggle } = useTheme();
  return (
    <button
      alt="Toggle button for light and dark themes."
      onClick={toggle}
      className="ThemeToggle rounded-xl border px-4 py-2 text-sm text-gray-800  hover:border-accent
         dark:text-gray-100 transition-colors duration-300"
    >
      {isDark ? (
        <FontAwesomeIcon icon="fa-solid fa-sun" />
      ) : (
        <FontAwesomeIcon icon="fa-solid fa-moon" />
      )}
    </button>
  );
};
