import React from "react";
import MainWrapper from "../Wrapper/MainWrapper";
import education from "../data/educationData";

const EducationPage = () => {
  return (
    <>
      <MainWrapper>
        <div className="w-[95%] md:w-[85%] lg:w-[70%] xl:w-[1300px]  bg-slate-100 mx-auto flex flex-col gap-4 flex-wrap">
          <h2 className="text-center text-2xl md:text-5xl font-bold text-green-500">
            Farmer Education
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {education.map((item, index) => {
              return (
                <div className="w-[100%] md:w-[45%] p-1 bg-green h-[350px]" key={index}>
                  <iframe
                    width="560"
                    height="315"
                    src={item.link}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    className="w-[100%] h-[100%]"
                  ></iframe>
                </div>
              );
            })}
          </div>
        </div>
      </MainWrapper>
    </>
  );
};

export default EducationPage;
