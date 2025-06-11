import gsap from "gsap";
import React, { useEffect } from "react";

const Marque = () => {
    useEffect(() => {
        window.addEventListener("wheel", (e) => {
            if(e.deltaY > 0){
                gsap.to(".marquee", {
                    xPercent: -200,
                    duration: 6,
                    repeat: -1,
                    ease: "linear",
                  })
                  gsap.to(".marquee img", {
                    rotate: 180
                  })
            }
            else{
                gsap.to(".marquee", {
                    xPercent: 0,
                    duration: 6,
                    repeat: -1,
                    ease: "linear",
                })
                gsap.to(".marquee img", {
                    rotate: 0
                  })
            }
        })
     
    })
  return (
    <div className=" bg-primary w-full overflow-x-hidden text-white py-[20px] flex items-center ">
      <div className="marquee flex px-[20px] items-center gap-8 flex-shrink-0">
        <p className="text-[70px]  ">SuccessFull Case</p>
        <img src="/images/right-icon.png" alt="" className="h-[80px] w-[80px] " />
      </div>
      <div className="marquee flex px-[20px] items-center gap-8 flex-shrink-0">
        <p className="text-[70px]  ">SuccessFull Case</p>
        <img src="/images/right-icon.png" alt="" className="h-[80px] w-[80px] "/>
      </div>
      <div className="marquee flex px-[20px] items-center gap-8 flex-shrink-0">
        <p className="text-[70px]  ">Running Case</p>
        <img src="/images/right-icon.png" alt="" className="h-[80px] w-[80px] " />
      </div>
      <div className="marquee flex px-[20px] items-center gap-8 flex-shrink-0">
        <p className="text-[70px] ">Total Case</p>
        <img src="/images/right-icon.png" alt="" className="h-[80px] w-[80px] " />
      </div>
    </div>
  );
};

export default Marque;
