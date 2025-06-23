import { useEffect, useState } from "react";
import { useNavigate,  useParams  } from "react-router-dom";
import ProductsSection from "../features/home/ProductsSection";
import ScreenCap from "../layout/ScreenCap";
import VisionSection from "../features/home/VisionSection";
import UseProducts from "../Hooks/UseProducts";
import ProductDetailsSection from '../features/products/ProductDetailsSection'
import TertiaryButton from "../components/TertiaryButton";
import { CustomLogger } from "../utils/customLogger";


const ProductsDetailsPage = () => {
  const {findProduct,loading} = UseProducts()
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const {slug} = useParams();
  CustomLogger('====slug====',slug)
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = findProduct(slug)
        CustomLogger("===Found product===",response);
        setProduct(response)
      } catch (error) {
        CustomLogger('error', error);
      }
      
    };

    fetchData();
  }, [loading,slug]);

  const handleBackNavigation = (e)=>{
    e.preventDefault()
    navigate(-1)

  }

  return (
    <div className="flex flex-col justify-between pt-[73px]">
      <ScreenCap>      

        <div className="mt-10 mb-24 space-y-16 max-lg:px-4">      
          <TertiaryButton onClick={handleBackNavigation} label={"Go Back"} hasIcon={false} isUpperCase={false} isFullWidth={false} />
          {(loading)? <p>Loading.....</p>:product==null?<div>Product not found</div>:<ProductDetailsSection product={product} />}
          <ProductsSection/>
          <VisionSection/>
        </div>
      </ScreenCap>
    </div>
  );
};

export default ProductsDetailsPage;
