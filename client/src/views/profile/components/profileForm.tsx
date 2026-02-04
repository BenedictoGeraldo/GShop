import { RefObject } from "react";
import { FormDataType } from "../types";

interface ProfileFormProps {
  formRef: RefObject<HTMLFormElement | null>;
  formData: FormDataType;
  onFieldChange: (field: keyof FormDataType, value: string) => void;
}

const ProfileForm = ({
  formRef,
  formData,
  onFieldChange,
}: ProfileFormProps) => {
  return (
    <form ref={formRef}>
      <div className="form-input flex flex-col items-center my-4">
        <div className="name flex flex-col w-1/1 mb-2">
          <label>Nama Lengkap</label>
          <input
            type="text"
            className="border border-gray-500 rounded-md mt-1 p-1"
            value={formData.fullName}
            onChange={(e) => onFieldChange("fullName", e.target.value)}
            required
          />
        </div>
        <div className="email flex flex-col w-1/1 mb-2">
          <label>Email</label>
          <input
            type="email"
            className="border border-gray-500 rounded-md mt-1 p-1"
            value={formData.email}
            onChange={(e) => onFieldChange("email", e.target.value)}
            required
          />
        </div>
        <div className="phone-number  flex flex-col w-1/1 mb-2">
          <label>Nomor Telepon</label>
          <input
            type="text"
            className="border border-gray-500 rounded-md mt-1 p-1"
            value={formData.phoneNumber}
            onChange={(e) => onFieldChange("phoneNumber", e.target.value)}
            required
          />
        </div>
        <div className="address  flex flex-col w-1/1">
          <label>Alamat</label>
          <input
            type="text"
            className="border border-gray-500 rounded-md mt-1 p-1"
            value={formData.address}
            onChange={(e) => onFieldChange("address", e.target.value)}
            required
          />
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
