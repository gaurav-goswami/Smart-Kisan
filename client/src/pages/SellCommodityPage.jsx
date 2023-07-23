import React, { useState } from "react";
import MainWrapper from "../Wrapper/MainWrapper";
import { useNavigate } from "react-router-dom";
import { uploadProduct } from "../lib/Product";
import { useCreateProductMutation } from "../services/ProductApi";

const SellCommodityPage = () => {
  const [productDetails, setProductDetails] = useState({
    commodityName: "",
    rate: "",
    minimumQuantity: "",
    stock: "",
  });

  const [commodityImage, setCommodityImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [createProduct] = useCreateProductMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleUpload = async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append("commodityName", productDetails.commodityName);
    formData.append("rate", productDetails.rate);
    formData.append("minimumQuantity", productDetails.minimumQuantity);
    formData.append("stock", productDetails.stock);
    formData.append("productImage", commodityImage);

    await uploadProduct(createProduct, formData, navigate, setLoading);
  };

  return (
    <>
      <MainWrapper>
        <div className="w-[95%] md:w-[70%] xl:w-[1200px] h-screen  p-4 mx-auto my-2 flex justify-center flex-col items-center gap-4">
          <h2 className="text-xl md:text-5xl font-semibold text-green-700">
            Sell Your Harvest
          </h2>

          <form className="w-[100%] md:w-[50%] xl:w-[50%] flex flex-col gap-3 p-2" onSubmit={handleUpload}>
            <input
              name="commodityName"
              type="text"
              placeholder="Enter product name"
              className="py-2 px-4 outline-none bg-gray-100 placeholder:text-gray-600"
              value={productDetails.commodityName}
              onChange={handleChange}
            />

            <input
              name="rate"
              type="number"
              placeholder="Enter product price (Per kg) "
              className="py-2 px-4 outline-none bg-gray-100 placeholder:text-gray-600"
              value={productDetails.rate}
              onChange={handleChange}
            />

            <input
              name="minimumQuantity"
              type="number"
              placeholder="Enter minimum quantity (kg)"
              className="py-2 px-4 outline-none bg-gray-100 placeholder:text-gray-600"
              value={productDetails.minimumQuantity}
              onChange={handleChange}
            />

            <input
              name="stock"
              type="number"
              placeholder="Enter stock (kg)"
              className="py-2 px-4 outline-none bg-gray-100 placeholder:text-gray-600"
              value={productDetails.stock}
              onChange={handleChange}
            />

            <input
              name="productImage"
              type="file"
              placeholder="Enter stock"
              className="py-2 px-4 outline-none"
              onChange={(e) => setCommodityImage(e.target.files[0])}
            />
            <button
              className="bg-green-400 px-6 py-3 rounded-lg font-semibold"
              type="submit"
              disabled={loading}
            >
              Sell Now
            </button>
          </form>
        </div>
      </MainWrapper>
    </>
  );
};

export default SellCommodityPage;
