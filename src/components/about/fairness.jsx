import Button from "../common/button";


const Fairness = () => {
  return (
    <div className="relative   xl:mb-[150px] md:mb-14 mb-[60px] ">
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row  lg:gap-14 md:gap-7 gap-6 ">
          {/* image container */}
          <div className="lg:flex hidden w-full lg:w-2/5 justify-center items-center order-2">
            <div className="md:max-w-[564px]  rounded-[20px]">
              <img
                className="w-full h-auto object-cover rounded-[20px]"
                src={"./images/aboutIMG.png"}
                alt="About Us"
              />
            </div>
          </div>

          {/* text container */}
          <div className=" w-full lg:w-3/5 flex flex-col justify-center  order-1">
            <h1 className="section-title">
              We Strive For Justice And Envision <br /> A Future Of
              <span className="text-[#D4AF37]"> Fairness</span>.
            </h1>
            <p className="text-[#3A3D3F] section-description">
              At Lawstick, we are dedicated to promoting justice, ensuring
              fairness, and building <br className="hidden xl:block" /> a future
              rooted in integrity and trust. Our mission drives us to deliver
              expert legal <br className="hidden xl:block" /> solutions while
              upholding the highest ethical standards.
            </p>

            <div className="flex flex-col  lg:text-start text-center"style={{marginTop:"-12px"}}>
              <p className="text-[#D4AF37] font-medium md:text-2xl text-lg md:mb-6 mb-3">
                Our Aspiration
              </p>
              <p className="text-[#3A3D3F] text-base font-normal lg:text-start text-center md:leading-[27px] leading-[23px] md:mb-[28px] mb-[10px]">
                Our aspiration is to champion justice, fairness, and integrity.
                We aim to protect individual rights, deliver expert legal
                solutions, and build trust with our clients. Through dedication
                and ethical principles, we strive to create a more just and
                equitable society.
              </p>
              <p className="text-[#D4AF37] font-medium md:text-2xl text-lg md:mb-6 mb-3 lg:text-start text-center">
                Our Commitment
              </p>
              <p className="text-[#3A3D3F] text-base font-normal lg:text-start text-center md:leading-[27px] leading-[23px] md:mb-[28px] mb-[10px]">
                Our commitment is to provide unwavering legal support with
                integrity, expertise, and dedication. We are dedicated to
                protecting your rights, ensuring fair outcomes, and delivering
                personalized solutions tailored to your unique needs. At
                Lawstick, we stand by our clients every step of the way
              </p>
            </div>

            <div className="flex md:justify-start justify-center lg:mx-0 mx-auto">
              <Button>
                Make an Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fairness;
