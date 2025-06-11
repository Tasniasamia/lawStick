"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const Practice = () => {
  useEffect(() => {
    // for scrollTrigger
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
    // for text
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
    // for svg
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

    // for cursor
    const cursor = document.querySelector("#cursor");
    const main = document.querySelector("#main");
    const shape = document.querySelector("#shape");
    main.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    });
    shape.addEventListener("mouseenter", (e) => {
      gsap.to(cursor, {
        scale: 1.5,
        duration: 1,
        ease: "back.out",
      });
    });
    shape.addEventListener("mouseleave", (e) => {
      gsap.to(cursor, {
        scale: 1,
        duration: 1,
        ease: "back.out",
      });
    });
    //for animating text

    let textEl = document.querySelector("#text h2");
    let originalText = textEl.innerText;
    let wrapped = "";

    originalText.split("").forEach((char, i) => {
      if (Math.floor(originalText.split("").length / 2) > i) {
        wrapped += `<span class="a">${char}</span>`;
      } else {
        wrapped += `<span class="b">${char}</span>`;
      }
    });

    textEl.innerHTML = wrapped;

    gsap.from("#text h2 .a", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.03,
    });
    gsap.from("#text h2 .b", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: -0.03,
    });
  }, []);

  return (
    <div id="main">
      <div id="cursor" />

      <div className=" bg-gray-300 h-[150vh] w-full flex justify-center items-center">
        <div className="h-[300px] w-[300px] bg-green-500 " id="shape"></div>
      </div>
      <div
        id="text"
        className="bg-yellow-300 h-[50vh] w-full flex justify-center items-center"
      >
        <h2 className="text-[80px] text-white font-extrabold  ">Sheiryans</h2>
      </div>
      <div className="page1 bg-sky-300 h-[150vh] w-full flex justify-center items-center">
        <div className="h-[300px] w-[300px] bg-red-500 box1"></div>
      </div>
      <div id="string" className="">
        <svg width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
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
