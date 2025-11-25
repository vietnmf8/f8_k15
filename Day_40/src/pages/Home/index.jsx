import { useFetchProducts } from "@/services/product/hooks";
import React from "react";


function Home() {
    const { isLoading, products } = useFetchProducts();
    return (
        <div>
            <h1>Home</h1>
            <h2>Product Lists</h2>
            <ul>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    products.map((product) => (
                        <li key={product.id}>
                            {product.id}.{product.title}-{product.price}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default Home;
