"use client";

import { useProfileForm } from "./hooks/useProfileForm";
import { useProfileModal } from "./hooks/useProfileModal";
import ProfileImage from "./components/profileImage";
import ProfileHeader from "./components/profileHeader";
import ProfileForm from "./components/profileForm";
import ProfileActions from "./components/profileAction";
import BackModal from "@/components/backModal";
import SaveModal from "@/components/saveModal";

const ProfileView = () => {
  const {
    formData,
    formRef,
    isLoading,
    isFormChanged,
    updateField,
    validateForm,
    submitForm,
  } = useProfileForm();

  const {
    isBackModalOpen,
    isSaveModalOpen,
    handleBackClick,
    handleSaveClick,
    closeBackModal,
    confirmBack,
    closeSaveModal,
    confirmSave,
  } = useProfileModal({
    isFormChanged,
    validateForm,
    submitForm,
  });
  return (
    <div className="bg-gray-1000">
      <div className="mx-auto w-3/5">
        <ProfileHeader />
        <hr className="w-3/4 mx-auto text-center my-3 rounded-full border-0 h-1 bg-blue-600" />
        <ProfileImage />
        <ProfileForm
          formRef={formRef}
          formData={formData}
          onFieldChange={updateField}
        />

        <ProfileActions
          isLoading={isLoading}
          onBackClick={handleBackClick}
          onSaveClick={handleSaveClick}
        />
      </div>

      <BackModal
        isOpen={isBackModalOpen}
        onClose={closeBackModal}
        onConfirm={confirmBack}
      />

      <SaveModal
        isOpen={isSaveModalOpen}
        onClose={closeSaveModal}
        onConfirm={confirmSave}
      />
    </div>
  );
};

export default ProfileView;
