// import React from "react";

const Homepage = () => {
  return (
    <main className=" bg-sky-950">
      {/* Website Logo  & Company Name*/}
      <div className="flex items-center">
        <img className="h-20" src="Images/WBLogo.jpg" />
        <h2 className=" text-white font-serif text-lg">Maharshi Care</h2>
      </div>

      {/*What Company does? */}
      <div className="flex flex-row w-auto justify-between sm:flex sm:justify-between">
        <div className="p-[20px] max-w-[750px] md:max-w-[600px]  text-white font-serif flex flex-col gap-3 justify-center">
          <p className="text-[15px] font-semibold xl:text-[38px] lg:text-[30px] md:text-[25px] sm:text-[23px]  text-wrap xl:text-wrap lg:text-wrap md:text-wrap sm:text-wrap">
            Experience the future of healthcare with our innovative app
          </p>
          <p className="text-[13px]  xl:text-[30px] lg:text-[25px] md:text-[20px] sm:text-[20px]  text-wrap xl:text-wrap lg:text-wrap md:text-wrap sm:text-wrap">
            Empowering you to take control of your well-being like never before.
            Download now and embark on a journey to a healthier, happier you.
          </p>
        </div>
        <div className="felx flex-row justify-end xl:flex xl:flex-row xl:justify-end lg:flex lg:flex-row lg:justify-end md:flex md:flex-row md:justify-end sm:flex sm:flex-row sm:justify-end  place-content-center">
          <img
            className="object-contain w-[90%] xl:w-[50%] lg:w-[55%] md:w-[70%] sm:w-[80%] h-auto xl:object-contain lg:object-contain md:object-contain sm:object-contain"
            src="Images/WB_Main_Image.jpg"
          />
        </div>
      </div>
    </main>
  );
};

export default Homepage;
