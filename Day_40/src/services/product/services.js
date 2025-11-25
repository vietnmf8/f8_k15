import httpRequest from "@/utils/httpRequest";

export const getProducts = async () => {
    const response = await httpRequest.get("/products");
    return response;
};
