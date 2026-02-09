"use client";

interface TransactionSummaryProps {
  onPay: () => void;
}

const TransactionSummary = ({ onPay }: TransactionSummaryProps) => {
  return (
    <div className="w-full md:w-2/5 bg-white border rounded-lg border-gray-300 h-fit">
      <h1 className="text-center">Ringkasan Transaksi</h1>
      <div className="flex justify-between px-4 mt-5">
        <p className="text-xs text-gray-800">Total Harga 1 Barang</p>
        <p className="text-xs text-gray-700">Rp. 15.000</p>
      </div>
      <div className="flex justify-between px-4">
        <p className="text-xs text-gray-800">Total Ongkos Kirim</p>
        <p className="text-xs text-gray-700">Rp. 15.000</p>
      </div>
      <div className="flex justify-between px-4">
        <p className="text-xs text-gray-800">Biaya Jasa Aplikasi</p>
        <p className="text-xs text-gray-700">Rp. 5.000</p>
      </div>
      <div className="flex justify-between px-4">
        <p className="text-xs text-gray-800">Diskon</p>
        <p className="text-xs text-gray-700">Rp. 0</p>
      </div>
      <hr className="w-2/3 mx-auto border-0 bg-gray-300 h-px rounded-full" />
      <div className="flex justify-between px-4 mt-1">
        <p className="text-xs text-gray-900">Total Tagihan</p>
        <p className="text-xs font-semibold">Rp. 0</p>
      </div>

      <div className="flex justify-center items-center  my-5">
        <button
          type="submit"
          onClick={onPay}
          className="md:w-50 md:h-7 px-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white "
        >
          Bayar Sekarang
        </button>
      </div>
    </div>
  );
};

export default TransactionSummary;
