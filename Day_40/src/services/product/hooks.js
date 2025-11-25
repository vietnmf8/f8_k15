import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useProducts, actions } from "@/features/product";
import { getProducts } from "./services";

export const useFetchProducts = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const products = useProducts();

    /* Bước 7. Gọi API */
    useEffect(() => {
        (async () => {
            const response = await getProducts();
            console.log(response);
            dispatch(actions.setItems(response.data.items))
            setIsLoading(false)
        })();
    }, [dispatch, setIsLoading]);

    return {
        isLoading,
        products,
    };
};
