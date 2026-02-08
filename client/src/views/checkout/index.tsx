"use client";

import { RiMapPin2Line, RiStickyNoteLine } from "@remixicon/react";
import Image from "next/image";

const CheckoutView = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 pt-35">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-semibold text-xl md:text-3xl">Checkout</h1>
          <div className="flex flex-col md:flex-row gap-3 ">
            <div className="w-full md:w-3/5">
              <div className="address pl-2 border bg-white rounded-lg border-gray-300">
                <h1 className="mt-2">ALAMAT PENGIRIMAN</h1>
                <div className="flex">
                  <i className="ri-map-pin-2-line" />
                  <RiMapPin2Line size={24} color="rgba(0,0,0,1)" />
                  <p>Rumah</p>
                </div>
                <div>
                  <p className="text-xs">
                    Jl. Taman Margasatwa No. 12, Ragunan, Pasar Minggu, Jakarta
                    Selatan 12550
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center my-2">
                  <button
                    type="button"
                    className="border border-blue-800 text-xs text-blue-800 rounded-lg px-4"
                  >
                    Ganti Alamat
                  </button>
                </div>
              </div>

              <div className="product mt-3 px-2 border rounded-lg bg-white border-gray-300">
                <h1>MILLS</h1>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="w-full md:w-4/6">
                    <p>Sepatu Mills Sportage</p>
                    <div className="w-full md:w-5/6border rounded-lg px-2 mr-2 border-gray-300 w-5/6">
                      <p className="text-sm">Ekonomi (RP.379.000)</p>
                      <p className="text-xs">
                        Estimasi tiba 20-22 Februari 2026
                      </p>
                      <hr className="w-2/3 mx-auto border-0 bg-gray-300 h-px rounded-full my-2" />
                      <div className="flex">
                        <i className="ri-sticky-note-line" />
                        <RiStickyNoteLine size={18} color="rgba(0,0,0,1)" />
                        <p className="text-xs mb-5">
                          Berikan catatan untuk pengirim
                        </p>
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
                  <button
                    type="button"
                    className="border-2 rounded-lg border-blue-400 w-25 flex justify-around text-blue-700"
                  >
                    -
                    <span />1
                    <span />+
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/5 bg-white border rounded-lg border-gray-300 h-fit">
              <h1 className="text-center">Ringkasan Transaksi</h1>
              <div className="flex justify-between px-4 mt-5">
                <p className="text-xs text-gray-800">Total Harga 1 Barang</p>
                <p className="text-xs text-gray-700">Rp. 15.000</p>
              </div>
              <div className="flex justify-between px-4">
                <p className="text-xs text-gray-800">Total Ongkos Kirim</p>
                <p className="text-xs text-gray-700">Rp. 15.000</p>
              </div>
              <div className="flex justify-between px-4">
                <p className="text-xs text-gray-800">Biaya Jasa Aplikasi</p>
                <p className="text-xs text-gray-700">Rp. 5.000</p>
              </div>
              <div className="flex justify-between px-4">
                <p className="text-xs text-gray-800">Diskon</p>
                <p className="text-xs text-gray-700">Rp. 0</p>
              </div>
              <hr className="w-2/3 mx-auto border-0 bg-gray-300 h-px rounded-full" />
              <div className="flex justify-between px-4 mt-1">
                <p className="text-xs text-gray-900">Total Tagihan</p>
                <p className="text-xs font-semibold">Rp. 0</p>
              </div>

              <div className="flex justify-center items-center  my-5">
                <button
                  type="submit"
                  className="md:w-50 md:h-7 px-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white "
                >
                  Bayar Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutView;
