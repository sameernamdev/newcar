import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div>
          <h2>
            4X4 ELITE
          </h2>

          <p>
            Premium off-road accessories
            built for serious explorers.
          </p>
        </div>

        <div className="footer-links">
          <a href="#">Products</a>
          <a href="#">Build</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 4X4 ELITE. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;