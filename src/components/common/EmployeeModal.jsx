/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import ListBox from "./ListBox";

import { tableData } from "../../pages/hrm/HRM";

export default function EmployeeModal({ open, setOpen }) {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [designation, setDesignation] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDesignation, setSelectedDesignation] = useState({
    name: open?.emplyoee?.designation,
  });

  useEffect(() => {
    setName(open?.emplyoee?.name);
    setId(open?.emplyoee?.id);
    setDesignation(open?.emplyoee?.designation);
    setPhone(open?.emplyoee?.phone);
    setSelectedDesignation({
      name: open?.emplyoee?.designation,
    });
  }, [open, open?.open, open?.emplyoee]);

  const hadleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      id,
      designation: selectedDesignation?.name,
      phone,
    };

    tableData.forEach((item) => {
      if (item.id === open?.emplyoee?.id) {
        item.name = data.name;
        item.id = data.id;
        item.designation = data.designation;
        item.phone = data.phone;
      }
    });

    setOpen({
      open: false,
      emplyoee: {
        name: "",
        id: "",
        designation: "",
        phone: "",
      },
    });
  };

  return (
    <>
      <Transition appear show={open?.open} as={Fragment}>
        <Dialog
          as="div"
          className="relative "
          onClose={() =>
            setOpen({
              open: false,
              emplyoee: {
                name: "",
                id: "",
                designation: "",
                phone: "",
              },
            })
          }
        >
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
                <Dialog.Panel className="w-full max-w-xl transform  rounded-2xl bg-white p-16 pb-8 text-left align-middle shadow-xl transition-all overflow-y-auto ">
                  <div>
                    <div className="flex justify-between">
                      <div className=" mt-3">
                        <p className="mb-1 text-blue-600">Name</p>
                        <input
                          type="text"
                          className="border border-blue-600 py-2 px-4 rounded-lg focus:outline-none"
                          value={name}
                          required
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className=" mt-3">
                        <p className="mb-1 text-blue-600">ID</p>
                        <input
                          type="text"
                          className="border border-blue-600 py-2 px-4 rounded-lg focus:outline-none"
                          value={id}
                          required
                          onChange={(e) => setId(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between gap-4">
                      <div className=" mt-3 w-full">
                        <p className="mb-1 text-blue-600">Designation</p>
                        <ListBox
                          items={[
                            {
                              name: "Manager",
                              id: 1,
                            },
                            {
                              name: "Assistant Manager",
                              id: 2,
                            },
                            {
                              name: "Supervisor",
                              id: 3,
                            },
                            {
                              name: "Worker",
                              id: 4,
                            },
                          ]}
                          textSize="text-base"
                          selected={selectedDesignation}
                          setSelected={setSelectedDesignation}
                        />
                        {/* <input
                          type="text"
                          className="border border-blue-600 py-2 px-4 rounded-lg focus:outline-none"
                          value={designation}
                          onChange={(e) => setDesignation(e.target.value)}
                          required
                        /> */}
                      </div>
                      <div className=" mt-3">
                        <p className="mb-1 text-blue-600">Phone NUmber</p>
                        <input
                          type="text"
                          className="border border-blue-600 py-2 px-4 rounded-lg focus:outline-none"
                          value={phone}
                          required
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex gap-4  mt-16 justify-center">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-lg border border-red-700 bg-transparent px-6 py-3 text-sm font-medium text-red-600 focus:outline-none "
                        onClick={() =>
                          setOpen({
                            open: false,
                            emplyoee: {
                              name: "",
                              id: "",
                              designation: "",
                              phone: "",
                            },
                          })
                        }
                        // onClick={closeModal}
                      >
                        Delete
                      </button>
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-lg border border-transparent bg-blue-700 px-12 py-3 text-sm font-medium text-white focus:outline-none "
                        // onClick={closeModal}
                        onClick={hadleSubmit}
                      >
                        Save
                      </button>
                    </div>
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
