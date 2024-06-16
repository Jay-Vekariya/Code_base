import React from "react";

const Homepage = () => {
  return (
    <main className=" bg-sky-950 h-[700px]">
      {/* Website Logo  & Company Name*/}
      <div className="flex h-24 items-center">
        <img className="h-20" src="Images/WBLogo.jpg" />
        <h2 className=" text-white font-serif text-lg">Maharshi Care</h2>
      </div>

      {/*What Company does? */}
      <div className="flex w-full justify-between">
        <div className="p-[60px] max-w-[750px] md:max-w-[600px] text-white font-serif flex flex-col gap-6 justify-center">
          <p className="text-[20px] font-extralight xl:text-[40px] lg:text-[40px] md:text-[30px] sm:text-[15px]  text-wrap xl:text-wrap lg:text-wrap md:text-wrap sm:text-wrap">
            Experience the future of healthcare with our innovative app
          </p>
          <p className="text-[23px]  xl:text-[35px] lg:text-[35px] md:text-[25px] sm:text-[30px]  text-wrap xl:text-wrap lg:text-wrap md:text-wrap sm:text-wrap">
            Empowering you to take control of your well-being like never before.
            Download now and embark on a journey to a healthier, happier you.
          </p>
        </div>

        <div className="h-[600px] felx flex-col justify-center lg:flex lg:justify-center lg:flex-col md:flex md:justify-center md:flex-col sm:flex sm:flex-col place-content-center">
          <img
            className="object-contain h-[700px] xl:h-[500px] lg:h-[450px] lg:object-contain md:h-[400px] md:object-contain sm:h-[380px] sm:object-contain justify-end"
            src="Images/WB_Main_Image.jpg"
          />
        </div>
      </div>
    </main>
  );
};

export default Homepage;
