const CasesStatus = () => {
  return (
    <div className="bg-gradient-to-r from-[#0C0C15] to-[#3F4069] xl:mb-[150px] md:mb-14 mb-[29px]">
      <div className="custom-container  py-[75px] plan-section ">
        <div className="lg:flex lg:flex-row grid sm:grid-cols-2 grid-cols-1 lg:gap-0 gap-8 sm:align-items-start align-items-center justify-between  text-center  text-white">
          {/* Item 1 */}
          <div className="flex flex-col items-center xl:pe-[92px] lg:pe-[30px] bg">
            <div className="flex items-center gap-[30px]">
              <span className="text-gold text-4xl mb-2">
                <img
                  src="./images/caseStatus1.png"
                  alt="case"
                  className="h-[50px] w-[50px]"
                />
              </span>
              <div>
                <h3 className="text-[32px] leading-[41.76px] tracking-[4%] font-bold mb-4 ">
                  162
                </h3>
                <p className="text-xl capitalize">Successful Case</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block border-l border-gray-500 w-0 h-[78px] border-opacity-[20%]"></div>


          {/* Item 2 */}
          <div className="flex flex-col items-center xl:px-[92px] lg:px-[30px]">
            <div className="flex items-center gap-[30px]">
              <span className="text-gold text-4xl mb-2">
                <img
                  src="./images/caseStatus2.png"
                  alt="case"
                  className="h-[50px] w-[50px]"
                />
              </span>
              <div>
                <h3 className="text-[32px] leading-[41.76px] tracking-[4%] font-bold mb-4">
                  160
                </h3>
                <p className="text-xl capitalize">case close</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block border-l border-gray-500 w-0 h-[78px] border-opacity-[20%]"></div>


          {/* Item 3 */}
          <div className="flex flex-col items-center xl:px-[92px] lg:px-[30px]">
            <div className="flex items-center gap-[30px]">
              <span className="text-gold text-4xl mb-2">
                <img
                  src="./images/caseStatus3.png"
                  alt="case"
                  className="h-[50px] w-[50px]"
                />
              </span>
              <div>
                <h3 className="text-[32px] leading-[41.76px] tracking-[4%] font-bold mb-4">
                  262
                </h3>
                <p className="text-xl capitalize">trusted client</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block border-l border-gray-500 w-0 h-[78px] border-opacity-[20%]"></div>


          {/* Item 4 */}
          <div className="flex flex-col items-center xl:ps-[92px] lg:ps-[30px]">
            <div className="flex items-center gap-[30px]">
              <span className="text-gold text-4xl mb-2">
                <img
                  src="./images/caseStatus4.png"
                  alt="case"
                  className="h-[50px] w-[50px]"
                />
              </span>
              <div>
                <h3 className="text-[32px] leading-[41.76px] tracking-[4%] font-bold mb-4">
                  62
                </h3>
                <p className="text-xl capitalize">expert team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasesStatus;
