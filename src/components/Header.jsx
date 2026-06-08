import { useEffect, useState } from "react";
import "../css/Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      <header
        className={`header ${
          scrolled ? "active" : ""
        }`}
      >
        <div className="container header-inner">

          <div className="logo">
            DRIVE<span>RANGER</span>
          </div>

          <nav className="nav-menu">
            <a href="#">Home</a>
            <a href="#products">Products</a>
            <a href="#">Build</a>
            <a href="#">Gallery</a>
            <a href="#">Contact</a>
          </nav>

          <button className="header-btn">
            Build Your Rig
          </button>

          <div
            className={`hamburger ${
              menuOpen ? "active" : ""
            }`}
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </header>

      <div
        className={`mobile-menu ${
          menuOpen ? "show" : ""
        }`}
      >
        <a href="#">Home</a>
        <a href="#products">Products</a>
        <a href="#">Build</a>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
      </div>
    </>
  );
};

export default Header;