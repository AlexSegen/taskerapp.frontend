import React, { Fragment, useState, useContext, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";

import { TasksContext } from '../../context/TasksContext';
import { CheckIcon, SelectorIcon } from "../Icons";

const initialState = { _id: 0, title: "All Projects"};

const ProjectFilter = () => {
    
    const [selected, setSelected] = useState(initialState);
    const [options, setOptions] = useState([]);

    const { projects, setFiltered, tasks } = useContext(TasksContext);

    const handleSelect = (val) => {
        setSelected(val);
        setFiltered(val && val._id === 0 ? "all" : val._id);
    }

    useEffect(() => {
        handleSelect(initialState);
        setOptions([initialState, ...projects]);
    }, [tasks, projects])

  return (
    <div className="relative z-10">
      <Listbox value={selected} onChange={handleSelect}>
        {({ open }) => (
          <>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full py-6 px-4 pr-10 text-left bg-white rounded-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500">
                <span className="block truncate font-bold text-gray-600 text-base md:text-lg uppercase">{selected.title}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  static
                  className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                >

                  {options.map((project, projectIdx) => (
                    <Listbox.Option
                      key={projectIdx}
                      className={({ active }) =>
                        `${
                          active
                            ? "text-amber-900 bg-amber-100"
                            : "text-gray-900"
                        }
                          cursor-pointer select-none relative py-2 pl-10 pr-4 hover:bg-blue-50`
                      }
                      value={project}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block truncate`}
                          >
                            {project.title}
                          </span>
                          {selected ? (
                            <span
                              className={`${
                                active ? "text-amber-600" : "text-amber-600"
                              }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}


export default ProjectFilter;