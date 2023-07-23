import React from "react";
import MainWrapper from "../Wrapper/MainWrapper";
import cropLabTest from "../assets/cropLabTest.jpg";
import { LAB_MESSAGE } from "../data/messages";


const LabTestPage = () => {
  return (
    <>
      <MainWrapper>
        <div className="w-[95%] min-h-screen md:w-[80%] p-2 mx-auto flex flex-col gap-5">
          <h2 className="text-2xl md:text-5xl font-bold text-center">Lab Test</h2>

          <div className="w-[100%] flex flex-col md:flex-row">
            <div className="w-[100%] lg:w-[50%] h-[400px] p-4 mt-2">
              <img src={cropLabTest} alt="crop lab test image" className="h-full w-full object-cover object-center" />
            </div>

            <p className="w-[100%] lg:w-[50%] p-4 text-lg md:text-xl font-semibold text-gray-700">{LAB_MESSAGE}</p>

          </div>

          <button className='bg-yellow-400 px-6 py-3 rounded-lg font-semibold'>Book a test</button>
          
        </div>
      </MainWrapper>
    </>
  );
};

export default LabTestPage;
