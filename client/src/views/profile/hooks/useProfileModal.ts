import { useState } from "react";
import { useRouter } from "next/navigation";

interface useProfileModalProps {
  isFormChanged: boolean;
  validateForm: () => boolean;
  submitForm: () => void;
}

export const useProfileModal = ({
  isFormChanged,
  validateForm,
  submitForm,
}: useProfileModalProps) => {
  const [isBackModalOpen, setIsBackModalOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

  const router = useRouter();

  const handleBackClick = () => {
    if (!isFormChanged) {
      router.push("/");
    } else {
      setIsBackModalOpen(true);
    }
  };

  const handleSaveClick = () => {
    if (!validateForm()) {
      return;
    }

    setIsSaveModalOpen(true);
  };

  const closeBackModal = () => {
    setIsBackModalOpen(false);
  };

  const confirmBack = () => {
    setIsBackModalOpen(false);
    router.push("/");
  };

  const closeSaveModal = () => {
    setIsSaveModalOpen(false);
  };

  const confirmSave = () => {
    setIsSaveModalOpen(false);
    submitForm();
  };

  return {
    isBackModalOpen,
    isSaveModalOpen,
    handleBackClick,
    handleSaveClick,
    closeBackModal,
    confirmBack,
    closeSaveModal,
    confirmSave,
  };
};
