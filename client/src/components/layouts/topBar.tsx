"use client";

import { RiSendPlaneLine } from "@remixicon/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TopBar = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleOrderClick = () => {
    alert("Feature is under development");
  };

  return (
    <div className="fixed bg-white border-b border-black/20 w-full h-16 flex justify-between">
      <div className="mx-5 my-2">
        <Image
          src="/gshop-logo.png"
          alt="Logo GShop"
          width={80}
          height={1}
          onClick={handleLogoClick}
        />
      </div>

      <div className="flex my-3 mx-5">
        <button
          className=" text-[#2461B3] text-xs justify-center items-center font-medium flex mx-4 bg-blue-200 hover:bg-blue-300 px-2 rounded-2xl"
          onClick={handleOrderClick}
        >
          <i className="ri-send-plane-line text-[#2461B3]">
            <RiSendPlaneLine />
          </i>
          Order Now
        </button>

        <Image
          className="border-1 rounded-full mx-1"
          src="/profile.jpeg"
          alt="Your profile"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default TopBar;
