import { useProductCategories } from "../hooks/useProductCategories";
import { useProductss } from "../hooks/useProducts";
import LayoutWrapper from "../components/common/LayoutWrapper";
import FallbackUI from "../components/common/FallbackUI";
import ProductCard from "../components/ProductCard";
import type { Product } from "../types/product";
import { useMemo, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import SearchBar from "../components/SearchBar";
import Pagintion from "../components/common/Pagintion";

const ProductListing = () => {
  const [userInput, setUserInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const debouncedInput = useDebounce(userInput);

  const { data, error, isLoading } = useProductCategories();

  const {
    data: productData,
    error: productsError,
    isLoading: isProductLoading,
  } = useProductss({
    searchInput: debouncedInput,
    pageNo: currentPage,
  });

  const totalPages = Math.ceil((productData?.total as number) / 10);

  console.log(
    productData?.products.filter(
      (ele) =>
        ele.title.split(" ").join("") ===
        userInput.toLowerCase().split(" ").join(""),
    ),
    "testing",
  );

  if (error || productsError) {
    return (
      <LayoutWrapper>
        <div className="content-wrapper ">
          <FallbackUI message="Failed to Fetch products" />
        </div>
      </LayoutWrapper>
    );
  }

  if (isLoading || isProductLoading) {
    return (
      <LayoutWrapper>
        <div>Loading..</div>
      </LayoutWrapper>
    );
  }

  return (
    <LayoutWrapper contentStyles="justify-start items-start">
      <div className="content-wrapper mx-auto w-full">
        {/* search input */}
        <SearchBar
          setUserInput={setUserInput}
          userInput={userInput}
          placeholder="Search products"
        />

        {/* product Listing  */}
        {productData?.products && productData?.products.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-3 py-10">
            {productData?.products.map((product: Product) => (
              <ProductCard
                imageUrl={product.images[0]}
                price={100}
                productName={product.title}
                key={product.id}
                rating={product.rating}
                category={product.category}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col mt-10 justify-center text-center">
            No Products found
          </div>
        )}

        {/* pagination */}

        <div className="">
          <Pagintion
            totalpages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default ProductListing;
