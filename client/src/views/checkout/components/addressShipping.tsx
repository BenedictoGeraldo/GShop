"use client";
import { RiMapPin2Line } from "@remixicon/react";

interface AddressShippingProps {
  onChangeAddress: () => void;
}
const AddressShipping = ({ onChangeAddress }: AddressShippingProps) => {
  return (
    <div className="address pl-2 border bg-white rounded-lg border-gray-300">
      <h1 className="mt-2">ALAMAT PENGIRIMAN</h1>
      <div className="flex">
        <i className="ri-map-pin-2-line" />
        <RiMapPin2Line size={24} color="rgba(0,0,0,1)" />
        <p>Rumah</p>
      </div>
      <div>
        <p className="text-xs">
          Jl. Taman Margasatwa No. 12, Ragunan, Pasar Minggu, Jakarta Selatan
          12550
        </p>
      </div>
      <div className="flex flex-col justify-center items-center my-2">
        <button
          type="button"
          onClick={onChangeAddress}
          className="border border-blue-800 text-xs text-blue-800 hover:bg-blue-100 rounded-lg px-4"
        >
          Ganti Alamat
        </button>
      </div>
    </div>
  );
};

export default AddressShipping;
