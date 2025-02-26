
import React, { useEffect, useState } from 'react'

const Manager = () => {

   const [icon, setIcon] = useState("");
   const [form, setform] = useState({ site: "", username: "", password: "" });

   const [passwordArray, setpasswordArray] = useState([]);

  //adding password to in array from  user input (localstroage )  
   useEffect(() => {
      let passwords = localStorage.getItem("passwords");
      if (passwords) {
         setpasswordArray(JSON.parse(passwords));
      }
   }, [])


   // eye function (closed and open)
   function showPassword() {
      if (icon === "") {
         setIcon("hover-cross");
      }
      else {
         setIcon("");
      }
   }

  // save the password from array to localstorage
   const savePassword = () => {
      setpasswordArray([...passwordArray, form]);
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
      console.log([...passwordArray, form]);
   }
   
   // handleing the user input 
   const handleChange = (e) => {
      setform({ ...form, [e.target.name]: e.target.value })
   }

   return (
      <>
         <div className='p-24  '>
            <h1 className='text-center text-4xl font-bold '>PasswordOp</h1>
            
            <div className='flex flex-col p-4 gap-5 outline-none'>
               <input name='site' value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full h-12 bg-gray-600 p-5 outline-none ' type="text" />

               <div className='md:flex gap-5 '>
                  <input name='username' value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full h-12 bg-gray-600 p-3 mt-3 outline-none w-5/6' type="text" />

                  <div className="relative w-auto ">
                     <input name='password'
                        value={form.password} onChange={handleChange}
                        placeholder="Enter Password"
                        className="rounded-full h-12 bg-gray-600 p-3 pr-10 mt-3 outline-none "
                        type="text"

                     />
                     <span onClick={showPassword} className=" absolute md:right-3 md:top-5 left-48 top-5
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

            <div className='passwords'>
               <h1 className='font-bold text-3xl p-4 '>Save Password</h1>
               {passwordArray.length == 0 && <div>No Password</div>}
               {passwordArray.length != 0 &&
                  <table className="table-auto w-full rounded-3xl overflow-hidden">
                     <thead className='bg-green-800 text-white'>
                        <tr>
                           <th className='py-2'>Web URL</th>
                           <th className='py-2'>Username</th>
                           <th className='py-2'>Password</th>
                        </tr>
                     </thead>
                     <tbody className='bg-green-100 text-black'>
                        {
                           passwordArray.map((item, index) => {
                              return (
                                 <tr key={index}>
                                    <td className='text-center w-32 py-2'>{item.site}</td >
                                    <td className='text-center w-32 py-2'>{item.username}</td >
                                    <td className='text-center w-32 py-2'>{item.password}</td >
                                 </tr>
                              )
                           })
                        }


                     </tbody>
                  </table>
               }
            </div>


         </div>

      </>
   )
}

export default Manager