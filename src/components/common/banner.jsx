import { TbArrowNarrowRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import aboutImage from './../../../public/images/About-bg-image.png';
const Banner = ({ title }) => {
  return (
    <div
      style={{ backgroundImage: `url(${aboutImage})` }}
      className="bg-gradient-to-r from-[#0C0C15] to-[#3F4069] min-h-fit work-sans text-white bg-cover bg-center bg-no-repeat md:h-[480px] h-[300px] xl:mb-[150px] md:mb-14 mb-[60px] "
    > 
    <div className="bg-black bg-opacity-[60%] h-full w-full flex items-center justify-end">
      <div className="custom-container text-center md:pt-[100px] pt-[50px]">
        <h2 className="header-1">
          {title}
        </h2>
        <p className="flex justify-center items-center gap-2 md:mt-6 text-lg font-medium">
          <Link to="/">Home</Link>{" "}
          <TbArrowNarrowRight className="text-primary h-6 w-6" />{" "}
          <span className="text-primary">{title}</span>
        </p>
      </div>
      </div>
    </div>
  );
};

export default Banner;
