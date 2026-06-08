import { motion } from "framer-motion";
import "../css/Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="container hero-wrapper">

        <motion.div
          className="hero-content"
          initial={{
            opacity: 0,
            y: 80
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1
          }}
        >
          <p className="hero-tag">
            PREMIUM OFF-ROAD ENGINEERING
          </p>

          <h1>
            BUILT FOR
            <br />
            THE WILD
          </h1>

          <span>
            Premium bumpers, armor systems,
            roof racks and expedition gear
            designed for explorers who
            demand more from every journey.
          </span>

          <div className="hero-buttons">

            <button className="hero-primary">
              Explore Collection
            </button>

            <button className="hero-secondary">
              Build Your Rig
            </button>

          </div>

          <div className="hero-stats">

            <div>
              <h3>150K+</h3>
              <p>Accessories Installed</p>
            </div>

            <div>
              <h3>50+</h3>
              <p>Vehicle Platforms</p>
            </div>

          </div>

        </motion.div>

        <motion.div
          className="hero-media"
          initial={{
            opacity: 0,
            x: 100
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 1.2
          }}
        >

          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
          >
            <source
              src="/videos/vid.mp4"
              type="video/mp4"
            />
          </video>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;