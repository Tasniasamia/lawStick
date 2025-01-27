const CasesStatus = () => {
  return (
    <div className="bg-gradient-to-r from-[#0C0C15] to-[#3F4069]">
      <div className="custom-container mx-auto py-[57px] plan-section">
        <div className="lg:flex lg:flex-row grid sm:grid-cols-2 grid-cols-1 lg:gap-0 gap-8 sm:align-items-start align-items-center justify-between  text-center  text-white">
          {/* Item 1 */}
          <div className="flex flex-col items-center xl:pe-[80px] lg:pe-[30px] bg">
            <div className="flex items-center gap-[30px]">
              <span className="text-gold text-4xl mb-2">
                <img src="./images/caseStatus1.png" alt="" />
              </span>
              <div>
                <h3 className="text-3xl font-bold mb-4">162</h3>
                <p className="text-sm capitalize">Successful Case</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block border-l border-gray-500 w-0 h-[78px] border-opacity-[20%]"></div>

          {/* <div className="hidden md:block border-l border-gray-500"></div> */}

          {/* Item 2 */}
          <div className="flex flex-col items-center xl:px-[80px] lg:px-[30px]">
            <div className="flex items-center gap-[30px]">
              <span className="text-gold text-4xl mb-2">
                <img src="./images/caseStatus2.png" alt="" />
              </span>
              <div>
                <h3 className="text-3xl font-bold mb-4">160</h3>
                <p className="text-sm capitalize">case close</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block border-l border-gray-500 w-0 h-[78px] border-opacity-[20%]"></div>

          {/* <div className="hidden md:block border-l border-gray-500"></div> */}

          {/* Item 3 */}
          <div className="flex flex-col items-center xl:px-[80px] lg:px-[30px]">
            <div className="flex items-center gap-[30px]">
              <span className="text-gold text-4xl mb-2">
                <img src="./images/caseStatus3.png" alt="" />
              </span>
              <div>
                <h3 className="text-3xl font-bold mb-4">262</h3>
                <p className="text-sm capitalize">trusted client</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block border-l border-gray-500 w-0 h-[78px] border-opacity-[20%]"></div>

          {/* <div className="hidden md:block border-l border-gray-500"></div> */}

          {/* Item 4 */}
          <div className="flex flex-col items-center xl:ps-[80px] lg:ps-[30px]">
            <div className="flex items-center gap-[30px]">
              <span className="text-gold text-4xl mb-2">
                <img src="./images/caseStatus4.png" alt="" />
              </span>
              <div>
                <h3 className="text-3xl font-bold mb-4">62</h3>
                <p className="text-sm capitalize">expert team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasesStatus;
