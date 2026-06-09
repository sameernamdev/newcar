import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <h2>DRIVE <span style={{color:"#b8860b"}}>RANGER</span></h2>

          <p>
            Premium off-road accessories and
            expedition equipment built for
            serious adventurers.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>

          <a href="#">Home</a>
          <a href="#products">Products</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-column">
          <h4>Categories</h4>

          <a href="#">Front Bumpers</a>
          <a href="#">Roof Racks</a>
          <a href="#">Rock Sliders</a>
          <a href="#">Lighting</a>
        </div>

        <div className="footer-column">
          <h4>Newsletter</h4>

          <p>
            Get updates about new products
            and adventures.
          </p>

          <div className="footer-newsletter">
            <input
              type="email"
              placeholder="Your Email"
            />

            <button>
              Join
            </button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 DRIVE RANGER. All Rights Reserved. <br />Designed by <a href="https://skyinfogroup.com/" style={{color:"blue"}}>@skyinfo</a>
        </p>

        <div className="footer-socials">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">YouTube</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;