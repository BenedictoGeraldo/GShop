"use client";
import Image from "next/image";

const ProfileView = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto w-3/5">
        <div className="header flex flex-col items-center">
          <h1 className="text-lg sm:text-xl md:text-2xl">Profil Saya</h1>
          <h3 className="text-sm sm:text-base md:text-lg text-center text-gray-700">
            Kelola Informasi Seputar Profil Anda
          </h3>
        </div>
        <hr className="w-2/5 mx-auto text-center my-3 rounded-full border-0 h-1 bg-blue-600" />
        <div className="flex flex-col mt-2 items-center">
          <div className="rounded-full flex my-2 ">
            <Image
              src="/profile.jpeg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          <div>
            <button className="text-blue-500 border-2 rounded-full px-2">
              Ganti Profil
            </button>
          </div>
        </div>

        <div className="form-input flex flex-col items-center my-8">
          <div className="name flex flex-col w-1/1 mb-4">
            <label>Nama Lengkap</label>
            <input
              type="text"
              className="border border-gray-500 rounded-md mt-1 p-1"
            />
          </div>
          <div className="email flex flex-col w-1/1 mb-4">
            <label>Email</label>
            <input
              type="text"
              className="border border-gray-500 rounded-md mt-1 p-1"
            />
          </div>
          <div className="phone-number  flex flex-col w-1/1 mb-4">
            <label>Nomor Telepon</label>
            <input
              type="text"
              className="border border-gray-500 rounded-md mt-1 p-1"
            />
          </div>
          <div className="address  flex flex-col w-1/1 mb-4">
            <label>Alamat</label>
            <input
              type="text"
              className="border border-gray-500 rounded-md mt-1 p-1"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <button className="back border-2 text-blue-500 rounded-md px-3">
            Kembali
          </button>
          <button className="save border-2 text-blue-500 rounded-md px-3">
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
