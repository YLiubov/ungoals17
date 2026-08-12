import logo from "../assets/images/Logo.svg";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header
      style={{
        width: "80%",
        margin: "0 auto",
      }}
    >
      <img src={logo} alt="FN's Verdensmål" />
      <Navbar />
    </header>
  );
};