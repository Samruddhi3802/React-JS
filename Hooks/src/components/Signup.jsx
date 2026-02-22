import React from 'react'
import { useRef, useState, useEffect } from 'react'


function Signup() {
let nameRef=useRef(null);
let emailRef=useRef(null);
let passwordRef=useRef(null);

let [submittedData, setSubmittedData] = useState({});
// let [display, setDisplay] = useState("");
 function handleSubmit(e)
 {
   e.preventDefault();
   const data={
    name:nameRef.current.value,
    email:emailRef.current.value,
    password:passwordRef.current.value
   }
   setSubmittedData(data);
 }
//  useEffect(()=>{
//   setDisplay(`Entered Details :
//             Name : ${submittedData.name}
//             Email : ${submittedData.email}
//             Password : ${submittedData.password}`)
//  }, [submittedData])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Create Account
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
              ref={nameRef}
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
              ref={emailRef}
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
            Signup
          </button>
        </form>

        {/* <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-gray-800 font-medium hover:underline"
          >
            Login
          </a>
        </p> */}

        <h3 className="text-center text-gray-600 mt-6">
            {submittedData.name && submittedData.email && submittedData.password ? `Entered Details :
            Name : ${submittedData.name}
            Email : ${submittedData.email}
            Password : ${submittedData.password}` : ""}
        </h3>

      </div>
    </div>
  )
}

export default Signup
