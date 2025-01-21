import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Button({ label, borderColor, bgColor, onPress, txtColor }) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={onPress}
      className={`border  ${borderColor ? borderColor : "border-blue-400"} ${
        theme === "dark"
          ? bgColor
            ? bgColor
            : "bg-white"
          : bgColor
          ? bgColor
          : "bg-gray-400"
      }  ${txtColor ? txtColor : "text-black"}   rounded-md p-1 px-4 m-4`}
    >
      {label}
    </button>
  );
}

export default Button;
