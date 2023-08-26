/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// const people = [
//   { name: "Wade Cooper" },
//   { name: "Arlene Mccoy" },
//   { name: "Devon Webb" },
//   { name: "Tom Cook" },
//   { name: "Tanya Fox" },
//   { name: "Hellen Schmidt" },
// ];

export default function ListBox({
  items,
  textSize = "",
  selected,
  setSelected,
}) {
  // const [selected, setSelected] = useState(items[0]);

  return (
    <div className="w-full font-medium">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button
            className={`relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left focus:outline-none 
           ${textSize ? `${textSize}` : "sm:text-sm"}
           
           border border-blue-600`}
          >
            <span className="block truncate">
              {selected.name ? selected.name : " "}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm 
           
           "
              style={{
                zIndex: 1000,
              }}
            >
              {items.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-blue-100 text-blue-600" : "text-gray-600"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name ? person.name : " "}
                      </span>
                      {/* {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null} */}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
