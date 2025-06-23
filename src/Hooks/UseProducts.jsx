import { useState,useEffect } from "react";
import { CustomLogger } from "../utils/customLogger";

const UseProducts = () => {
    const [products, setProducts] = useState([]);
    const [groupedProducts,setGroupedProducts] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {

                const response = await fetch('/data/data.json');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                CustomLogger('======products===',data)
                groupProduct(data)
                setProducts(data);  

            } catch (error) {
                CustomLogger("error occured in useProducts",error)
                // TODO: Implement custom toaster

            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const groupProduct = (products)=>{
        const data = {}
        
        products.forEach((product)=>{
            if(data[product.category]){
                data[product.category].push(product)
            }else{
                data[product.category]=[product]
            }
        })
        CustomLogger('=======grouped data headphones======',data['headphones'])
        setGroupedProducts(data)
        return data

    }

    const filterData =(category)=>{
        const data = products.filter((product)=>product.category===category)
        return data
    }

    const findProduct =(slug)=>{
        CustomLogger('====find product slug====',slug)
        const data = products.find((product)=>product.slug===slug)
        return data
    }



    return {filterData,groupProduct, products,groupedProducts, loading, error,findProduct };
}

export default UseProducts;