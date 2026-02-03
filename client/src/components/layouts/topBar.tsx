"use client";

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
    <div className="fixed top-0 left-0 w-full bg-blue-300 h-15 flex justify-between">
      <div>
        <Image
          src="/gshop-logo.png"
          alt="Logo GShop"
          width={80}
          height={99}
          onClick={handleLogoClick}
        />
      </div>

      <div className="flex">
        <button className="border-1" onClick={handleOrderClick}>
          Order Now
        </button>

        <Image
          className="border-1 rounded-full"
          src="/profile.jpeg"
          alt="Your profile"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default TopBar;
