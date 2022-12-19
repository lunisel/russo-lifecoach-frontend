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
    setNavOpen(false);
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
            <a href="/" onClick={() => setNavOpen(false)}>
              Home
            </a>
            <a href="#chi-sono" onClick={() => setNavOpen(false)}>
              Chi sono
            </a>
            <a href="#percorsi" onClick={() => setNavOpen(false)}>
              Piani
            </a>
            <p
              onClick={() => {
                navigate("/blog");
                setNavOpen(false);
              }}
            >
              Blog
            </p>
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
            <p onClick={() => navigate("/blog")}>Blog</p>
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
