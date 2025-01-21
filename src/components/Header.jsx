import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);
  console.log("Theme from theme context=> ", theme);

  return (
    <header
      className={`text-gray-600 body-font ${
        theme === "dark" ? "bg-gray-800 text-white " : "bg-white text-gray-900 "
      } `}
    >
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <img
            src={
              "https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
            }
            className="h-10 w-10 rounded-full"
          />
          <span className="ml-3 text-xl">Header</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to={"contactus"} className="mr-5">
            Contact Us
          </Link>
          <Link to={"about"} className={`mr-5`}>
            About Us
          </Link>
        </nav>
        <Button onPress={() => navigate("/auth")} label={"Login"} />
        <Button
          onPress={() => setTheme(theme === "light" ? "dark" : "light")}
          label={theme === "light" ? "Dark" : "Light"}
        />
      </div>
    </header>
  );
}

export default Header;
