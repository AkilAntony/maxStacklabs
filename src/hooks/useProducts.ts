import { useEffect, useState } from "react";
import type { ProductResponse } from "../types/product";

export const useProductss = ({
  maxItem,
  pageNo,
  searchInput,
}: {
  pageNo?: number;
  searchInput?: string;
  maxItem?: number;
}) => {
  const [data, setData] = useState<ProductResponse>();
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState("");

  const getProducts = async () => {
    try {
      setisLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${searchInput}&limit=${maxItem ?? 10}&skip=10`,
      );

      const products: ProductResponse = await response.json();
      setData(products);
      console.log(products);
    } catch (err: any) {
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [pageNo, searchInput]);

  return {
    data,
    isLoading,
    error,
  };
};
