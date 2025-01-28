import { useEffect, useRef, useState } from "react";
import Button from "./../common/button";
import PlayButton from "../common/playbutton";
import { IoClose } from "react-icons/io5";

const AboutUs = () => {
  let videoRef = useRef(null);
  //   let [isPlaying, setIsPlaying] = useState(false);

  //   let handlePlayPause = () => {
  //     if (videoRef.current) {
  //       if (isPlaying) {
  //         videoRef.current.pause();
  //       } else {
  //         videoRef.current.play();
  //       }
  //       setIsPlaying(!isPlaying);
  //     }
  //   };

  let useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
      let maybeHandler = (event) => {
        if (!domNode.current.contains(event.target)) {
          handler();
        }
      };
      document.addEventListener("mousedown", maybeHandler);

      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    });
    return domNode;
  };
  const [videoOpen, setvideoOpen] = useState(false);

  let domNode = useClickOutside(() => {
    setvideoOpen(false);
  });
  return (
    <div className=" xl:mb-[150px] md:mb-14 mb-[29px]">
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row  lg:gap-14 md:gap-7 gap-6 my-14">
          {/* image container */}
          <div
            ref={domNode}
            className="lg:max-w-auto md:max-w-[582px] lg:mx-0 sm:mx-auto lg:flex sm:block hidden lg:w-2/5 justify-center items-center relative"
          >
            <div className="md:max-w-[452px] rounded-[20px]">
              <img
                className="w-full h-auto object-cover rounded-[20px] "
                src="./images/aboutPageRotateImage.png"
                alt="About Us"
              />
            </div>

            <div className="absolute top-[246px] right-[-64px] bg-white h-[280px] w-[263px] flex justify-center items-center">
              <div className="right-[-56px] bottom-[92px] h-full w-full border-[12px] border-primary">
                <img src="./images/about.png" className="h-full w-full" />
                <div className="absolute top-[6rem] left-[6rem] ">
                  <div onClick={() => setvideoOpen(true)}>
                    <PlayButton videoOpen={videoOpen} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* text container */}
          <div className="eb-garamond w-full lg:w-3/5 flex flex-col justify-center lg:px-5 xl:px-5 md:px-7 smaller:px-8 sm:px-4 px-2">
            <div className="text-center sm:text-start xl:px-5 md:px-7 smaller:px-8 small:px-4">
              <p className="section-subtitle text-[#D4AF37]">About Us</p>
              <h1 className="section-title  block">
                We fight for fairness and stand <br />
                against <span className="text-[#D4AF37]">injustice</span>.
              </h1>
              <p className="text-[#3A3D3F] section-description">
                At Lawstick, we are committed to fighting for fairness and
                protecting your rights. <br className="hidden xl:block" /> With
                unwavering integrity and dedication, our experienced team works
                tirelessly <br className="hidden xl:block" /> to deliver
                justice.
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-[40px] gap-x-[24px] work-sans mb-[50px] xl:px-5 md:px-7 smaller:px-8 sm:px-4">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-none md:w-[60px] md:h-[60px] w-11 h-11 rounded-full bg-red-100 flex justify-center items-center">
                    <img
                      className="md:w-11 md:h-11 w-7 h-7"
                      src={"./images/hammer.png"}
                      alt="Hammer"
                    />
                  </div>

                  <div>
                    <p className="text-primary text-lg font-semibold">
                      Experience Attorney
                    </p>
                    <p className="text-[#3A3D3F] md:text-base text-sm">
                      Experienced attorneys committed to your success.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-none md:w-[60px] md:h-[60px] w-11 h-11 rounded-full bg-red-100 flex justify-center items-center">
                    <img
                      className="md:w-11 md:h-11 w-7 h-7"
                      src="./images/result.png"
                      alt="Result"
                    />
                  </div>
                  <div>
                    <p className="text-primary text-lg font-semibold">
                      Short Time Result
                    </p>
                    <p className="text-[#3A3D3F] md:text-base text-sm">
                      Experienced attorneys delivering swift results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-none md:w-[60px] md:h-[60px] w-11 h-11 rounded-full bg-red-100 flex justify-center items-center">
                    <img
                      className="md:w-11 md:h-11 w-7 h-7"
                      src="./images/daripalla.png"
                      alt="Daripalla"
                    />
                  </div>
                  <div>
                    <p className="text-primary text-lg font-semibold">
                      162 Successful Cases
                    </p>
                    <p className="text-[#3A3D3F] md:text-base text-sm">
                      162 Successful Cases Expertise delivering exceptional
                      results.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-none md:w-[60px] md:h-[60px] w-11 h-11 rounded-full bg-red-100 flex justify-center items-center">
                    <img
                      className="md:w-11 md:h-11 w-7 h-7"
                      src="./images/success.png"
                      alt="Success"
                    />
                  </div>
                  <div>
                    <p className="text-primary text-lg font-semibold">
                      90% Success Rate
                    </p>
                    <p className="text-[#3A3D3F] md:text-base text-sm">
                      Experienced attorneys with a proven success rate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:justify-start justify-center xl:px-5 md:px-7 smaller:px-8 small:px-4">
              <Button>Read More</Button>
            </div>
          </div>
        </div>
      </div>
      {videoOpen && (
        <div className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-70">
          <div className="mx-auto w-full max-w-[550px] bg-white">
            <>
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                autoPlay
                loop
                muted
              >
                <source src={"./images/video.mp4"} type="video/mp4" />
              </video>
            </>
          </div>

          <button
            onClick={() => setvideoOpen(false)}
            className="absolute right-0 top-0 flex h-20 w-20 cursor-pointer items-center justify-center "
          >
            <IoClose className="text-7xl" />
          </button>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
