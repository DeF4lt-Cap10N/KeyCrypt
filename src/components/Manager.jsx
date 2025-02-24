import React, { useState } from 'react'

const Manager = () => {

   const [icon, setIcon] = useState("");

   const [form, setform] = useState({site:"", username:"", password : ""})

   function seeMessage() {
      if (icon === "") {
         setIcon("hover-cross");
      }
      else {
         setIcon("");
      }
   }

   function savePassword(){

   }

  const handleChange = (e) => {

  }

   return (
      <>
         <div className='p-24  '>
            <h1 className='text-center text-4xl font-bold '>PasswordOp</h1>
            <div className='flex flex-col p-4 gap-5 outline-none'>
               <input value={form.site} onClick={handleChange} placeholder='Enter website URL' className='rounded-full h-12 bg-gray-600 p-5 outline-none ' type="text" />
               <div className='md:flex gap-5 '>
                  <input value={form.username} onClick={handleChange} placeholder='Enter Username' className='rounded-full h-12 bg-gray-600 p-3 mt-3 outline-none w-5/6' type="text" />
                  <div className="relative w-1/6 ">
                     <input 
                        value={form.password} onClick={handleChange} 
                        placeholder="Enter Password"
                        className="rounded-full h-12 bg-gray-600 p-3 pr-10 mt-3 outline-none w-full"
                        type="text"
                     />
                     <span onClick={seeMessage} className="absolute right-3 top-5
                     cursor-pointer ">
                        <lord-icon
                           src="https://cdn.lordicon.com/dicvhxpz.json"
                           trigger="click"
                           state={icon}
                        >
                        </lord-icon>
                     </span>
                  </div>


               </div>
            </div>

            <div className='flex  justify-center'>
               <button onClick={savePassword} className='flex gap-2 items-center mt-5 bg-green-500  p-2 rounded-2xl  '><lord-icon
                  src="https://cdn.lordicon.com/sbnjyzil.json"
                  trigger="loop"
                  delay="1500"
                  stroke="bold"
                  state="hover-swirl"
                  colors="primary:#9cf4a7,secondary:#109121"
               >
               </lord-icon> Add password</button>
            </div>


         </div>

      </>
   )
}

export default Manager