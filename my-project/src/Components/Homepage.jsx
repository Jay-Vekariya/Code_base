import React from "react";

const Homepage = () => {
  return (
    <div className=" bg-sky-950 h-[700px] ">
      {/* Website Logo  & Company Name*/}
      <div className="flex h-24 items-center">
        <img className="h-20" src="Images/WBLogo.jpg" />
        <h2 className=" text-white font-serif text-lg">Maharshi Care</h2>
      </div>

      {/*What Company does? */}
      <div className="flex flex-row justify-between">
        <div className="p-[60px] max-w-[750px] text-white font-serif flex flex-col gap-6 justify-center">
          <p className=" text-[40px] text-wrap">
            Experience the future of healthcare with our innovative app
          </p>
          <p className="text-[25px]">
            Empowering you to take control of your well-being like never before.
            Download now and embark on a journey to a healthier, happier you.
          </p>
        </div>

        <div className="h-[600px] felx flex-col justify-center lg:flex lg:justify-center lg:flex-col md:flex md:justify-center md:flex-col sm:flex sm:justify-center sm:flex-col">
          <img
            className="object-fill xl:h-[500px] justify-end"
            src="Images/WB_Main_Image.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
