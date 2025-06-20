import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate,  useParams,  useSearchParams  } from "react-router-dom";
import ProductsSection from "../features/home/ProductsSection";
import ScreenCap from "../layout/ScreenCap";
import VisionSection from "../features/home/VisionSection";
import UseProducts from "../Hooks/UseProducts";
import ProductDetailsSection from '../features/products/ProductDetailsSection'


const ProductsDetailsPage = () => {
  const {findProduct,loading} = UseProducts()
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const {slug} = useParams();
  console.log('====slug====')
  console.log(slug)
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = findProduct(slug)
        console.log("===Found product===");
        console.log(response);
        setProduct(response)
      } catch (error) {
        console.log(error, error);
      }
      
    };

    fetchData();
  }, [loading,slug]);

  return (
    <div className="flex flex-col justify-between">

      <ScreenCap>
        <div className="my-24 space-y-24 max-lg:px-4">
          {(loading)? <p>Loading.....</p>:product==null?<div>Product not found</div>:<ProductDetailsSection product={product} />}
          <ProductsSection/>
          <VisionSection/>
        </div>
      </ScreenCap>
      {/* <Footer table={table} /> */}
    </div>
  );
};

export default ProductsDetailsPage;
