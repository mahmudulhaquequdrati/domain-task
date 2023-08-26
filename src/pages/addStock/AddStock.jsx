/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/common/BreadCrumb";
import ComboBox from "../../components/common/ComboBox";
import ListBox from "../../components/common/ListBox";
import StockModal from "../../components/common/StockModal";
import { useDispatch, useSelector } from "react-redux";
import { setSubTotal } from "../../features/stock/stockSlice";
import { Link } from "react-router-dom";

const feulType = [
  { name: "LPG" },
  { name: "CNG" },
  { name: "Petrol" },
  { name: "Disel" },
];

const paymentMethod = [
  { name: "Bank" },
  { name: "Bkash" },
  { name: "Rocket" },
  { name: "Nagad" },
];

export default function AddStock() {
  const [quantity, setQuantity] = useState(0);

  const items = useSelector((state) => state.stock.chargeItems);

  const rate = 50;

  const subTotal = rate * quantity;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSubTotal(subTotal));
  }, [dispatch, subTotal]);

  // can we get the total without loop
  const getTheTotal = () => {
    const total = items.reduce((acc, item) => {
      return acc + parseFloat(item.amount);
    }, 0);
    return total;
  };

  const total = getTheTotal() + subTotal;

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [selectedFeul, setSelectedFeul] = useState(feulType[0]);

  const [selectedPayment, setSelectedPayment] = useState(paymentMethod[0]);

  const [success, setSuccess] = useState(false);

  const handleAddStock = () => {
    setSuccess(true);
  };
  const [selected, setSelected] = useState({});
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      vendorName: selected,
      vendorContact: phone,
      feulType: selectedFeul.name,
      quantity: quantity,
      rate: rate,
      subTotal: subTotal,
      total: total,
      paymentMethod: selectedPayment.name,
    };
    console.log(data);
    setSuccess(true);
  };

  return (
    <div>
      <BreadCrumb title="Stock Management " pageTitle="Add Stock" />
      {!success && (
        <form className="" onSubmit={handleSubmit}>
          <div className="flex gap-4 mt-8 font-medium">
            <div className="">
              <p className="text-blue-600">Vendor name</p>
              <ComboBox selected={selected} setSelected={setSelected} />
            </div>
            <div className="">
              <p className="text-blue-600 mb-1">Vendor Contact No.</p>
              <input
                type="text"
                className=" rounded-lg focus:outline-none  text-sm  px-3 py-2 border border-blue-600 leading-5"
                placeholder="Ex-01xxxxxxxx"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
              />
            </div>
          </div>

          {/* hr */}
          <div className="mt-8">
            <hr className="h-[0.15rem] w-full bg-blue-600"></hr>
          </div>

          {/*  */}
          <div className="grid grid-cols-1 lg:grid-cols-9 gap-6 mt-8 font-medium">
            <div className="col-span-2">
              <p className="text-blue-600">Feul Type</p>
              <ListBox
                items={feulType}
                selected={selectedFeul}
                setSelected={setSelectedFeul}
              />
            </div>
            <div className="col-span-2">
              <p className="text-blue-600 mb-1">Quantity (Ltr)</p>
              <div className="">
                <input
                  type="number"
                  className="rounded-lg w-full focus:outline-none  text-sm  px-3 py-2 border border-blue-600 leading-5"
                  placeholder="Ex-200L"
                  value={quantity.value}
                  onBlur={(e) => {
                    setQuantity(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex justify-between">
                <p className="text-blue-600 mb-1">Rate/Unit </p>
                <p className="text-blue-600 mb-1 underline">Edit Rate </p>
              </div>
              <div className="relative rounded-lg focus:outline-none  text-sm text-center  px-3 py-2 border border-blue-600 leading-5">
                50৳
              </div>
            </div>
            <div className="col-span-1 lg:col-span-2 -mr-6">
              <div className="basis-3/4">
                <p className="text-blue-600 mb-1">Subtotal </p>
                <div className="relative rounded-lg focus:outline-none  text-sm text-center px-3 py-2 border border-blue-600 leading-5">
                  {subTotal}৳
                </div>
              </div>
              <div className="mt-4 text-sm">
                {items &&
                  items.map((item, index) => (
                    <div className="flex" key={index}>
                      <p className="text-gray-600 mb-1 w-4/6">{item?.name} </p>
                      <p className="text-blue-600 mb-1"> : </p>
                      <p className="text-blue-600 mb-1 ml-2">
                        {" "}
                        {item?.amount}৳
                      </p>
                    </div>
                  ))}

                {items.length > 0 && (
                  <div className="flex border-t border-blue-600 pt-1 mt-1">
                    <p className="text-gray-600 mb-1 w-4/6">Total </p>
                    <p className="text-blue-600 mb-1"> : </p>
                    <p className="text-blue-600 mb-1 ml-2"> {total}৳</p>
                  </div>
                )}
              </div>
            </div>
            <div className="col-span-1 text-center">
              <span className=" inline-block py-0.5 px-2 text-center rounded-md text-[0.6rem] font-medium bg-blue-700 text-white flex-nowrap  ">
                Add Charge
              </span>
              <img
                onClick={openModal}
                src="./images/addCharge.svg"
                alt=""
                className="w-[40%] h-10 mx-auto mt-1 cursor-pointer"
              />
              <StockModal isOpen={isOpen} closeModal={closeModal} />
            </div>
          </div>

          <div className="border-t border-b border-blue-600 mt-16 py-12 bg-[#F8F8F8]">
            <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-4">
              <div className="">
                <p className="text-blue-600">Payment Method</p>
                <ListBox
                  items={paymentMethod}
                  textSize="text-lg"
                  selected={selectedPayment}
                  setSelected={setSelectedPayment}
                />
              </div>
              <div className="">
                <p className="text-blue-600 mb-1">Invoice From Vendor</p>
                <div className="px-4 py-2 rounded-lg border border-blue-600">
                  <p className="text-blue-600 text-lg">Upload Invoice</p>
                </div>
              </div>
              <div className="flex-end">
                <button
                  type="submit"
                  className="px-12 py-2 rounded-lg bg-blue-600 text-lg
             text-white"
                  // onClick={handleAddStock}
                >
                  Add Stock
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

      {success && (
        <section className="px-[5%]">
          <div className="flex justify-center text-center">
            <div>
              <svg
                className="block mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="161"
                height="158"
                viewBox="0 0 161 158"
                fill="none"
              >
                <path
                  d="M81.9459 153.628H79.0376C37.808 153.628 4.448 120.267 4.448 79.0379C4.448 37.8083 37.808 4.44824 79.0376 4.44824H81.9459C123.176 4.44824 156.536 37.8083 156.536 79.0379C156.536 120.096 123.176 153.628 81.9459 153.628Z"
                  fill="white"
                />
                <path
                  d="M81.9459 153.627H79.0376C37.808 153.627 4.448 120.266 4.448 79.0369C4.448 37.8073 37.808 4.44727 79.0376 4.44727H81.9459C123.176 4.44727 156.536 37.8073 156.536 79.0369C156.536 120.095 123.176 153.627 81.9459 153.627Z"
                  fill="white"
                />
                <path
                  d="M81.9459 157.733H79.0376C35.413 157.733 0 122.491 0 78.8666C0 35.413 35.413 0 78.8666 0H81.7749C125.228 0 160.641 35.413 160.641 78.8666C160.812 122.491 125.4 157.733 81.9459 157.733ZM79.0376 8.55386C40.2031 8.55386 8.55386 40.2031 8.55386 79.0376C8.55386 117.872 40.2031 149.521 79.0376 149.521H81.9459C120.78 149.521 152.43 117.872 152.43 79.0376C152.43 40.2031 120.78 8.55386 81.9459 8.55386H79.0376Z"
                  fill="#0046FF"
                />
                <path
                  d="M81.9459 22.2411C113.253 22.2411 138.744 47.7316 138.744 79.0387C138.744 110.346 113.253 135.836 81.9459 135.836H79.0376C47.7305 135.836 22.24 110.346 22.24 79.0387C22.24 47.7316 47.7305 22.2411 79.0376 22.2411H81.9459ZM81.9459 19.5039H79.0376C46.3619 19.5039 19.6738 46.1919 19.6738 78.8677C19.6738 111.543 46.3619 138.231 79.0376 138.231H81.9459C114.622 138.231 141.31 111.543 141.31 78.8677C141.31 46.1919 114.622 19.5039 81.9459 19.5039Z"
                  fill="#0046FF"
                />
                <path
                  d="M112.74 48.2432L71.1681 89.8149L54.7447 73.3915L43.4536 84.8537L71.1681 112.568L124.031 59.7053L112.74 48.2432Z"
                  fill="#0046FF"
                />
              </svg>
              <h4 className="text-3xl md:text-4xl font-medium mt-5">
                Stock Added
              </h4>
              <h2 className="text-6xl md:text-7xl font-bold text-[#0046FF]">
                Successfully
              </h2>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex justify-center gap-6 text-lg font-medium text-[#989898] mb-2">
              <p>Vendor Name</p>
              <span className="text-lg font-medium text-[#989898]">:</span>
              <a className="text-[#0046FF]" href="#">
                {selected?.name}
              </a>
            </div>
            <div className="flex justify-center gap-6 text-lg font-medium text-[#989898] mb-2">
              <p>Vendor Contact No.</p>
              <span className="text-lg font-medium text-[#989898]">:</span>
              <a className="text-[#0046FF]" href="#">
                {phone}
              </a>
            </div>
            <div className="flex justify-center gap-6 text-lg font-medium text-[#989898] mb-2">
              <p>Fuel Type</p>
              <span className="text-lg font-medium text-[#989898]">:</span>
              <a className="text-[#0046FF]" href="#">
                {selectedFeul.name}
              </a>
            </div>
            <div className="flex justify-center gap-6 text-lg font-medium text-[#989898] mb-2">
              <p>Quantity</p>
              <span className="text-lg font-medium text-[#989898]">:</span>
              <a className="text-[#0046FF]" href="#">
                {quantity}L
              </a>
            </div>
            <div className="flex justify-center gap-6 text-lg font-medium text-[#989898] mb-2">
              <p>Rate/Unit</p>
              <span className="text-lg font-medium text-[#989898]">:</span>
              <a className="text-[#0046FF]" href="#">
                {rate} BDT/Litre
              </a>
            </div>
            <div className="flex justify-center gap-6 text-lg font-medium text-[#989898] mb-2">
              <p>Total Bill</p>
              <span className="text-lg font-medium text-[#989898]">:</span>
              <a className="text-[#0046FF]" href="#">
                {total}
              </a>
            </div>
            {items &&
              items.map((item, index) => (
                <div
                  className="flex justify-center gap-6 text-lg font-medium text-[#989898] mb-2"
                  key={index}
                >
                  <p>Tax 5%</p>
                  <span className="text-lg font-medium text-[#989898]">:</span>
                  <a className="text-[#0046FF]" href="#">
                    35000
                  </a>
                </div>
              ))}
            <div className="flex justify-center gap-6 text-lg font-medium text-[#989898] mb-2">
              <p>Subtotal</p>
              <span className="text-lg font-medium text-[#989898]">:</span>
              <a className="text-[#0046FF]" href="#">
                {subTotal}
              </a>
            </div>
            <div className="flex justify-center gap-6 text-lg font-medium text-[#989898] mb-2">
              <p>Payment Method</p>
              <span className="text-lg font-medium text-[#989898]">:</span>
              <a className="text-[#0046FF]" href="#">
                {selectedPayment.name}
              </a>
            </div>
          </div>
          <Link
            to="/dashboard"
            className="text-2xl w-72 font-medium text-white bg-[#0046FF] py-5 px-12 rounded-2xl text-center block mx-auto my-9"
          >
            Dashboard
          </Link>
        </section>
      )}
    </div>
  );
}
