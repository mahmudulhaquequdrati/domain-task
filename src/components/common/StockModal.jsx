/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ListBox from "./ListBox";
import { useDispatch, useSelector } from "react-redux";
import { setChargeItems } from "../../features/stock/stockSlice";

export default function StockModal({ isOpen, closeModal }) {
  const ChargeType = [
    { name: "Transport Cost" },
    { name: "Vat" },
    { name: "Source tax" },
    { name: "Cost" },
  ];

  const [value, setValue] = useState(0);

  const [selected, setSelected] = useState({
    name: ChargeType[0].name,
  });

  const handleClose = () => {
    setSelected({
      name: ChargeType[0].name,
    });
    closeModal();
  };

  const dispatch = useDispatch();

  const subTotal = useSelector((state) => state.stock.subTotal);

  const handleAddCharge = () => {
    // if anyone give any amount with % sign it will calculate the percentage of subTotal
    if (value.includes("%")) {
      const percentage = value.replace("%", "");
      const amount = (subTotal * parseFloat(percentage)) / 100;

      dispatch(
        setChargeItems({
          name: selected.name,
          amount: amount,
        })
      );
    } else {
      dispatch(
        setChargeItems({
          name: selected.name,
          amount: parseFloat(value),
        })
      );
    }

    setSelected({
      name: ChargeType[0].name,
    });
    setValue(0);
    closeModal();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 ">
            <div className="flex  items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0  absolute top-[80px]"
                enterTo="opacity-100  absolute top-[20%]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100  absolute top-[10%]"
                leaveTo="opacity-0  absolute top-[30px]"
              >
                <Dialog.Panel className="w-full max-w-md transform  rounded-2xl bg-white p-12 pb-8 text-left align-middle shadow-xl transition-all overflow-y-auto ">
                  <div>
                    <p className="mb-1 text-blue-600">Charge Type</p>
                    <ListBox
                      items={ChargeType}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  </div>
                  <div className=" mt-3">
                    <p className="mb-1 text-blue-600">Amount</p>
                    <input
                      type="text"
                      className="border border-blue-600 py-2 px-4 rounded-lg focus:outline-none"
                      value={value}
                      onChange={(e) => {
                        setValue(e.target.value);
                      }}
                      required
                    />
                  </div>

                  <div className="flex gap-4  mt-16 justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-lg border border-red-700 bg-transparent px-6 py-3 text-sm font-medium text-red-600 focus:outline-none "
                      onClick={handleClose}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-lg border border-transparent bg-blue-700 px-6 py-3 text-sm font-medium text-white focus:outline-none "
                      onClick={handleAddCharge}
                    >
                      Add Charge
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
