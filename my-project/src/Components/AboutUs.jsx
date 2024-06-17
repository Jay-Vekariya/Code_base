// import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-row bg-green-300 font-serif">
      <div className="text-center md:text-wrap sm:text-wrap md:items-center sm:items-center flex flex-col gap-4">
        <p className="font-bold text-[20px] xl:text-[40px]  lg:text-[30px] md:text-[30px] sm:text-[25px]  flex flex-col mt-[20px] items-center h-[40px]">
          Why Us?
        </p>
        <div className="p-5 text-wrap text-[14px] xl:text-[22px] lg:text-[20px] md:text-[20px] sm:text-[15px] mb-6">
          The Maharshi Care app is designed for comfort, accessibility, and
          individualized care. These apps make it simple to schedule
          appointments and access medical professionals. They provide medical
          record storage that is secure, prescription reminders, and health
          tracking. Maharshi Care applications give customers the tools they
          need to properly manage their health through seamless communication
          and educational resources related to health.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
