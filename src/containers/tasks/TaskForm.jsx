import React, { useContext, useState } from 'react'

import { useForm } from '../../hooks/useForm';
import TaskToolbar, { Tool } from '../../components/tasks/TaskToolbar';
import { SaveOutlineIcon, PlusCircleOutlineIcon, XOutlineIcon } from '../../components/Icons';
import UserPicker from '../../components/global/UserPicker';
import { TasksContext } from '../../context/TasksContext';

const initialState = {
    "id": 0,
    "title": "",
    "content": "",
    "project": {
        "id": 0
    },
    "assigned": null,
    "tags": []
}

const TaskForm = () => {

    const { setComposing } = useContext(TasksContext);

    const { form, title, content, setForm, handleChange } = useForm(initialState);

    const [tag, setTag] = useState("");

    const handleTag = remove => {

        if (form.tags == null)
        form.tags = []

         if (remove) {
            form.tags.splice(form.tags.findIndex(t => t === remove), 1);
            setForm({...form})
        } else if(!tag.trim().length || form.tags.some(t => t === tag)) {
        
            return;
        
        } else {

            setForm({
                ...form,
                tags: [...form.tags, tag.trim()]
            })
        }
        
        setTag("")
    }


    const handleProject = (e) => {
        const { value } = e.target;
        setForm({...form, project: {...form.project, id: value}})
    }

    const submit = e => {
        e.preventDefault();
        console.log("form", form)
    }

    const onSelect = data => {
        setForm({...form, assigned: data })
    }

    const handleClose = () => {
        setForm(initialState);
        setComposing(false);
    }

    return ( 
        <div className="max-h-screen min-h-screen overflow-y-auto bg-white">
            <TaskToolbar task={form}>
                <Tool onClick={submit} ><SaveOutlineIcon className="w-8"/></Tool>
                <Tool onClick={handleClose}><XOutlineIcon className="w-8"/></Tool>
            </TaskToolbar>
            <div className="w-full px-10 py-10">

                <h1 className="text-gray-700 text-2xl font-bold mb-5">Create new task</h1>

                <form className="w-full max-w-xl" onSubmit={submit}>

                    <UserPicker onSelect={onSelect} selected={form.assigned} />

                    <div className="relative mb-5">
                        <label className="font-bold text-base text-sm mb-3 block" htmlFor="">Title</label>
                        <input value={title} name="title" onChange={handleChange} className="w-full h-16 px-10 py-4 bg-gray-100 focus:outline-none" type="text" placeholder="Write a title"/>
                        <span className="text-sm text-red-400 block px-4"></span>
                    </div>

                    <div className="relative mb-5">
                        <label className="font-bold text-base text-sm mb-3 block" htmlFor="">Content</label>
                        <textarea value={content} className="w-full px-10 py-4 bg-gray-100 focus:outline-none"
                        placeholder="Write your content"
                        name="content" onChange={handleChange} cols="30" rows="5">

                        </textarea>
                        <span className="text-sm text-red-400 block px-4"></span>
                    </div>

                    <div className="relative mb-5">
                        <label className="font-bold text-base text-sm mb-3 block" htmlFor="">Select project</label>
                        <select value={form.project.id} onChange={handleProject} className="w-full block text-gray-700 bg-gray-100 h-16 px-10 py-4 tracking-wide cursor-pointer focus:outline-none">
                            <option value="0">--</option>
                            <option value="1">Marketing</option>
                            <option value="2">Design</option>
                            <option value="3">Development</option>
                            <option value="4">Management</option>
                            <option value="5">Other</option>
                        </select>
                        <span className="text-sm text-red-400 block px-4"></span>
                    </div>

                    <div className="relative mb-5">
                        <label className="font-bold text-base text-sm mb-3 block" htmlFor="">Tags</label>
                        <div className="flex items-center max-w-md">
                            <input onChange={e => setTag(e.target.value)} value={tag} name="title" className="w-full max-w-lg h-16 px-10 py-4 bg-gray-100 focus:outline-none" type="text" placeholder="Write a tag"/>
                            <button onClick={() => handleTag()} type="button" className="px-10 h-16 py-3 text-white focus:outline-none bg-green-500 hover:bg-green-600">
                                <PlusCircleOutlineIcon  className="w-6" />
                            </button>
                        </div>
                        {
                            form.tags && form.tags.length > 0 && (

                                <div className="my-4">
                                    {
                                         form.tags.map(tag => (
                                            <span onClick={() => handleTag(tag)} key={tag} className="rounded-full px-6 py-3 inline bg-gray-200 text-sm cursor-pointer hover:bg-red-200 mr-2">{tag}</span>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>

                    <div className="p-4 text-left">
                        <button type="submit" className="px-10 py-3 text-white bg-blue-600 rounded-full focus:outline-none hover:bg-blue-700">Save task</button>
                    </div>

                </form>

            </div>
        </div>
     );
}
 
export default TaskForm;