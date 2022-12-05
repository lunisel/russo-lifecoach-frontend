import { useEffect, useState } from "react";
import logo from "../../assets/big-logo.png";
import { FaStream, FaTimes } from "react-icons/fa";
import "./styles.css";
import BtnRounded from "../atoms/btn-rounded/BtnRounded";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [vw, setVW] = useState(window.innerWidth);
  const [navOpen, setNavOpen] = useState(false);

  const navigate = useNavigate();

  const updateWindowDimensions = () => {
    const newWidth = window.innerWidth;
    setVW(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
  }, []);

  const renderNavBottons = () => {
    return (
      <div className="nav-button" onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? <FaTimes /> : <FaStream />}
      </div>
    );
  };

  const onClick = () => {
    navigate("/contattami");
  };

  return (
    <nav className="nav-container">
      <div className="container navbar">
        <div className="logo-container">
          <img src={logo} alt="coaching-on-life-logo" />
        </div>
        {vw <= 800 ? renderNavBottons() : null}
        {vw <= 800 ? (
          <div className={navOpen ? "links-container small" : "d-none"}>
            <a href="/">Home</a>
            <a href="#chi-sono">Chi sono</a>
            <a href="#percorsi">Piani</a>
            <a href="/blog">Blog</a>
            <BtnRounded
              text="Contattami"
              color="bg-light-blue"
              functionClick={onClick}
            />
          </div>
        ) : (
          <div className="links-container">
            <a href="/">Home</a>
            <a href="#chi-sono">Chi sono</a>
            <a href="#percorsi">Piani</a>
            <a href="/blog">Blog</a>
            <BtnRounded
              text="Contattami"
              color="bg-light-blue"
              functionClick={onClick}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
