import { useState,useEffect } from "react";
const UseProducts = () => {
    const [products, setProducts] = useState([]);
    const [groupedProducts,setGroupedProducts] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 3000));

                const response = await fetch('/data/data.json');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                console.log('======products===')
                console.log(data)
                groupProduct(data)
                setProducts(data);  

            } catch (error) {
                console.log("error occured in useProducts")
                console.log(error)
                // TODO: Implement custom toaster

            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const groupProduct = (products)=>{
        const data = {}
        products.map((product)=>{
            if(data[product.category]){
                data[product.category].push(product)
            }else{
                data[product.category]=[product]
            }
        })
        console.log('=======grouped data======')
        console.log(data['headphones'])
        setGroupedProducts(data)
        return data

    }

    const filterData =(category)=>{
        const data = products.filter((product)=>product.category===category)
        return data
    }

    const findProduct =(slug)=>{
        console.log('====find product slug====')
        console.log(slug)
        console.log(products)
        const data = products.find((product)=>product.slug===slug)
        return data
    }



    return {filterData,groupProduct,groupedProducts, products,groupedProducts, loading, error,findProduct };
}

export default UseProducts;