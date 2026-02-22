import React, { useRef, useState } from 'react'

/* This is the example of UnControlled Form, in which there is not connection or relation between
the input fields and for each inputField we will need seperate useState or useRef hook, which is 
not an optimized way, so instead use Controlled Forms*/

function Login() {
    localStorage.setItem("username","admin");
    localStorage.setItem("password","admin123");
    
    let nameRef=useRef(null);
    let passwordRef=useRef(null);

    let [message, setMessage] = useState("");
   function handleSubmit(e)
   {
    e.preventDefault();
    let username=nameRef.current.value;
    let password=passwordRef.current.value;
    if(username===localStorage.getItem("username") &&
        password===localStorage.getItem("password"))
        {
            setMessage("Login Successful");
        }
    else
    {
        setMessage("Invalid Username or Password");
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
                            ref={nameRef}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
                            ref={passwordRef}
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

export default Login