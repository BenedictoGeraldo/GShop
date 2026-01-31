"use client";

import Image from "next/image";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import BackModal from "@/components/backModal";
import SaveModal from "@/components/saveModal";

const ProfileView = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [isBackModalOpen, setIsBackModalOpen] = useState(false);
  const [isFormChanged, setIsFormChanged] = useState(false);

  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();

  const handleBackClick = () => {
    if (!isFormChanged) {
      router.push("/");
    } else {
      setIsBackModalOpen(true);
    }
  };

  const handleSaveClick = () => {
    if (!formRef.current) return;

    if (!formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return;
    }

    setIsSaveModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBackModalOpen(false);
  };

  const handleBackConfirm = () => {
    setIsBackModalOpen(false);
    router.push("/");
  };

  const submitForm = () => {
    setIsLoading(true);

    const data = {
      fullName,
      email,
      phoneNumber,
      address,
    };

    alert(`Data Kamu: ${JSON.stringify(data, null, 2)}`);

    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");

    setIsFormChanged(false);
    setIsLoading(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto w-3/5">
        <div className="header flex flex-col items-center">
          <h1 className="text-lg sm:text-xl md:text-2xl">Profil Saya</h1>
          <h3 className="text-sm sm:text-base md:text-lg text-center text-gray-700">
            Kelola Informasi Seputar Profil Anda
          </h3>
        </div>
        <hr className="w-3/4 mx-auto text-center my-3 rounded-full border-0 h-1 bg-blue-600" />
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

        <form ref={formRef} onChange={() => setIsFormChanged(true)}>
          <div className="form-input flex flex-col items-center my-8">
            <div className="name flex flex-col w-1/1 mb-4">
              <label>Nama Lengkap</label>
              <input
                type="text"
                className="border border-gray-500 rounded-md mt-1 p-1"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="email flex flex-col w-1/1 mb-4">
              <label>Email</label>
              <input
                type="email"
                className="border border-gray-500 rounded-md mt-1 p-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="phone-number  flex flex-col w-1/1 mb-4">
              <label>Nomor Telepon</label>
              <input
                type="text"
                className="border border-gray-500 rounded-md mt-1 p-1"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="address  flex flex-col w-1/1 mb-4">
              <label>Alamat</label>
              <input
                type="text"
                className="border border-gray-500 rounded-md mt-1 p-1"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex justify-between">
            <button
              className="back border-2 text-blue-500 rounded-md px-3"
              onClick={handleBackClick}
              type="button"
            >
              Kembali
            </button>
            <button
              className="save border-2 text-blue-500 rounded-md px-3"
              type="button"
              disabled={isLoading}
              onClick={handleSaveClick}
            >
              {isLoading ? "Menyimpan" : "Simpan"}
            </button>
          </div>
        </form>
      </div>

      <BackModal
        isOpen={isBackModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleBackConfirm}
      />

      <SaveModal
        isOpen={isSaveModalOpen}
        onClose={() => setIsSaveModalOpen(false)}
        onConfirm={() => {
          setIsSaveModalOpen(false);
          submitForm();
        }}
      />
    </div>
  );
};

export default ProfileView;
