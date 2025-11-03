import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const LoadingScreen = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(".loader-container", {
          opacity: 0,
          duration: 0.8,
          onComplete: () => {
            setVisible(false);
            if (onFinish) onFinish(); 
          },
        });
      },
    });

    tl.fromTo(
      ".loader-text",
      { y: "-100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 5.2, ease: "power3.out" }
    )
      .to(".loader-text", {
        y: "100%",
        opacity: 0,
        delay: 0.8,
        duration: 1,
        ease: "power3.inOut",
      });

    gsap.to(".loader-circle", {
      scale: 1.2,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className="loader-container fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-[9999] overflow-hidden">
      <div className="relative flex items-center justify-center mb-8">
        <div className="animate-ping absolute inline-flex h-20 w-20 rounded-full bg-[#ff9633] opacity-60"></div>
        <div className="loader-circle relative inline-flex rounded-full h-12 w-12 bg-[#ff9633]"></div>
      </div>

      <div className="loader-text text-center">
        <p className="text-2xl font-extrabold text-white tracking-wide">
          RP <span className="text-[#ff9633]">SOLUTIONS</span> Pvt. Ltd.
        </p>
        <p className="text-sm text-gray-400 mt-2">
          BEST SERVICE, RIGHT TIME, RIGHT PEOPLE
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
