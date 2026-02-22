import React from 'react'
import { useState } from 'react'

function StudentControlledForm() {

    let [formData, setFormData]=useState({
        username:"",
        email:"",
        password:"",
        gender:"",
        course:"",
        skills:""
    })

    let [message, setMessage]=useState("");

    function handleSubmit(e)
    {
        e.preventDefault();
        if(formData.username==="" || formData.email==="" || formData.password==="" || formData.gender==="" || formData.course==="" || formData.skills==="")
        {
            alert("Please fill all the fields");
        }
        else{
        setMessage(`Check Details : 
                    username : ${formData.username},
                    email : ${formData.email},
                    password : ${formData.password},
                    gender : ${formData.gender},
                    course : ${formData.course},
                    skills : ${formData.skills}
                `);
        }
    }

    function handleChange(e)
    {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">

                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                    Student Registration Form
                </h2>

                <form className="space-y-5" onSubmit={handleSubmit}>

                    <div>
                        <input
                            type="text"
                            placeholder="Enter username"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
                            name="username"
                            // value={formData.username} OR value={""}
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>

                     <div>
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
                            name="email"
                            // value={formData.email} OR value={""}
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
                            name="password"
                            // value={formData.password} OR value={""}
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                     <div>
                        <label className="inline-block text-gray-600">Gender</label>
                        <br/>
                        <label className="inline-block text-gray-600">Male</label>
                        <input
                            type="radio"
                            className='ml-2'
                            name="gender"
                            value="male"
                            onChange={handleChange}
                        />
                        <label className="ml-5 inline-block text-gray-600">Female</label>
                        <input
                            type="radio"
                            className='ml-2'
                            name="gender"
                            value="female"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="inline-block text-gray-600">Course</label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
                        name="course" onChange={handleChange} value={formData.course}>
                            <option value="" disabled>Select Course</option>
                            <option value="BCA">BCA</option>
                            <option value="BBA">BBA</option>
                            <option value="BTech">BTech</option>
                        </select>

                    </div>

                    <div>
                        <label className="inline-block text-gray-600">Skills</label>
                        <br/>
                        <label className="inline-block text-gray-600">HTML</label>
                        <input
                            type="checkbox"
                            className='ml-2'
                            name="skills"
                            value="html"
                            onChange={handleChange}
                        />
                        <label className="ml-5 inline-block text-gray-600">CSS</label>
                        <input
                            type="checkbox"
                            className='ml-2'
                            name="skills"
                            value="css"
                            onChange={handleChange}
                        />
                        <label className="ml-5 inline-block text-gray-600">JavaScript</label>
                        <input
                            type="checkbox"
                            className='ml-2'
                            name="skills"
                            value="js"
                            onChange={handleChange}
                        />
                    </div>

                    

                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition duration-200"
                    >
                        Submit Details
                    </button>

                    <p className="text-center text-lg text-gray-600 mt-6">
                     {message}
                    </p>
                </form>
                </div>
                </div>
  )
}

export default StudentControlledForm