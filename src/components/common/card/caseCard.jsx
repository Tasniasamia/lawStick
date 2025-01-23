
const CaseCard = () => {
    return (
           <div className="max-w-[424px] max-h-[528px] mx-auto bg-white flex flex-col items-center text-black gap-3 rounded-[10px] border lg:pb-[30px] md:pb-[19px] pb-[17px]">
                        <div >
                          <img src={case1} alt="" />
                        </div>
                        <div className="lg:px-6 px-3 lg:space-y-8 space-y-3 lg:text-start text-center flex flex-col lg:items-start items-center">
                          <p className="font-medium lg:text-lg text-base text-[#242628] lg:leading-[30px] text-ellipsis line-clamp-2">
                            The Anatomy of a Civil Claim: Case Study and Legal
                            Implications
                          </p>
                          <p className="h-[70px] lg:text-base text-sm text-[#3A3D3F] lg:leading-7 text-ellipsis line-clamp-3">
                            An exploration of a civil claim, analyzing its components
                            and legal implications in depth.
                          </p>
                          
                          <button className="hover:bg-[#C7A87D] lg:px-5 px-2 lg:py-3 py-2  rounded-lg font-medium whitespace-nowrap lg:w-[191px] lg:text-lg text-base flex items-center gap-1 text-[#242628] hover:text-white border">
                            READ MORE <RxBorderSolid className="rotate-90" />{" "}
                            <FaLongArrowAltRight />
                          </button>
                        </div>
                      </div>
    );
};

export default CaseCard;