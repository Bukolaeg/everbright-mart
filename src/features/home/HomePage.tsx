import Hero from "../../components/home/Hero";
import Categories from "../../components/home/Categories";
import PromoBanner from "../../components/home/PromoBanner";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import WhyChooseUs from "../../components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <PromoBanner />
      <FeaturedProducts />
      <WhyChooseUs />
    </>
  );
}