import React from "react";
import { TRUSTED_BY_MESSAGE, TRUSTED_BY_MESSAGE_2 } from "../../data/messages";
import TrustedCard from "./TrustedCard";
import farmerImg1 from "../../assets/farmerImg1.jpg";
import farmerImg2 from "../../assets/farmerImg2.jpg";

const TrustedBySection = () => {
  return (
    <>
      <div className="w-full md:w-[80%] lg:w-[70%] p-2 mx-auto my-4 flex flex-col gap-6">
        <h2 className="uppercase font-extrabold md:text-3xl lg:text-5xl text-center text-white bg-yellow-500 p-4">
          trusted by thousands of farmers 👩‍🌾
        </h2>

        <TrustedCard paragraph={TRUSTED_BY_MESSAGE} order={0} paraOrder={1} image={farmerImg1}/>

        <TrustedCard paragraph={TRUSTED_BY_MESSAGE_2} order={1} paraOrder={0} image={farmerImg2}/>
      </div>
    </>
  );
};

export default TrustedBySection;
