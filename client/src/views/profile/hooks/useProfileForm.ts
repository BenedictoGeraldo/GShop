import { useState, useRef } from "react";
import { FormDataType } from "../types";

export const useProfileForm = () => {
  const [formData, setFormData] = useState<FormDataType>({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [isLoading, setIsloading] = useState(false);
  const [isFormChanged, setIsFormChanged] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const updateField = (field: keyof FormDataType, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setIsFormChanged(true);
  };

  const validateForm = (): boolean => {
    if (!formRef.current) return false;

    if (!formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return false;
    }

    return true;
  };

  const submitForm = () => {
    setIsloading(true);
    setTimeout(() => {
      alert(`Data Kamu: ${JSON.stringify(formData, null, 2)}`);

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
      });
      setIsFormChanged(false);
      setIsloading(false);
    }, 1000);
  };

  return {
    formData,
    formRef,
    isLoading,
    isFormChanged,
    updateField,
    validateForm,
    submitForm,
  };
};
