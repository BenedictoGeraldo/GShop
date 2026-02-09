"use client";

import AddressShipping from "./components/addressShipping";
import ProductToBuy from "./components/productToBuy";
import TransactionSummary from "./components/transactionSummary";

const CheckoutView = () => {
  const handleUnderDevelopment = () => {
    alert("This feature is under development");
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 pt-35">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-semibold text-xl md:text-3xl">Checkout</h1>
          <div className="flex flex-col md:flex-row gap-3 ">
            <div className="w-full md:w-3/5">
              <AddressShipping onChangeAddress={handleUnderDevelopment} />
              <ProductToBuy />
            </div>
            <TransactionSummary onPay={handleUnderDevelopment} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutView;
