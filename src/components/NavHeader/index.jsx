import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavHeaderStyle } from "./style";
import { useEffect, useState } from "react";
import useScrollPosition from "../../hooks/scroll";

const NavHeader = () => {
  const [backgroundHeader, setBackgroundHeader] = useState("none");

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition >= 200) {
      setBackgroundHeader("black");
    } else if (scrollPosition < 200) {
      setBackgroundHeader("none");
    }
  }, []);
  return (
    <NavHeaderStyle backgroundHeader={backgroundHeader}>
      <nav className="nav-bar">
        <h2
          className="nav-items"
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
        >
          HOME
        </h2>
        <h2 className="nav-items">WORK</h2>
        <h2 className="nav-items">ABOUT</h2>
        <h2 className="nav-items">CONTACT</h2>
      </nav>
      <div className="div-icons">
        <IconButton
          onClick={() => {
            window.open("https://github.com/Axeellima");
          }}
        >
          <GitHubIcon sx={{ fontSize: 35, color: "white" }} />
        </IconButton>
        <IconButton
          onClick={() => {
            window.open("https://www.instagram.com/axellima_/");
          }}
        >
          <InstagramIcon sx={{ fontSize: 38, color: "white" }} />
        </IconButton>
        <IconButton
          onClick={() => {
            window.open("https://www.linkedin.com/in/axeellima/");
          }}
        >
          <LinkedInIcon sx={{ fontSize: 38, color: "white" }} />
        </IconButton>
      </div>
    </NavHeaderStyle>
  );
};

export default NavHeader;
