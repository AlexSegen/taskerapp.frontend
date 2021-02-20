import React, { useContext, useEffect, useState } from 'react'
import { TasksContext } from '../../context/TasksContext';

const UserPicker = ({onSelect, selected }) => {

    const { users } = useContext(TasksContext);
    const [user, setUser] = useState(selected);

    const [toggle, setToggle] = useState(false);

    const handleSelect = u => {
        setUser(u);
        onSelect(u);
        setToggle(false)
    }

    useEffect(() => {
        setUser(selected)
    }, [selected])

    return (
        <div className="relative max-w-sm">
            <button type="button" onClick={() => setToggle(!toggle) } className="text-gray-600 hover:text-gray-700 px-5 py-2 font-bold focus:text-gray-700 focus:outline-none text-base flex items-center justify-start">
            {
                    user ? 
                        (
                            <>
                            <img className="block w-8 mr-3 rounded-full" src={user.avatar} alt=""/> 
                            <span> {user.first_name} {user.last_name} </span> <span onClick={() => handleSelect(null)} role="button" className="text-sm ml-2 text-gray-500 font-normal">(remove)</span>
                            </>
                        ) : (
                            <>
                            <img className="block w-8 mr-3 rounded-full" src="/avatar.jpg" alt=""/>
                            <span>Unassigned</span>
                            </>
                        )
                }
            </button>

            {
                toggle && (
                    <div className="p-4  rounded-lg absolute bg-white z-10 left-0 top-20 shadow-md">
                        <input className="bg-gray-100 px-5 py-3 w-full mb-4 text-sm" placeholder="Search user..." type="text"/>
                        <div className="overflow-y-auto" style={{maxHeight: "180px"}}>

                            {
                                users.map(u => (
                                    <div key={u._id} className="flex items-center justify-start mb-2 cursor-pointer" onClick={() => handleSelect(u)}>
                                        <img className="block w-6 mr-3 rounded-full" src={u.avatar} alt=""/> 
                                        <span className="text-gray-600 text-sm"> {u.first_name} {u.last_name} </span>
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