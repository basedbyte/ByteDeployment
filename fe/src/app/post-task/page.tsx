"use client"
import React from 'react'
import TaskForm from '@components/taskForm'
import Navbar from '@components/navbar'

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50"> 
        <Navbar />
        <div className='m-10'>
            <TaskForm />
        </div>
    </div>
  )
}

export default Page;