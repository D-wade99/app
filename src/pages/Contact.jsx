import React from 'react'
import zuri from "../assets/Zuri.svg"
import ingress from "../assets/ingressive.svg"

const Contact = () => {
  return (
    <div className="h-full flex justify-center flex-col">
      <div className="px-0">
      <div className="w-2/3 mx-auto py-8 ">
        <h1 className="text-4xl font-semibold flex items-center">
          <span>Contact Me</span>
        </h1>
        <p className="font-normal text-sm mb-12 mt-5 w-full">Hi there, contact me to ask me about anything you have in mind</p>
        <form >
          <div className="flex flex-row gap-6 mb-6  max-sm:flex-col ">
            <div className=" flex flex-col w-full shrink grid__mobile">
              <label htmlFor="first_name">First name</label>
              <input id="first_name" className="border-solid border rounded-lg p-2 border-gray-300" type="text" name="first name" placeholder="Enter your first name" />
            </div>
            <div className=" flex flex-col w-full shrink ">
              <label htmlFor="last_name">Last name</label>
              <input id="last_name" className="border-solid border rounded-lg p-2 border-gray-300" type="text" name="last name" placeholder="Enter your last name" />
            </div>
          </div>
          <div className="flex flex-col shrink w-full mb-6">
            <label htmlFor="email" >Email</label>
            <input id="email" className="border border-solid rounded-lg border-gray-300 p-2" type="text" name="email" placeholder="youname@email.com" />
          </div>
          <div className="flex flex-col shrink w-full mb-6">
            <label htmlFor="message" >Message</label>
            <textarea id="message" className="border border-solid rounded-lg border-gray-300 p-2 resize-none h-[132px] " placeholder="Send me a message and i'll reply you as soon as possible" />
          </div>
            
          <input type="checkbox" id="check_box"/>
          <label htmlFor="check_box">You agree to provide your date to Sijuade Daniel who may contact you.</label>
          
          <button id="btn__submit" className="w-full mt-[32px] bg-blue-700 text-white hover:bg-blue-800 border boder-solid rounded-lg">Send message</button>
        </form>
      </div>
        <footer className="flex md:flex-row flex-col justify-between py-10 mt-[100px] lg:mx-[113px] mx-5 border-t-2 " > 
                <img src={zuri} alt="/" className='md:w-[170px] w-[120px] ' />
              

              
                <p className="text-gray-500 font-inter py-3 " >HNG Internship 9 Frontend Task</p>
              

              
                <img src={ingress} alt="/" className='md:w-[100px] md:h-[40px] w-[120px] ' />
        </footer>

      </div>
    </div>
  )
}

export default Contact