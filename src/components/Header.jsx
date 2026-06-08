import { useEffect, useState } from "react";
import "../css/Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
    <header
      className={`header ${
        scrolled ? "active" : ""
      }`}
    >
      <div className="container header-inner">

        <div className="logo">
          4X4<span>ELITE</span>
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

      </div>
    </header>
  );
};

export default Header;