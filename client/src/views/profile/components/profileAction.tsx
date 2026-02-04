import { RiSave2Line } from "@remixicon/react";

interface ProfileActionsProps {
  isLoading: boolean;
  onBackClick: () => void;
  onSaveClick: () => void;
}

const ProfileActions = ({
  isLoading,
  onBackClick,
  onSaveClick,
}: ProfileActionsProps) => {
  return (
    <div className="flex justify-between">
      <button
        className="back border-2 text-blue-500 rounded-lg w-25 h-8"
        onClick={onBackClick}
        type="button"
      >
        Kembali
      </button>
      <button
        className="save flex justify-center items-center text-center bg-blue-700 hover:bg-blue-900 text-white rounded-lg w-25 h-8"
        type="button"
        disabled={isLoading}
        onClick={onSaveClick}
      >
        {isLoading ? "Menyimpan..." : "Simpan"}
        <i className="ri-save-2-line" />
        <RiSave2Line size={20} color="rgba(255,255,255,1)" />
      </button>
    </div>
  );
};

export default ProfileActions;
