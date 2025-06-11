

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AnimationPage = () => {
  const cursorRef = useRef(null);
  const mainRef = useRef(null);
  const shapeRef = useRef(null);
  const textRef = useRef(null);
  const stringRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate Boxes
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

    // Scroll text animation
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

    // Wavy SVG animation
    const handleMouseMove = (e) => {
      const midX = window.innerWidth / 2;
      const path = `M 10 100 Q ${midX} ${e.clientY} 990 100`;
      gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      const path = `M 10 100 Q 500 100 990 100`;
      gsap.to("svg path", {
        attr: { d: path },
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      });
    };

    stringRef.current.addEventListener("mousemove", handleMouseMove);
    stringRef.current.addEventListener("mouseleave", handleMouseLeave);

    // Custom cursor movement
    mainRef.current.addEventListener("mousemove", (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    });

    shapeRef.current.addEventListener("mouseenter", () => {
      gsap.to(cursorRef.current, {
        scale: 1.5,
        duration: 1,
        ease: "back.out",
      });
    });

    shapeRef.current.addEventListener("mouseleave", () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 1,
        ease: "back.out",
      });
    });

    // Animated split text
    const textEl = textRef.current;
    const originalText = textEl.innerText;
    let wrapped = "";

    originalText.split("").forEach((char, i) => {
      const half = Math.floor(originalText.length / 2);
      wrapped += `<span class="${i < half ? "a" : "b"}">${char}</span>`;
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

    return () => {
      stringRef.current.removeEventListener("mousemove", handleMouseMove);
      stringRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div id="main" ref={mainRef} className="relative">
      {/* Cursor */}
      <div
        id="cursor"
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 bg-black rounded-full z-50 pointer-events-none"
      />

      {/* Shape */}
      <div className="bg-gray-300 h-[150vh] w-full flex justify-center items-center">
        <div
          className="h-[30vw] w-[30vw] max-w-[300px] max-h-[300px] bg-green-500"
          id="shape"
          ref={shapeRef}
        ></div>
      </div>

      {/* Animated Text */}
      <div
        id="text"
        className="bg-yellow-300 h-[50vh] w-full flex justify-center items-center"
      >
        <h2
          ref={textRef}
          className="text-[clamp(2rem,10vw,5rem)] text-white font-extrabold"
        >
          Sheiryans
        </h2>
      </div>

      {/* Page 1 */}
      <div className="page1 bg-sky-300 h-[150vh] w-full flex justify-center items-center">
        <div className="h-[30vw] w-[30vw] max-w-[300px] max-h-[300px] bg-red-500 box1"></div>
      </div>

      {/* SVG String */}
      <div id="string" ref={stringRef}>
        <svg width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 10 100 Q 500 100 990 100"
            stroke="black"
            fill="transparent"
          />
        </svg>
      </div>

      {/* Page 2 */}
      <div className="page2 bg-yellow-300 h-[100vh] w-full flex justify-center items-center">
        <div className="h-[30vw] w-[30vw] max-w-[300px] max-h-[300px] bg-red-500 box1"></div>
      </div>

      {/* Page 3 */}
      <div className="page3 bg-green-300 min-h-screen w-full overflow-x-auto">
        <h1 className="text-[40vw] capitalize">Experiences</h1>
      </div>
    </div>
  );
};

export default AnimationPage;
