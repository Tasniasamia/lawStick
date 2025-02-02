import Button from "../common/button";

const Counseling = () => {
  return (
    <div className="custom-container xl:pb-[150px] md:pb-14 pb-[29px]">
      <div
        className="min-h-[456px] rounded-[20px]   text-center text-white p-6 relative overflow-hidden"
        style={{
          backgroundImage: `url(./images/Bg_counseling.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-[20px] w-full h-full flex flex-col items-center justify-center">

        <div className="relative z-10 max-w-[500px] mx-auto flex flex-col justify-center items-center">
          <h1 className="lg:text-[38px] md:text-3xl text-2xl font-medium lg:leading-[49px] font-ebgramond">
            Do you need expert legal <br />
            counseling?
          </h1>
          <p className="font-medium md:leading-[27px] link md:mt-6">
            Expert Legal Counseling To Guide You Through Complex Matters
            With Professionalism And Care.
          </p>
          <Button className=" mt-4">Get Appointed</Button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Counseling;