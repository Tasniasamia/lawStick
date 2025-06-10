"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const Practice = () => {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
    gsap.from(".page1 .box1",{
        scale:0,
        opacity:0,
        rotate:720,
        duration:1,
        delay:0.3,
        
    })
    gsap.from(".page2 .box1",{
        scale:0,
        opacity:0,
        rotate:720,
        duration:1,
        delay:0.3,
        scrollTrigger:{
            trigger:".page2",
            scroller:"body",
            scrub:2,
            markers:true,
            pin:true
            
        }
        
    })
    gsap.to(".page3 h1",{
        xPercent:-150,
        scrollTrigger:{
            trigger:".page3",
            scroller:"body",
            markers:true,
            start:"top 0%",
            end:"top -100%",
            scrub:2,
            pin:true
            
        }
    })
    
    },[])
    return (
        <div>
            <div className="page1 bg-sky-300 h-[150vh] w-full flex justify-center items-center">
               <div className="h-[300px] w-[300px] bg-red-500 box1"></div> 
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