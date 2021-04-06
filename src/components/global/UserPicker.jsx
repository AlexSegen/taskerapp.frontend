import React, { useContext, useEffect, useState } from 'react'

import { searchOption } from '../../helpers/utils'
import { TasksContext } from '../../context/TasksContext';

const UserPicker = ({onSelect, selected, disabled }) => {

    const { users } = useContext(TasksContext);
    const [user, setUser] = useState(selected);
    const [filtered, setFiltered] = useState([]);

    const [toggle, setToggle] = useState(false);

    const handleSelect = u => {
        setUser(u);
        onSelect(u);
    }

    const searchItem = (e) => {
        const { value } = e.target;
        setFiltered([...searchOption(users.map(u => ({ ...u, name: `${u.first_name} ${u.last_name}` })), value, "name")])
    }

    const handleToggle = () => {

        document.addEventListener('click', e => {

            if(e.target.classList.contains('__userpicker')) {
                setToggle(!toggle);
            } else {
                setToggle(false);
            }

        })

    }

    useEffect(() => {
        setUser(selected)
    }, [selected])

    useEffect(() => {
        setFiltered(users);
    }, [users])

    useEffect(() => {
        handleToggle();

        return () => {
            document.removeEventListener('click', () =>{ })
        }
    }, [])

    return (
        <div className="relative max-w-md">
            <button disabled={disabled} type="button"
            className={`relative rounded flex items-center justify-start px-5 py-2 text-base font-semibold   focus:text-gray-700 focus:outline-none hover:text-gray-700 ${toggle ? 'text-gray-700 bg-blue-100':'text-gray-600'} ${disabled ? '':'hover:bg-blue-100'}`}>
            {
                    user ? 
                        (
                            <>
                            <img className="block w-8 mr-3 rounded-full" src={user.avatar} alt=""/> 
                            <span> {user.first_name} {user.last_name} </span> 
                            { !disabled && <span onClick={() => handleSelect(null)} role="button" className="relative z-20 ml-2 text-sm font-normal text-gray-500">(remove)</span> }
                            </>
                        ) : (
                            <>
                            <img className="block w-8 mr-3 rounded-full" src="/avatar.jpg" alt=""/>
                            <span>Unassigned</span>
                            </>
                        )
                }
                <div className={`absolute top-0 bottom-0 left-0 right-0 z-10 ${!disabled ? '__userpicker':''}`}></div>
            </button>

            {
                toggle && (
                    <div className="absolute left-0 z-10 p-4 bg-white rounded-lg shadow-md top-12">
                        <input onChange={searchItem} className="px-5 py-3 mb-4 text-sm field-control __userpicker" placeholder="Search user..." type="text"/>
                        <div className="overflow-y-auto" style={{maxHeight: "180px", minWidth: "170px"}}>

                            {
                                filtered.map(u => (
                                    <div key={u._id} className="flex items-center justify-start mb-2 cursor-pointer" onClick={() => handleSelect(u)}>
                                        <img className="block w-6 mr-3 rounded-full" src={u.avatar} alt=""/> 
                                        <span className="flex items-center justify-start text-sm text-gray-600"> {u.first_name} {u.last_name} </span>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                )
            }

        </div>
     );
}
 
export default UserPicker;