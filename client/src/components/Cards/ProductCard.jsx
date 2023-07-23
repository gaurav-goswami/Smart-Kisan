import React from "react";
import { ImLocation } from "react-icons/im";
import simplifyDate from "../../utils/simplifyDate";

const ProductCard = ({
  image,
  createdAt,
  commodityName,
  rate,
  seller,
  stock,
  minimumQuantity
}) => {

  const date = simplifyDate(createdAt);
  return (
    <>
      <div className="md:w-[270px] p-0.5 bg-gray-200 flex flex-col max-[450px]:w-[70%] w-[45%] h-[400px] md:h-auto">
        <div className="w-full overflow-hidden">
          <img
            src={image}
            alt="product-image"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col gap-1 p-2">
          <p>Posted on : {date}</p>
          <p>Commodity : {commodityName}</p>
          <p>Price : {rate} Rs. per kg</p>
          <p>Min. Qty : {minimumQuantity} kg</p>
          <p>Stock : {stock} kg</p>
          <p>Seller : {seller.firstName} {seller.lastName}</p>
          <p className="inline-flex items-center mt-2 text-green-500">
            <ImLocation className="text-xl" /> {seller.state}, {seller.city}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
