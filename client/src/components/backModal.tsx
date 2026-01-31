import { RiCloseLine } from "@remixicon/react";
import { RiArrowGoBackLine } from "@remixicon/react";

interface BackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const BackModal: React.FC<BackModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-md w-11/12 sm:w-2/3 md:w-1/2 max-w-md p-2 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-3">
          <RiCloseLine />
        </button>
        <div className="mt-2 flex flex-col">
          <div className="icon-back mx-auto mb-2">
            <RiArrowGoBackLine size={96} color="rgba(203,0,0,1)" />
          </div>
          <div>
            <h1 className="text-center font-medium text-gray-700">
              Apakah anda yakin untuk kembali?
            </h1>
            <h3 className="text-center font-normal text-sm text-gray-400">
              Perubahan yang belum disimpan akan hilang!
            </h3>
          </div>
          <div className="flex flex-row justify-center gap-4 h-8 my-4">
            <button
              onClick={onClose}
              className="w-1/5 rounded-lg bg-red-600 text-white"
            >
              Tidak
            </button>
            <button
              onClick={onConfirm}
              className="w-1/5 rounded-lg bg-green-500 text-white"
            >
              Iya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackModal;
