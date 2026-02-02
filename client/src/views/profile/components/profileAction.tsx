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
        className="back border-2 text-blue-500 rounded-md px-3"
        onClick={onBackClick}
        type="button"
      >
        Kembali
      </button>
      <button
        className="save border-2 text-blue-500 rounded-md px-3"
        type="button"
        disabled={isLoading}
        onClick={onSaveClick}
      >
        {isLoading ? "Menyimpan..." : "Simpan"}
      </button>
    </div>
  );
};

export default ProfileActions;
