import { motion } from "framer-motion";
import "../css/GallerySection.css";

const images = [
  "/gallery/one.jpeg",
  "/gallery/two.jpg",
  "/gallery/three.jpeg",
  "/gallery/four.jpg",
//   "/images/gallery/gallery-5.jpg",
];

const GallerySection = () => {
  return (
    <section className="gallery-section">

      <div className="gallery-header">
        <span>ADVENTURE GALLERY</span>

        <h2>
          BUILT FOR
          EVERY TERRAIN
        </h2>
      </div>

      <motion.div
        className="gallery-track"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((img, index) => (
          <div
            className="gallery-card"
            key={index}
          >
            <img
              src={img}
              alt=""
            />
          </div>
        ))}
      </motion.div>

    </section>
  );
};

export default GallerySection;