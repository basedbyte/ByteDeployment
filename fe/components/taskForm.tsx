"use client"
import React from 'react'
import { useTaskForm } from '../hooks/useTaskForm'

const TaskForm = () => {
  const {
    formData,
    fileInputRef,
    budgetType,
    showBudgetOptions,
    files,
    categories,
    toggleBudgetOptions,
    selectBudget,
    handleChange,
    handleFileChange,
    handleDragOver,
    handleDrop,
    openFileDialog,
    removeFile,
    handleSubmit
  } = useTaskForm()

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="bg-white rounded-3xl shadow-md p-8 max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Post a new Task</h1>
        <p className="text-gray-600">Describe your task project and find the right talent fast.</p>
      </div>

      <div className="border-b border-black mb-6"></div>

      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="w-6 h-6 bg-green-500 flex items-center justify-center rounded mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="font-medium">Task Info</span>
        </div>

        <div className="mb-4">
          <div className="flex">
            <div className="w-1/3 p-3 bg-white border border-r-0 border-[#8C8F8E] rounded-l">
              <label className="block text-gray-700" htmlFor="title">Task title</label>
            </div>
            <div className="w-2/3">
              <input 
                id="title"
                name="title"
                type="text" 
                placeholder="e.g. Design Landing Page"
                className="w-full p-3 border border-[#8C8F8E] rounded-r focus:outline-none focus:ring-1 focus:ring-green-500"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
        <div className="flex">
            <div className="w-1/3 p-3 bg-white border border-r-0 border-[#8C8F8E] rounded-l">
            <label className="block text-gray-700" htmlFor="category">Category</label>
            </div>
            <div className="w-2/3 relative">
                <select
                    id="category"
                    name="category"
                    className="w-full p-3 border border-[#8C8F8E] rounded-r focus:outline-none focus:ring-1 focus:ring-green-500"
                    value={formData.category}
                    onChange={handleChange}
                    required
                >
                    {categories.map((cat: string) => (
                        <option
                            key={cat}
                            value={cat}
                            className="hover:bg-green-500 hover:text-white"
                        >
                            {cat}
                        </option>
                    ))}
                </select>
            </div>
        </div>
        </div>

        <div className="mb-4">
          <div className="flex">
            <div className="w-1/3 p-3 bg-white border border-r-0 border-[#8C8F8E] rounded-l">
              <label className="block text-gray-700" htmlFor="tags">Tags</label>
            </div>
            <div className="w-2/3">
              <input 
                id="tags"
                name="tags"
                type="text" 
                placeholder="e.g. Figma, Branding, Web 3"
                className="w-full p-3 border border-[#8C8F8E] rounded-r focus:outline-none focus:ring-1 focus:ring-green-500"
                value={formData.tags}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="w-6 h-6 bg-green-500 flex items-center justify-center rounded mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <span className="font-medium">Details</span>
        </div>

        <div className="mb-4">
          <textarea 
            id="description"
            name="description"
            placeholder="Describe your task....."
            rows={5}
            className="w-full p-3 border border-[#8C8F8E] rounded focus:outline-none focus:ring-1 focus:ring-green-500"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <div className="relative">
              <div className="flex">
                <div className="w-1/2 p-3 bg-white border border-r-0 border-[#8C8F8E] rounded-l">
                  <label className="block text-gray-700" htmlFor="budgetType">Budget Type</label>
                </div>
                <div className="w-1/2 relative">
                  <button 
                    type="button"
                    id="budgetType"
                    onClick={toggleBudgetOptions}
                    className="w-full h-full flex items-center justify-between px-3 border border-[#8C8F8E] rounded-r focus:outline-none"
                  >
                    <span>{budgetType}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {showBudgetOptions && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-[#8C8F8E] rounded-b shadow-md z-10">
                      <button 
                        type="button"
                        onClick={() => selectBudget('Fixed')}
                        className="w-full text-left px-3 py-2 hover:bg-gray-100"
                      >
                        Fixed
                      </button>
                      <button 
                        type="button"
                        onClick={() => selectBudget('Milestone')}
                        className="w-full text-left px-3 py-2 hover:bg-gray-100 bg-green-50"
                      >
                        Milestone
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-1/2">
            <div className="flex">
              <div className="w-full flex border border-[#8C8F8E] rounded">
                <div className="w-10 flex items-center justify-center border-r border-[#8C8F8E]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <input 
                  id="date"
                  name="date"
                  type="text"  
                  placeholder="Date & time"
                  className="w-full p-3 focus:outline-none focus:ring-1 focus:ring-green-500"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="w-6 h-6 flex items-center justify-center mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <span className="font-medium">Files or References</span>
        </div>

        <input 
          type="file" 
          multiple
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        <div 
          className="border border-[#8C8F8E] border-dashed rounded p-6 flex items-center justify-center mb-2 cursor-pointer"
          onClick={openFileDialog}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
            <p className="text-gray-500 text-sm">Drag or Click to upload</p>
          </div>
        </div>

        {files.length > 0 && (
          <div className="mt-2 mb-2">
            <p className="text-sm text-gray-600 mb-2">Uploaded files:</p>
            <ul className="space-y-1">
              {files.map((file, index) => (
                <li key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded">
                  <span className="text-sm truncate">{file.name}</span>
                  <button 
                    type="button"
                    onClick={() => removeFile(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex gap-4">
        <button 
          type="button" 
          onClick={(e) => handleSubmit(e, true)}
          className="w-1/2 py-3 border border-green-500 text-green-500 rounded focus:outline-none hover:bg-green-50 cursor-not-allowed"
        >
          Preview Post
        </button>
        <button 
          type="submit" 
          className="w-1/2 py-3 bg-green-500 text-white rounded focus:outline-none hover:bg-green-600"
        >
          Submit for Review
        </button>
      </div>
    </form>
  )
}

export default TaskForm