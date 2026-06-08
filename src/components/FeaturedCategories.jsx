import { motion } from "framer-motion";
import "../css/FeaturedCategories.css";

const categories = [
  {
    title: "Front Bumpers",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a"
  },
  {
    title: "Roof Racks",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
  },
  {
    title: "Rock Sliders",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
  },
  {
    title: "Armor Systems",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
  },
  {
    title: "Recovery Gear",
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1"
  },
  {
    title: "Lighting",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b"
  }
];

const FeaturedCategories = () => {
  return (
    <section className="categories" id="products">

      <div className="section-header">
        <span>CATEGORIES</span>

        <h2>
          BUILT FOR
          EVERY ADVENTURE
        </h2>
      </div>

      <div className="categories-grid">
        {categories.map((item, index) => (
          <motion.div
            key={index}
            className="category-card"
            whileHover={{
              y: -10
            }}
          >
            <img
              src={item.image}
              alt={item.title}
            />

            <div className="card-overlay"></div>

            <h3>{item.title}</h3>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default FeaturedCategories;