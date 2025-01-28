import case1 from "./../../../public/images/case-1.png";
import case2 from "./../../../public/images/case-2.png";
import case3 from "./../../../public/images/case-3.png";
import CaseCard from "./../common/card/caseCard";

const OurCase = () => {
  const data=[
    {
      image: case1,
      title:'  The Anatomy of a Civil Claim: Case Study and Lega Implications',
      description: 'An exploration of a civil claim, analyzing its components and legal implications in depth.'

    },
    {
      image: case2,
      title:'  The Anatomy of a Civil Claim: Case Study and Lega Implications',
      description: 'An exploration of a civil claim, analyzing its components and legal implications in depth.'

    },
    {
      image: case3,
      title:'  The Anatomy of a Civil Claim: Case Study and Lega Implications',
      description: 'An exploration of a civil claim, analyzing its components and legal implications in depth.'

    },
    {
      image: case1,
      title:'  The Anatomy of a Civil Claim: Case Study and Lega Implications',
      description: 'An exploration of a civil claim, analyzing its components and legal implications in depth.'

    },
    {
      image: case2,
      title:'  The Anatomy of a Civil Claim: Case Study and Lega Implications',
      description: 'An exploration of a civil claim, analyzing its components and legal implications in depth.'

    },
    {
      image: case3,
      title:'  The Anatomy of a Civil Claim: Case Study and Lega Implications',
      description: 'An exploration of a civil claim, analyzing its components and legal implications in depth.'

    }
  ]
  return (
    <div className="case-study text-black">
      <div className="custom-container  xl:pb-[150px] md:pb-14 pb-[29px] ">
        <div className=" text-center sm:text-start">
          <p className="section-subtitle">Case Study</p>
          <h1 className="section-title">
            Our Recent Case Project.
          </h1>
          <p className="section-description">
            Learn how we achieve results through expertise, dedication, and
            tailored
            <br className="hidden md:inline" />
            solutions to meet client goals.
          </p>
        </div>

        <div className="pt-[16px]">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {
              data?.map((i,index)=>{
                return (
              
                  <CaseCard data={i} key={index}/>
             
                )
              })
            }
       </div>
        </div>
        <div className="flex justify-center text-center md:mt-[50px] mt-[26px]">
          
        </div>
      </div>
    </div>
  );
};

export default OurCase;
