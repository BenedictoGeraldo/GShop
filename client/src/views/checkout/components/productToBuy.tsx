"use client";

import { useState } from "react";
import { RiStickyNoteLine } from "@remixicon/react";
import Image from "next/image";

const ProductToBuy = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="product mt-3 px-2 border rounded-lg bg-white border-gray-300">
      <h1>MILLS</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
        <div className="w-full md:w-4/6">
          <p>Sepatu Mills Sportage</p>
          <div className="w-full md:w-5/6 border rounded-lg px-2 mr-2 border-gray-300 w-5/6">
            <p className="text-sm">Ekonomi (RP.379.000)</p>
            <p className="text-xs">Estimasi tiba 20-22 Februari 2026</p>
            <hr className="w-2/3 mx-auto border-0 bg-gray-300 h-px rounded-full my-2" />
            <div className="flex">
              <i className="ri-sticky-note-line" />
              <RiStickyNoteLine size={18} color="rgba(0,0,0,1)" />
              <p className="text-xs mb-5">Berikan catatan untuk pengirim</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-auto md:mx-auto">
          <Image
            className="mx-auto"
            src="/product-example.png"
            alt="Product"
            width={130}
            height={130}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mb-5">
        <p className="text-sm font-semibold">Rp.900.000</p>
        <div className="border flex justify-between border-2 rounded-lg border-blue-400 w-25 px-2 text-blue-700">
          <button type="button" onClick={() => setCount(count - 1)}>
            -
          </button>
          <span>{count}</span>
          <button type="button" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductToBuy;
