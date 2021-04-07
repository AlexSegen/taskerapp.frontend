import React, { useContext, useEffect, useState } from 'react'
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';

import { useForm } from '../../hooks/useForm';
import { TasksContext } from '../../context/TasksContext';
import TaskToolbar, { Tool } from '../../components/tasks/TaskToolbar';
import {ReactQuillModules,ReactQuillFormats} from "../../helpers/ReactQuill";
import { SaveOutlineIcon, PlusCircleOutlineIcon, XOutlineIcon } from '../../components/Icons';

const TaskForm = ({ onClose }) => {

    const { selected, setTask, editTask, loadingProjects, projects, errorProjects, loadingTask, errorTask } = useContext(TasksContext);

    const { form, title, content, setForm, handleChange } = useForm(selected);

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
        setForm({...form, project: { ...form.project, _id: value}})
    }

    const submit = e => {
        e.preventDefault();
        form._id === 0 ? setTask(form) : editTask(form)
    }

    const onSelect = data => {
        setForm({...form, assigned: data })
    }

    useEffect(() => {
        setForm({...selected})
    }, [selected])

    return ( 
        <div className="max-h-screen min-h-screen overflow-y-auto bg-white">
            <TaskToolbar task={form} onSelect={onSelect} disabled={loadingTask}>
                <Tool disabled={loadingTask} onClick={submit} ><SaveOutlineIcon className="w-8"/></Tool>
                <Tool disabled={loadingTask} onClick={onClose}><XOutlineIcon className="w-8"/></Tool>
            </TaskToolbar>
            <div className="max-w-screen-md px-10 py-10 mx-auto">

                <h1 className="mb-5 text-2xl font-bold text-gray-700"> { selected && selected._id !== 0 ? 'Edit':'Create new' } task</h1>

                <form className="w-full max-w-xl" onSubmit={submit}>

                    <div className="relative mb-5">
                        <label className="block mb-3 text-sm text-base font-bold" htmlFor="">Title</label>
                        <input disabled={loadingTask} value={title} name="title" onChange={handleChange} className="w-full h-16 px-10 py-4 field-control" type="text" placeholder="Write a title"/>
                        <span className="block px-4 text-sm text-red-400"></span>
                    </div>

                    <div className="relative mb-5">
                        <label className="block mb-3 text-sm text-base font-bold" htmlFor="">Content</label>

                        <ReactQuill onChange={(value) => setForm({...form, content: value })}
                        placeholder="Write your blog ♥"
                        modules={ReactQuillModules}
                        value={content}
                        formats={ReactQuillFormats}/>
                        <span className="block px-4 text-sm text-red-400"></span>
                    </div>


                    {
                        form.project && (
                            <div className="relative mb-5">
                                <label className="block mb-3 text-sm text-base font-bold" htmlFor="">Select project</label>
                                <select disabled={loadingProjects || loadingTask } value={form.project._id} onChange={handleProject} className="h-16 px-10 py-4 tracking-wide field-control">
                                    <option value="0">--</option>
                                    {
                                        projects.map(p => (<option key={p._id} value={p._id}>{p.title}</option>))
                                    }
                                </select>
                                <span className="block px-4 text-sm text-red-400"></span>
                            </div>
                        )
                    }

                    { errorProjects && <div className="alert-danger">{ errorProjects }</div> }


                    <div className="relative mb-5">
                        <label className="block mb-3 text-sm text-base font-bold" htmlFor="">Tags</label>
                        <div className="flex items-center max-w-md">
                            <input onChange={e => setTag(e.target.value)} value={tag} name="title" className="max-w-lg px-10 py-4 field-control" type="text" placeholder="Write a tag"/>
                            <button disabled={loadingTask} onClick={() => handleTag()} type="button" className="h-16 px-10 py-3 text-white bg-green-500 focus:outline-none hover:bg-green-600">
                                <PlusCircleOutlineIcon  className="w-6" />
                            </button>
                        </div>
                        {
                            form.tags && form.tags.length > 0 && (

                                <div className="my-4">
                                    {
                                        form.tags.map(tag => (
                                            <span onClick={() => handleTag(tag)} key={tag} className="inline px-6 py-3 mr-2 text-sm bg-gray-200 rounded-full cursor-pointer hover:bg-red-200">{tag}</span>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>

                    { errorTask && <div className="alert-danger">{ errorTask }</div> }

                    <div className="p-4 text-left">
                        <button type="submit" className="px-10 py-3 text-white bg-blue-600 rounded-full focus:outline-none hover:bg-blue-700">
                            { loadingTask ? 'Saving task...' : 'Save task'}
                        </button>
                    </div>

                </form>

            </div>
        </div>

     );
}
 
export default TaskForm;