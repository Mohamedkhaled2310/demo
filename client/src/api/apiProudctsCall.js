import axios from "axios";
import { base_url } from "./config";
const RES_FIELDS = "title,description,price,main_image,stock";
const LIMIT = 9;

export const fetchProducts = async (
  active,
  currentPage,
  searchQuery,
  minPrice,
  maxPrice,
  minStock,
  maxStock
) => {
  const cat_id = active === "all" ? "" : active;
  const response = await axios.get(`${base_url}/products`, {
    params: {
      cat_id,
      fields: RES_FIELDS,
      limit: LIMIT,
      page: currentPage,
      search: searchQuery,
      search_field: "title",
      min_price: minPrice,
      max_price: maxPrice,
      min_stock: minStock,
      max_stock: maxStock,
    },
  });
  return response.data;
};

export const fetchCategories = async () => {
  const response = await axios.get(`${base_url}/categories`);
  return response.data;
};
