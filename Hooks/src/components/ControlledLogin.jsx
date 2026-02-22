import React, { useState } from 'react'

function ControlledLogin() {

    let [formData, setFormData]=useState({
        username:'',
        password:''
    })

    let [message, setMessage]=useState("");
    
    localStorage.setItem("username","admin");
    localStorage.setItem("password","admin123");

    function handleChange(e)
    {
       setFormData({
        ...formData,
        [e.target.name]:e.target.value
       })
    }
    function handleSubmit(e)
    {
       e.preventDefault();
       if(formData.username===localStorage.getItem("username") 
    &&  formData.password===localStorage.getItem("password"))
        {
           setMessage("Login Successfull!!!");
        }
        else{
           setMessage("Invalid Username or Password...");
        }

    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">

                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                    Login
                </h2>

                <form className="space-y-5" onSubmit={handleSubmit}>

                    <div>
                        <input
                            type="text"
                            placeholder="Enter username"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
                            value={formData.username}
                            name="username"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
                            value={formData.password}
                            name="password"
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition duration-200"
                    >
                        Login
                    </button>

                    <p className="text-center text-lg text-gray-600 mt-6">
                      {message}
                    </p>
                </form>
                </div>
                </div>
  )
}

export default ControlledLogin