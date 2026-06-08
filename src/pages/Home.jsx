import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories";
import ProductShowcase from "../components/ProductShowcase";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

import "../css/Home.css";
import GallerySection from "../components/GallerySection ";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedCategories />
      <ProductShowcase />
      <GallerySection/>
      <StatsSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default Home;