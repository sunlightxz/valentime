import React, { useState, useEffect ,useRef} from "react";
import { loveMessagesData } from "../api/messages";
import html2canvas from "html2canvas";

const Result = ({ generatedText, sendTo, sender, keyword }) => {
  const [refreshCount, setRefreshCount] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const resultRef = useRef(null);

  const randomMessage =
    loveMessagesData[Math.floor(Math.random() * loveMessagesData.length)];

  const handleRefreshClick = () => {
    const filteredMessages = loveMessagesData.filter((msg) =>
      msg.message.toLowerCase().includes(keyword.toLowerCase())
    );

    const newMessage =
      filteredMessages[Math.floor(Math.random() * filteredMessages.length)];
    setSelectedMessage(newMessage);
  };

  const handleShareClick = () => {
    html2canvas(resultRef.current, { width: window.innerWidth, height: window.innerHeight }).then((canvas) => {
      const dataURL = canvas.toDataURL('image/png');
      setImageURL(dataURL);
  
      navigator.clipboard.writeText(dataURL)
        .then(() => {
          console.log('Data URL copied to clipboard:', dataURL);
          
        })
        .catch((error) => {
          console.error('Unable to copy to clipboard:', error);
        });
    });
  };
  
  useEffect(() => {
    const filteredMessages = loveMessagesData.filter((msg) =>
      msg.message.toLowerCase().includes(keyword.toLowerCase())
    );

    const foundMessage =
      filteredMessages[Math.floor(Math.random() * filteredMessages.length)];

    setSelectedMessage(foundMessage);
  }, [keyword]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setEyePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const calculateRotation = () => {
      const { left, top, width, height } =
        document.documentElement.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const angle = Math.atan2(
        eyePosition.y - centerY,
        eyePosition.x - centerX
      );
      setRotationAngle((angle * 180) / Math.PI);
    };
    calculateRotation();

    const rotationInterval = setInterval(calculateRotation, 100);
    return () => {
      clearInterval(rotationInterval);
    };
  }, [eyePosition]);

  return (
    <div className="pt-14">
      <div className="flex justify-center items-center relative flex-col" ref={resultRef}>
        <div className="relative heart">
          <span
            className="absolute top-[107px] left-[136px] z-20"
            style={{ transform: `rotate(${rotationAngle}deg)` }}
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="9.16201"
                cy="9.45601"
                r="8.96621"
                fill="white"
              ></circle>
              <circle
                cx="8.98129"
                cy="5.98129"
                r="4.98129"
                fill="#16191C"
              ></circle>
            </svg>
          </span>
          <span
            className="absolute top-[102px] right-[184px] z-20"
            style={{ transform: `rotate(${rotationAngle}deg)` }}
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="9.16201"
                cy="9.45601"
                r="8.96621"
                fill="white"
              ></circle>
              <circle
                cx="8.98129"
                cy="5.98129"
                r="4.98129"
                fill="#16191C"
              ></circle>
            </svg>
          </span>
          <img src="cupid.jpg" alt="" className="" />
        </div>
        <div className=" h-ful absolute top-40 ">
          <div className=" flex flex-row w-full relative">
            <div className="w-[700px]">
              <div className="flex justify-center items-center flex-col relative">
                <img
                  src="heart.png"
                  alt=""
                  className={`relative object-contain w-full h-full ${
                    !generatedText ? "-z-10" : "z-10"
                  }`}
                />
                {generatedText && (
                  <div className="absolute left-0 top-28 right-0 flex items-center justify-center flex-col z-10">
                    <h1 className="text-black font-bold font-Epilogue text-2xl">
                      Dear {sendTo} ,
                    </h1>
                    <p className=" mx-auto px-24 mt-4 mb-6 text-black text-xl tracking-wider">
                      {selectedMessage
                        ? selectedMessage.message
                        : "No message found for the provided keyword."}
                    </p>
                    <div className="flex justify-center items-center gap-4 relative">
                      <button
                        onClick={handleRefreshClick}
                        className="border border-[#EF7C98] rounded-3xl py-2 px-3 hover:border-white hover:bg-[#e3cbe3] transition-all"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 64 64"
                          fill="none"
                          style={{ transition: "fill 0.3s" }}
                          className="text-white"
                        >
                          <path
                            d="M54.6 9.4C48.8 3.6 40.84 0 32 0C14.32 0 0.0400391 14.32 0.0400391 32C0.0400391 49.68 14.32 64 32 64C46.92 64 59.36 53.8 62.92 40H54.6C51.32 49.32 42.44 56 32 56C18.76 56 8.00004 45.24 8.00004 32C8.00004 18.76 18.76 8 32 8C38.64 8 44.56 10.76 48.88 15.12L36 28H64V0L54.6 9.4Z"
                            fill="#EF7C98"
                          />
                        </svg>{" "}
                      </button>
                      <button
                        onClick={handleShareClick}
                        className="bg-[#ef7d98] hover:bg-[#AE4661] hover:text-[#e3cbe3] text-black py-3 px-9 rounded-3xl text-base font-medium flex justify-center items-center"
                      >
                        <img
                          src="share.png"
                          alt=""
                          width={25}
                          className="mr-2"
                        />
                        Send it
                      </button>

                      {/* <div className="share-option ">
                        <div className="social-media w-full h-full">
                          <div className="link-container bg-white w-full relative h-[40px] flex items-center justify-center rounded-3xl overflow-hidden px-0 py-2 ">
                            <p className="w-[80%] h-full leading-10 text-black">{imageURL}</p>
                            <button className="aboslute right-0 bg-black text-white h-full w-[30%] py-4 px-4">Copy link</button>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                )}
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
