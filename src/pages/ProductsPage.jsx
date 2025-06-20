import { useEffect, useState } from "react";
import { useNavigate,  useSearchParams  } from "react-router-dom";
import ProductsSection from "../features/home/ProductsSection";
import ScreenCap from "../layout/ScreenCap";
import VisionSection from "../features/home/VisionSection";
import CatergoryBanner from "../components/CatergoryBanner";
import UseProducts from "../Hooks/UseProducts";
import CategoryProductsSection from "../features/products/CategoryProductsSection";

const ProductsPage = () => {
  const {products,groupedProducts, loading, error} = UseProducts();
  const navigate = useNavigate();
  let [searchParams, setSearchParams]=  useSearchParams ();
  const category = searchParams.get('category');

  return (
    <div className="flex flex-col justify-between">
        <CatergoryBanner categoryName={category}/>
        
        <ScreenCap>        

          <div className="my-24 space-y-24 max-lg:px-4"> 
            {(loading&&groupedProducts==null)? <p>Loading.....</p>:<CategoryProductsSection data={groupedProducts[category]}/>}
            <ProductsSection/>
            <VisionSection/>
          </div>
        </ScreenCap>
    </div>
  );
};

export default ProductsPage;
