// services/ProductService.ts
import http from "../../common/common";
import { IProductData } from "../../types/types";

const getAll = async () => {
  try {
    const response = await http.get<IProductData[]>("/products");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};

const getProductById = async (id: number) => {
  try {
    const response = await http.get<IProductData>(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch product with ID ${id}:`, error);
    throw error;
  }
};

const createProduct = async (data: IProductData) => {
  try {
    const response = await http.post<IProductData>("/products", data);
    return response.data;
  } catch (error) {
    console.error("Failed to create product:", error);
    throw error;
  }
};

const updateProduct = async (id: number, data: IProductData) => {
  try {
    const response = await http.put<IProductData>(`/products/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Failed to update product with ID ${id}:`, error);
    throw error;
  }
};

const removeProductById = async (id: number) => {
  try {
    await http.delete(`/products/${id}`);
  } catch (error) {
    console.error(`Failed to delete product with ID ${id}:`, error);
    throw error;
  }
};

const ProductService = {
  getAll,
  getProductById,
  createProduct,
  updateProduct,
  removeProductById,
};

export default ProductService;
