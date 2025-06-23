import Banner from "../features/home/Banner";
import ScreenCap from "../layout/ScreenCap";
import ProductsSection from "../features/home/ProductsSection";
import TrendingProductsSection from "../features/home/TrendingProductsSection";
import VisionSection from "../features/home/VisionSection";
import UseProducts from "../Hooks/UseProducts";

const HomePage = () => {
  // use products hook to fetch products incase homepage has to be dynamic
  const {products, loading, error} = UseProducts();
  
  return (
    <div className="flex flex-col justify-between pt-[73px]">
      <Banner/>
      <ScreenCap>
        <div className="my-24 space-y-24 max-lg:px-4">
          <ProductsSection/>
          <TrendingProductsSection/>
          <VisionSection/>
        </div>
      </ScreenCap>
      
    </div>
  );
};

export default HomePage;
