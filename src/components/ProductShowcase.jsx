import { motion } from "framer-motion";
import "../css/ProductShowcase.css";

const products = [
  {
    title: "Titan Front Bumper",
    desc: "Heavy-duty steel bumper engineered for maximum protection.",
    image: "/images/bumper2.jpg"
  },

  {
    title: "Expedition Roof Rack",
    desc: "Adventure-ready roof storage system.",
    image: "/images/roof.webp"
  },

  {
    title: "Rock Armor Sliders",
    desc: "Premium side protection for serious trails.",
    image: "/images/rock2.webp"
  },

  {
    title: "Underbody Skid Plate",
    desc: "Maximum protection for critical components.",
    image: "/images/skid2.jpg"
  }
];
const ProductShowcase = () => {
  return (
    <section className="products">

      <div className="section-header">
        <span>FEATURED PRODUCTS</span>

        <h2>
          PREMIUM
          COLLECTION
        </h2>
      </div>

      {products.map((item, index) => (
        <motion.div
          className={`product-row ${
            index % 2 === 1
              ? "reverse"
              : ""
          }`}
          key={index}
          initial={{
            opacity: 0,
            y: 100
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
        >
          <div className="product-image">
            <img
  src={item.image}
  alt={item.title}
/>
          </div>

          <div className="product-content">

            <span>
              0{index + 1}
            </span>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.desc}
            </p>

            <button>
              Explore Product
            </button>

          </div>
        </motion.div>
      ))}

    </section>
  );
};

export default ProductShowcase;