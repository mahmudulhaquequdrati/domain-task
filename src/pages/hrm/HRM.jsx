/* eslint-disable react-refresh/only-export-components */
// import React from "react";
import React, { useState } from "react";
import BreadCrumb from "../../components/common/BreadCrumb";
import EmployeeModal from "../../components/common/EmployeeModal";

export const tableData = [
  {
    id: "#22gfsdg1",
    name: "Jhon Doe",
    designation: "Manager",
    phone: "+88017xxxxxxxx",
    image: "./images/prof.png",
  },
  {
    id: "#3yfthfgh",
    name: "Michel John",
    designation: "HR",
    phone: "+88017xxxxxxxx",
    image: "./images/prof2.png",
  },
  {
    id: "#5dfyhfg",
    name: "Kyle Nicholson",
    designation: "Engineer",
    phone: "+88017xxxxxxxx",
    image: "./images/prof3.png",
  },
  {
    id: "#8gdrgfd",
    name: "Mason Garner",
    designation: "Maintenance",
    phone: "+88017xxxxxxxx",
    image: "./images/prof4.png",
  },
];

export default function HRM() {
  const data = [
    {
      id: 1,
      name: "All Employees",
      total: 26,
    },
    {
      id: 2,
      name: "Manager",
      total: 2,
    },
    {
      id: 3,
      name: "Engineer",
      total: 3,
    },
    {
      id: 4,
      name: "Maintenance",
      total: 5,
    },
    {
      id: 5,
      name: "Supervisor",
      total: 4,
    },
  ];

  const [open, setOpen] = useState({
    open: false,
    emplyoee: {},
  });

  const handleData = (data) => {
    setOpen({ open: true, emplyoee: data });
  };

  const [search, setSearch] = useState("");

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        <div className="col-span-1">
          <BreadCrumb pageTitle={"Employees"} title={"HRM"} />
        </div>
        <div className="flex items-end gap-4  mt-8 lg:mt-0 col-span-2 ">
          <div className="w-6/12">
            <p>Search for Employee</p>
            <div className="relative border border-blue-700 px-4 py-2 rounded-lg flex">
              <input
                className="focus:outline-none text-gray-700 text-sm w-11/12"
                type="text"
                placeholder="Search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <i className="ri-search-line text-blue-600"></i>
            </div>
          </div>
          <div className="w-6/12">
            <button className="bg-blue-600 text-white px-6 py-3 text-sm rounded-lg w-full">
              Add Employee
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-1">
          <section className="bg-white rounded-xl  pb-10 shadow-[0_4px_68px_0px_rgba(0,70,255,.15)] p-[5%]">
            {data.map((item) => (
              <React.Fragment key={item.id}>
                <div
                  className={`flex items-center gap-4 rounded-xl pl-6 py-1 mb-4 ${
                    item.id === 1 && "border-2 border-[#0046FF] py-2"
                  }`}
                >
                  <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#DCE6FF]">
                    <img
                      src="./images/employee.png"
                      className="w-6 h-6 mx-auto"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#0046FF]">
                      {item.name}
                    </h4>
                    <p className="text-xs">
                      Total:
                      {item.total}
                    </p>
                  </div>
                </div>
                {item.id === 1 && (
                  <div className="w-[90%] mx-auto h-[1px] bg-black my-3"></div>
                )}
              </React.Fragment>
            ))}
          </section>
        </div>
        {/* table */}
        <div className="col-span-2">
          <div className="relative overflow-x-auto  sm:rounded-lg">
            <table className="w-full  text-left text-[#ABABAB] bg-gray-50 ">
              <thead className="text-sm text-[#ABABAB]   ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Employee
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Degisnation
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone Number
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.filter((item) => {
                  if (search === "") {
                    return item;
                  } else if (
                    item.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return item;
                  }
                }).length > 0 ? (
                  tableData.map((item) => (
                    // tableData.map((item) =>
                    //  (
                    <React.Fragment key={item.id}>
                      <tr className="bg-gray-50 ">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap min-w-[200px]"
                        >
                          <div className="flex items-center gap-4">
                            <img src={item.image} alt="" />
                            <div className="">
                              <p
                                className="text-blue-600 font-medium
                        "
                              >
                                {item.name}
                              </p>
                              <p className="text-xs">Id: {item.id}</p>
                            </div>
                          </div>
                        </th>
                        <td className="px-6 py-4">{item.designation}</td>

                        <td className="px-6 py-6 flex gap-6 items-center">
                          <p>{item.phone}</p>
                          <img
                            src="./images/edit.png"
                            className="cursor-pointer"
                            alt=""
                            onClick={() => handleData(item)}
                          />
                        </td>
                      </tr>
                    </React.Fragment>
                  ))
                ) : (
                  <tr className="bg-gray-50 ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap min-w-[200px]"
                    >
                      <div className="flex items-center gap-4">
                        No Data Found
                      </div>
                    </th>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <EmployeeModal open={open} setOpen={setOpen} />
    </>
  );
}
