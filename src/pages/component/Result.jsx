import React from "react";

const Result = ({ generatedText, sendTo, sender }) => {
  return (
    <div className="pt-14">
      <div className="flex justify-center items-center relative flex-col">
        <div className="">
          <img src="cupid.jpg" alt="" className="heart" />
        </div>
        <div className=" h-ful absolute top-40 ">
          <div className=" flex flex-row w-full relative">
            {/* <div className="w-[500px] rotate-45 absolute left-0">
              <span className="flex justify-start items-center flex-col relative">
                <img
                  src="heart.png"
                  alt=""
                  className={`relative object-contain w-full h-full`}
                />
              </span>
            </div> */}

            <div className="w-[700px]">
              <div className="flex justify-center items-center flex-col relative">
                <img
                  src="heart.png"
                  alt=""
                  className={`relative object-contain w-full h-full ${
                    !generatedText ? "-z-10" : "z-10"
                  }`}
                />
                <div className="absolute inset-0 flex items-center justify-center flex-col z-10">
                  <h1 className="text-black font-bold font-Epilogue text-2xl">
                    Dear {sendTo},
                  </h1>
                  {/* <p className="text-xl text-white">{generatedText}</p> */}
                  <p className=" mx-auto px-24 mb-4 mt-2 text-black text-xl tracking-wider">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Magnam ex repellendus rem iure magni quibusdam reiciendis
                    aut tenetur recusandae accusantium?
                  </p>
                  <button className="bg-[#ef7d98] hover:bg-[#AE4661] text-black py-3 px-9 rounded-3xl text-base font-medium">
                    Send it
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="w-[500px] -rotate-45 absolute rig">
              <span className="flex justify-start items-center flex-col relative">
                <img
                  src="heart.png"
                  alt=""
                  className={`relative object-contain w-full h-full`}
                />
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
