"use client"
import React, { useState } from 'react'
import Image from "next/image"
import { useRouter } from "next/navigation";
import { newTodo } from '@/app/lib/drizzle';

const AddTodo = () => {
    const [task, setTask] = useState<newTodo | null>(null);
    const { refresh } = useRouter();


    const handleSubmit = async () => {
        try {
            if (task) {
                const res = await fetch("/api/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        task: task.task
                    }),

                })
                refresh();
            }
        } catch (error) {
            console.log("error")
        }

    }

    return (
        <div className='my-4'>
            <form className='w-full flex gap-x-3'>
                <input
                    onChange={(e) => setTask({ task: e.target.value })}
                    className='rounded-full w-full py-3.5 px-5 border text-black focus:outline-secondary' type="text" />
                <button type='button' onClick={handleSubmit} className='p-4 shrink-0 rounded-full bg-gradient-to-b from-primary to-secondary' >
                    <Image src={"/vector.png"} width={20} height={20} alt='vector' />
                </button>
            </form>
        </div>
    )
}

export default AddTodo