import { useState } from "react"


function App() {
  const [color, setColor] = useState("lavender")

  return (
    <div className="h-screen w-full p-5" style={{backgroundColor:color}}>
       <div className="h-15 w-160 justify-center flex bg-white ml-auto mr-auto
        rounded-full ">
          <button className="h-10 w-15 rounded-lg m-2.5 " style={{backgroundColor:"red"}}
          onClick={()=>setColor("red")}>
            Red
          </button>
          <button className="h-10 w-15 rounded-lg m-2.5 " style={{backgroundColor:"green"}}
          onClick={()=>setColor("green")}>
            Green
          </button>
          <button className="h-10 w-15 rounded-lg m-2.5 " style={{backgroundColor:"blue"}}
          onClick={()=>setColor("blue")}>
            Blue
          </button>
          <button className="h-10 w-15 rounded-lg m-2.5 " style={{backgroundColor:"pink"}}
          onClick={()=>setColor("pink")}>
            Pink
          </button>
          <button className="h-10 w-15 rounded-lg m-2.5 " style={{backgroundColor:"black", color:"white"}}
          onClick={()=>setColor("black")}>
            Black
          </button>
          <button className="h-10 w-15 border-2 border-black rounded-lg m-2.5" style={{backgroundColor:"white"}}
          onClick={()=>setColor("white")}>
            White
          </button>
          <button className="h-10 w-15 rounded-lg m-2.5 " style={{backgroundColor:"orange"}}
          onClick={()=>setColor("orange")}>
            Orange
          </button>

       </div>
    </div>
  )
}

export default App