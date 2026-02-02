import Image from "next/image";

const ProfileImage = () => {
  const handleChangeImage = () => {
    alert("Sorry, dalam pengembangan!");
  };

  return (
    <>
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
          <button
            type="button"
            onClick={handleChangeImage}
            className="text-blue-500 border-2 rounded-full px-2"
          >
            Ganti Profil
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileImage;
