import { motion } from "framer-motion";
import "../css/StatsSection.css";

const stats = [
  {
    number: "150K+",
    text: "Accessories Installed"
  },
  {
    number: "50+",
    text: "Vehicle Platforms"
  },
  {
    number: "99%",
    text: "Customer Satisfaction"
  },
  {
    number: "20+",
    text: "Countries Served"
  }
];

const StatsSection = () => {
  return (
    <section className="stats">

      <div className="stats-header">
        <span>OUR IMPACT</span>

        <h2>
          TRUSTED BY
          OFF-ROAD ENTHUSIASTS
        </h2>
      </div>

      <div className="stats-grid">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="stat-card"
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
          >
            <h3>{item.number}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default StatsSection;