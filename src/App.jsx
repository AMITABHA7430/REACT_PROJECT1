import { useState } from "react"


function App() {
  const [color,setcolor] = useState("olive")

  return (
    
     
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
<div className="flexed flex flex-wrap justify-centre bottom-12 inset-x-0 px-2">
   <div className="flex felx-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 ">
    <button onClick={()=>setcolor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
    style={{backgroundColor:"red"}}
    >Red</button>
    <button onClick={()=>setcolor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
    style={{backgroundColor:"green"}}
    >Grenn</button>
    <button onClick={()=>setcolor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
    style={{backgroundColor:"blue"}}
    >Blue</button>
    <button onClick={()=>setcolor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
    style={{backgroundColor:"yellow"}}
    >Yellow</button>
    <button onClick={()=>setcolor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
    style={{backgroundColor:"Pink"}}
    >Pink</button>
   </div>
   </div>
    </div>
    
  )
}

export default App
