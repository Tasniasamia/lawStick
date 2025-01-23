import Button from '../common/button';
const AboutUS = () => {
  return (
    <div className="relative about-section">
      <div className="hidden 2xl:block absolute bottom-0">
        <div className="">
          <img src="./images/justice-statu.png" alt="" />
        </div>
      </div>

      <div className="custom-container">
        <div className="flex flex-col-reverse lg:flex-row xl:my-[150px] md:my-14 my-[29px] sm:mt-[29px] sm:mb-[38px]">
          {/* image container */}
          <div className="flex w-full xl:w-2/5 justify-center items-center ">
            <div className="md:max-w-[564px] md:max-h-[646px] rounded-[20px]">
              <img
                className="w-full h-full object-cover rounded-[20px]"
                src={"./images/aboutIMG.png"}
                alt="picture loading"
              />
            </div>
          </div>

          {/* text container */}
          <div className=" w-full xl:w-3/5 flex flex-col  lg:px-5 xl:px-5 md:px-7 smaller:px-8 sm:px-4 px-2 ">
            <div className="text-center sm:text-start xl:px-5 md:px-7 smaller:px-8 small:px-4">
              <p className="section-subtitle">
                About Us
              </p>
              <h1 className=" section-title">
                We fight for fairness and stand <br className='xl:inline-block lg:hidden inline-block'/>
                against <span className="text-[#D4AF37]">injustice</span>.
              </h1>
              <p className="section-description">
                At Lawstick, we are committed to fighting for fairness and
                protecting your rights. <br className="hidden xl:block" /> With
                unwavering integrity and dedication, our experienced team works
                tirelessly <br className="hidden xl:block" /> to deliver
                justice.
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 work-sans xl:mb-[50px] mb-[30px] xl:px-5 md:px-7 smaller:px-8 small:px-4">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-none md:w-[60px] md:h-[60px] w-11 h-11 rounded-full bg-red-100 flex justify-center items-center">
                    <img
                      className="md:w-11 md:h-11 w-7 h-7"
                      src="./images/hammer.png"
                      alt="Hammer"
                    />
                  </div>

                  <div>
                    <p className="text-[#B68C5A] text-lg font-semibold">
                      Experience Attorney
                    </p>
                    <p className="text-[#3A3D3F] md:text-base text-sm">
                      Experienced attorneys committed to your success.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-none md:w-[60px] md:h-[60px] w-11 h-11 rounded-full bg-red-100 flex justify-center items-center">
                    <img
                      className="md:w-11 md:h-11 w-7 h-7"
                      src="./images/result.png"
                      alt="Result"
                    />
                  </div>
                  <div>
                    <p className="text-[#B68C5A] text-lg font-semibold">
                      Short Time Result
                    </p>
                    <p className="text-[#3A3D3F] md:text-base text-sm">
                      Experienced attorneys delivering swift results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-none md:w-[60px] md:h-[60px] w-11 h-11 rounded-full bg-red-100 flex justify-center items-center">
                    <img
                      className="md:w-11 md:h-11 w-7 h-7"
                      src="./images/daripalla.png"
                      alt="Daripalla"
                    />
                  </div>
                  <div>
                    <p className="text-[#B68C5A] text-lg font-semibold">
                      162 Successful Cases
                    </p>
                    <p className="text-[#3A3D3F] md:text-base text-sm">
                      162 Successful Cases Expertise delivering exceptional
                      results.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-none md:w-[60px] md:h-[60px] w-11 h-11 rounded-full bg-red-100 flex justify-center items-center">
                    <img
                      className="md:w-11 md:h-11 w-7 h-7"
                      src="./images/success.png"
                      alt="Success"
                    />
                  </div>
                  <div>
                    <p className="text-[#B68C5A] text-lg font-semibold">
                      90% Success Rate
                    </p>
                    <p className="text-[#3A3D3F] md:text-base text-sm">
                      Experienced attorneys with a proven success rate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:justify-start justify-center xl:px-5 md:px-7 smaller:px-8 small:px-4 xl:pb-0 pb-10">
              <Button>
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
