"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const Practice = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".page1 .box1", {
      scale: 0,
      opacity: 0,
      rotate: 720,
      duration: 1,
      delay: 0.3,
    });
    gsap.from(".page2 .box1", {
      scale: 0,
      opacity: 0,
      rotate: 720,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        scrub: 2,
        markers: true,
        pin: true,
      },
    });
    gsap.to(".page3 h1", {
      xPercent: -150,
      duration: 3,
      scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
      },
    });
    document.querySelector("#string").addEventListener("mousemove", (prop) => {
      console.log("props", prop.y);
      const path = `M 10 100 Q 500 ${prop.y} 990 100`;
      gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3,
      });
    });
    document.querySelector("#string").addEventListener("mouseleave", (prop) => {
      console.log("props", prop.y);
      const path = `M 10 100 Q 500 100 990 100`;
      gsap.to("svg path", {
        attr: { d: path },
        duration: 1,
        ease: "elastic.out(1,0.5)",
      });
    });
  }, []);
  return (
    <div>
      <div className="page1 bg-sky-300 h-[150vh] w-full flex justify-center items-center">
        <div className="h-[300px] w-[300px] bg-red-500 box1"></div>
      </div>
      <div id="string" className="">
        <svg width="1000" height="200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 10 100 Q 500 100 990 100"
            stroke="black"
            fill="transparent"
          />
        </svg>
      </div>
      <div className="page2 bg-yellow-300 h-[100vh] w-full flex justify-center items-center">
        <div className="h-[300px] w-[300px] bg-red-500 box1"></div>
      </div>
      <div className="page3 bg-green-300 min-h-screen  w-full overflow-x-auto ">
        <h1 className="text-[40vw] capitalize ">Experiences</h1>
      </div>
    </div>
  );
};

export default Practice;
