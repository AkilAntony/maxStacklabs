interface Props {
  imageUrl: string;
  productName: string;
  price: number;
  rating: number;
  category: string;
}

const ProductCard = ({
  imageUrl,
  category,
  price,
  productName,
  rating,
}: Props) => {
  return (
    <div className=" p-3 bg-gray-200 hover:border hover:border-gray-400 rounded-[20px]">
      <div
        className=" relative  flex 
    flex-col justify-center items-center 
    "
      >
        <img
          height={200}
          width={200}
          className="object-cover"
          src={imageUrl}
          alt={productName}
          loading="lazy"
        />

        <div className="flex w-full  justify-between">
          <p className="font-medium text-black text-wrap">
            {productName ?? "No Name"}
          </p>

          <p className="font-bold text-[16px] ">₹ {price}</p>
        </div>

        <div
          className="absolute top-1 right-2 text-[10px]
       bg-green-200 text-green-600 rounded-full  py-1 px-4 border border-green-600 h-6"
        >
          {category}
        </div>
      </div>
      <p className="text-[14px] text-gray-600 mt-1">Rating : {rating} / 5</p>
    </div>
  );
};

export default ProductCard;
