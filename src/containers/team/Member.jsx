import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import { User } from '../../models/User';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import UserTasks from '../../components/global/UserTasks';
import { CHANGE_PASSWORD, DETAILS_TASK } from '../../constants/paths';
import { formatDate } from '../../helpers/utils';


import OverviewChart from '../dashboard/charts/Overview';
import ActivityChart from '../dashboard/charts/LastDays';

import { MembersContext } from '../../context/MembersContext';
import { TasksContext } from '../../context/TasksContext';
import { CheckCircleIcon, CheckIcon } from '../../components/Icons';

const Member = () => {

    let { id } = useParams();

    const [filtered, setFiltered] = useState([]);
    const [created, setCreated] = useState([]);
    const { tasks, loadingTasks } = useContext(TasksContext);
    const { GetMember, member, loading, error } = useContext(MembersContext);

    useEffect(() => {
        if (id) {
            GetMember(id);
            setCreated([...tasks.filter(t => t.author._id === id)]);
            setFiltered([...tasks.filter(t => t.assigned && (t.assigned._id === id))]);
        }
      }, [id]);

    return ( 
        <Layout className="bg-gray-50">
            <div className="flex justify-between p-2 border-b border-gray-100">
                <div className="p-2">
                    <h1 className="m-0 text-2xl font-bold text-gray-400">Member</h1>
                </div>
                <div className="p-2">
                </div>
            </div>
            <div className="container mx-auto mt-5 md:mt-2">
                <div className="md:grid grid-cols-12 gap-6 mb-4">
                    <div className="col-span-8">

                    { member && <ProfileForm member={member} loading={loading} error={error} /> }


                        <div className="px-4  sm:p-2">
                            <Card>
                                <Card.Header>{member.first_name}'s progress</Card.Header>
                                <Card.Body>
                                    <div className="md:grid grid-cols-12 gap-6 mb-4">
                                        <div className="col-span-6">
                                            <OverviewChart tasks={filtered}/>
                                        </div>
                                        <div className="col-span-6">
                                            <ActivityChart tasks={filtered}/>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>



                        <div className="px-4  sm:p-2">
                            <Card>
                                <Card.Header>Tasks created <span className="text-sm ml-1 text-gray-300">( {created.length} )</span></Card.Header>
                                <Card.Body>

                                    {
                                        !loadingTasks && !created.length && (
                                            <div className="flex items-center justify-center border border-gray-300 border-opacity-50 border-dashed rounded">
                                                <div className="w-full p-4 text-sm text-center text-gray-400">
                                                    <div>{member.first_name} hasn't created any task</div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    <div>
                                    {
                                        created.map(task => (
                                            <Link to={DETAILS_TASK(task._id)}  key={task._id} className="flex items-center justify-between text-sm text-gray-500 rounded hover:bg-blue-50 focus:outline-none ">
                                                <div  className="flex items-center w-full p-2 ">
                                                    {
                                                        task.completed ? <CheckCircleIcon className="w-6 mr-2 text-blue-500" /> : <CheckIcon  className="w-6 mr-2 text-gray-300 border border-gray-300 rounded-full"/>
                                                    }
                                                    <div className="w-full pr-4 overflow-hidden whitespace-nowrap font-semibold text-black">
                                                        {task.title}
                                                        <div className="text-gray-400 font-normal">{formatDate(task.createdAt, "MMMM DD, hh:mm a")}</div>
                                                    </div>
                                                </div>
                                                <div className="items-center justify-start hidden w-3/6 p-2 md:flex">
                                                    {task.project ? task.project.title : ""}
                                                </div>
                                                <div className="items-center justify-start hidden w-3/6 p-2 md:flex">
                                                    <img src={task.assigned ? task.assigned.avatar : "/avatar.jpg"} className="w-6 h-6 mr-2 rounded-full" alt=""/>
                                                    <div className="w-full">
                                                        <span className="text-gray-400 mb-2">Assigned</span>
                                                        
                                                        <span className="flex items-center mb-0 font-normal whitespace-nowrap">
                                                            {
                                                                task.assigned ? `${task.assigned.first_name} ${task.assigned.last_name}` : "Unassigned"
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))
                                    }
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        


                    </div>
                    <div className="col-span-4">
                        <UserTasks title={`${member.first_name}'s tasks`} tasks={filtered} loading={loadingTasks}/>
                    </div>
                </div>
            </div>
        </Layout>
     );
}
 
export default Member;


function ProfileForm({member, loading, error}) {
    
    const user = new User(member);

    return (
        <div>
                {
                    error && <div className="text-red-500 bg-red-100 alert">There was a loading the user <br/>{error}</div>
                }

                <div className="px-4 sm:p-2">

                    <div className="mb-10 text-center">
                        <img src={loading ? '/avatar.jpg': user.avatar } alt="Photo" className="mx-auto block w-16 md:w-20 rounded-full shadow"/>
                        { loading ? <InputLoader/> : 
                            <>
                            <h2 className="text-xl md:text-2xl font-bold my-2"> {user.first_name} {user.last_name}</h2>
                            <span className={`${user.role ==='admin' ? 'text-yellow-600 bg-yellow-200': 'text-blue-600 bg-blue-200'} px-4 py-1 text-sm font-semibold uppercase rounded`}>
                                {user.role}
                            </span>
                            </>
                        }
                    </div>

                    <Card>
                        <Card.Body>

                        <h3 className="font-bold text-lg mb-4 text-black">Contact</h3>

                            <div className="md:grid grid-cols-10 gap-5">
                                <div className="col-span-5 md:flex items-center">
                                    <span className="font-semibold mr-2">Email: </span>
                                    <span className="text-gray-400">{user.email}</span>
                                </div>
                                <div className="col-span-5 md:flex items-center">
                                    <span className="font-semibold mr-2">Phone: </span>
                                    <span className="text-gray-400">{user.phone || "--"}</span>
                                </div>
                                <div className="col-span-5 md:flex items-center">
                                    <span className="font-semibold mr-2">Status: </span>
                                    <span className="bg-green-100 text-green-400 py-1 text-sm px-4 rounded">{user.status === 1 ? 'Active' : 'Blocked'}</span>
                                </div>
                                <div className="col-span-5 md:flex items-center">
                                    <span className="font-semibold mr-2">Joined: </span>
                                    <span className="text-gray-400">{formatDate(user.createdAt, "MMMM DD, YY.")}</span>
                                </div>
                            </div>

                            <h3 className="font-bold text-lg my-4 text-black">Location</h3>

                            <div className="md:grid grid-cols-10 gap-5">
                                <div className="col-span-5 md:flex items-center">
                                    <span className="font-semibold mr-2">Country/Region: </span>
                                    <span className="text-gray-400">{user.address.country || "--"}</span>
                                </div>
                                <div className="col-span-5 md:flex items-center">
                                    <span className="font-semibold mr-2">State: </span>
                                    <span className="text-gray-400">{user.address.state || "--"}</span>
                                </div>
                                <div className="col-span-5 md:flex items-center">
                                    <span className="font-semibold mr-2">City: </span>
                                    <span className="text-gray-400">{user.address.city || "--"}</span>
                                </div>
                                <div className="col-span-5 md:flex items-center">
                                    <span className="font-semibold mr-2">Street: </span>
                                    <span className="text-gray-400">{user.address.street || "--"}</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
        </div>
    )
}

function InputLoader({ className }) {
    return (
        <div className={`animate-pulse rounded-sm bg-gray-200 h-10 w-full ${className}`}></div>
    )
}