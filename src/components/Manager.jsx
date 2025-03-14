import { ToastContainer, toast } from 'react-toastify';
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {

  const [icon, setIcon] = useState("hover-cross");
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);
  const [passType, setPassType] = useState("password");

  //adding password to in array from  user input (localstroage )  
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, [])


  // eye function (closed and open)
  const showPassword = () => {

    if (icon === "hover-cross") {
      setIcon("");
      setPassType("text");
    }
    else {
      setIcon("hover-cross");
      setPassType("password");
    }


  }

  // save the password from array to localstorage
  const savePassword = () => {
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
      setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]));
      // console.log([...passwordArray, form]);
      setform({ site: "", username: "", password: "" });
    } else {
      toast("invalid Input")
    }

  }


  const deletePassword = (id) => {
    let confirmmm = confirm("Do you want delete this???")
    if (confirmmm) {
      const updatePassword = (passwordArray.filter(item => item.id !== id));
      setpasswordArray(updatePassword);
      localStorage.setItem("passwords", JSON.stringify(updatePassword));
    }

  }

  const editPassword = (id) => {
    let confirmmm = confirm("Do you want edit this???")
    if (confirmmm) {
      setform(passwordArray.filter(item => item.id === id)[0]);
      setpasswordArray(passwordArray.filter(item => item.id !== id));
    }

  }

  // handleing the user input 
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className='p-24  '>
        <h1 className='text-center text-4xl font-bold '>PasswordOp</h1>

        <div className='flex flex-col p-4 gap-5 outline-none'>
          <input name='site'
            value={form.site}
            onChange={handleChange}
            placeholder='Enter website URL'
            className='rounded-full h-12 bg-gray-600 p-5 outline-none '
            type="text"
          />

          <div className='md:flex gap-5 '>
            <input
              name='username'
              value={form.username}
              onChange={handleChange}
              placeholder='Enter Username'
              className='rounded-full h-12 bg-gray-600 p-3 mt-3 outline-none w-5/6' type="text"
            />

            <div className="relative w-auto ">
              <input
                name='password'
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full h-12 bg-gray-600 p-3 pr-10 mt-3 outline-none "
                type={passType}
              />
              <span onClick={showPassword}
                className=" absolute md:right-3 md:top-5 left-48 top-5
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
          </lord-icon> Save password</button>
        </div>

        <div className='passwords'>
          <h1 className='font-bold text-3xl p-4 '>Save Password</h1>
          {/* cheack first array is empty or not then show array.value in table */}
          {passwordArray.length == 0 && <div>No Password</div>}
          {passwordArray.length != 0 &&
            <table className="table-auto w-full rounded-3xl overflow-hidden">
              <thead className='bg-green-800 text-white'>
                <tr>
                  <th className='py-2'>Web URL</th>
                  <th className='py-2'>Username</th>
                  <th className='py-2'>Password</th>
                  <th className='py-2'>Action</th>
                </tr>
              </thead>
              <tbody className='bg-green-100 text-black'>
                {
                  passwordArray.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td
                          onClick={() => {
                            toast('text copied!', {
                              position: "top-right",
                              autoClose: 3000,
                              hideProgressBar: false,
                              closeOnClick: false,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "light",
                            }); navigator.clipboard.writeText(item.site)
                          }} className=' text-center align-middle w-32  py-2'>
                          <span className="flex items-center justify-center gap-2 cursor-pointer">
                            {item.site}
                            <lord-icon
                              src="https://cdn.lordicon.com/jectmwqf.json"
                              trigger="loop"
                              delay="2000"
                              stroke="light"
                            ></lord-icon>
                          </span>
                        </td >

                        <td
                          onClick={() => {
                            toast('text copied!', {
                              position: "top-right",
                              autoClose: 3000,
                              hideProgressBar: false,
                              closeOnClick: false,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "light",
                            }); navigator.clipboard.writeText(item.username)
                          }} className=' text-center w-32   py-2'>
                          <span className="flex items-center justify-center gap-2 cursor-pointer">
                            {item.username}
                            <lord-icon
                              src="https://cdn.lordicon.com/jectmwqf.json"
                              trigger="loop"
                              delay="1500"
                              stroke="light"
                            ></lord-icon>
                          </span>
                        </td >
                        <td
                          onClick={() => {
                            toast('text copied!', {
                              position: "top-right",
                              autoClose: 3000,
                              hideProgressBar: false,
                              closeOnClick: false,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "light",
                            }); navigator.clipboard.writeText(item.password)
                          }} className=' text-center w-32   py-2'>
                          <span className="flex items-center justify-center gap-2 cursor-pointer">
                            {item.password}
                            <lord-icon
                              src="https://cdn.lordicon.com/jectmwqf.json"
                              trigger="loop"
                              delay="1500"
                              stroke="light"
                            ></lord-icon>
                          </span>
                        </td >
                        <td
                          className=' text-center w-32   py-2'>
                          <span
                            onClick={() => { editPassword(item.id) }}
                            className='cursor-pointer mr-4'>
                            <lord-icon
                              src="https://cdn.lordicon.com/exymduqj.json"
                              trigger="loop"
                              delay="1500"
                              stroke="light"
                              state="in-dynamic"
                            >
                            </lord-icon>
                          </span>
                          <span

                            onClick={() => { deletePassword(item.id) }}
                            className="cursor-pointer">


                            <lord-icon
                              src="https://cdn.lordicon.com/hwjcdycb.json"
                              trigger="loop"
                              stroke="light"
                              state="morph-trash-out"
                            >
                            </lord-icon>
                          </span>
                        </td >
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