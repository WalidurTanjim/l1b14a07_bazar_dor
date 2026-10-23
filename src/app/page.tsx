import Banner from "@/components/Banner/Banner";
import AllProducts from "@/components/Products/AllProducts/AllProducts";
import DecreaseProducts from "@/components/Products/DecreaseProducts/DecreaseProducts";
import IncreaseProducts from "@/components/Products/IncreaseProducts/IncreaseProducts";

export default function Home() {
  return (
    <section className="bazar-dor">
      <Banner />
      <IncreaseProducts />
      <DecreaseProducts />
      <AllProducts />
    </section>
  );
} 
