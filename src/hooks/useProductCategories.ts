import { useEffect, useState } from "react";
import { productCategoryEnpoint } from "../services/api";

export const useProductCategories = () => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState("");

  const getProductCategory = async () => {
    try {
      setisLoading(true);
      const response = await fetch(productCategoryEnpoint);
      const categories = await response.json();
      setData(categories);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    getProductCategory();
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};
