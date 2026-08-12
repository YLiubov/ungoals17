import unGoalsLogo from "../assets/images/Logo.svg";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header>
      <img
        src={unGoalsLogo}
        alt="FN's Verdensmål"
      />

      <Navbar />
    </header>
  );
};