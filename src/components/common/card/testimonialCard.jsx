import { FaStar } from 'react-icons/fa';
import coma from './../../../../public/images/coma.png';
import { Rate } from 'antd';
const TestimonialCard = ({data}) => {
    return (
        <div className="relative py-3 testimonialCard w-fit sm:mx-0 mx-auto">
        <img
          className="absolute top-[0.25rem] right-[2.25rem] opacity-1"
          src={coma}
          alt=""
        />

        <div
          className="max-w-[424px]  mx-auto bg-white flex flex-col text-black rounded-[10px]"
        >
          <div>
            <div className="flex gap-3 items-center pt-[24px] pb-[16px] px-5 ">
              <img src={data?.image} alt="" />
              <div>
                <p className="text-lg font-semibold whitespace-nowrap">
                  {data?.name}
                </p>
                <p className="text-base font-medium">{data?.law}</p>
              </div>
            </div>
            <hr />
          </div>

          <div className="px-5  pb-[24px]  ">
            <p className="text-textColor text-ellipsis line-clamp-5 pt-[16px]">
             {data?.review}
            </p>
            <div className="flex gap-1 md:mt-[24px] mt-2">
              <Rate disabled value={data?.rate}/>
          
            </div>
          </div>
        </div>
      </div>
    );
};

export default TestimonialCard;