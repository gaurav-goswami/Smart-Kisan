import React from "react";

const TrustedCard = ({paragraph, order, paraOrder, image}) => {
  return (
    <>
      <div className="flex w-full p-2 justify-between gap-4 flex-col md:flex-row">
        <div className={`w-[100%] md:w-[40%] h-[250px] order-${order}`}>
          <img
            src={image}
            alt="image"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className={`p-2 w-[100%] md:w-[60%] order-${paraOrder}`}>
          <p className="text-lg md:text-xl font-semibold leading-relaxed text-gray-600">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default TrustedCard;
