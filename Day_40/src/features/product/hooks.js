import { useSelector } from "react-redux";

/* Bước 14: Lấy ra selector */
export const useProducts = () => {
    const products = useSelector((state) => state.product.items);
    return products;
};
