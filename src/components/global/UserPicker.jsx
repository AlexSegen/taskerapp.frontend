import React, { useContext, useEffect, useState } from 'react'
import { TasksContext } from '../../context/TasksContext';

const UserPicker = ({onSelect, selected, disabled }) => {

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
        <div className="relative max-w-md">
            <button disabled={disabled} type="button" onClick={() => setToggle(!toggle) } 
            className="flex items-center justify-start px-5 py-2 text-base font-bold text-gray-600 hover:text-gray-700 hover:bg-blue-100 focus:text-gray-700 focus:outline-none">
            {
                    user ? 
                        (
                            <>
                            <img className="block w-8 mr-3 rounded-full" src={user.avatar} alt=""/> 
                            <span> {user.first_name} {user.last_name} </span> 
                            { !disabled && <span onClick={() => handleSelect(null)} role="button" className="ml-2 text-sm font-normal text-gray-500">(remove)</span> }
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
                    <div className="absolute left-0 z-10 p-4 bg-white rounded-lg shadow-md top-20">
                        <input className="w-full px-5 py-3 mb-4 text-sm bg-gray-100" placeholder="Search user..." type="text"/>
                        <div className="overflow-y-auto" style={{maxHeight: "180px"}}>

                            {
                                users.map(u => (
                                    <div key={u._id} className="flex items-center justify-start mb-2 cursor-pointer" onClick={() => handleSelect(u)}>
                                        <img className="block w-6 mr-3 rounded-full" src={u.avatar} alt=""/> 
                                        <span className="text-sm text-gray-600"> {u.first_name} {u.last_name} </span>
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