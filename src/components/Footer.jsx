// import React from 'react'
import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
            <img src={assets.logo} className="mb-5 w-32" alt="" />
            <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptates sapiente dolore est possimus cumque alias similique quisquam aperiam ex? Esse vero at aut, veniam saepe dolorem sequi qui voluptates?</p>
        </div>
        <div>
            <p className="text-xl font-medium mb-5 uppercase">company</p>
            <ul className="flex flex-col gap-1 text-gray-600 cursor-pointer">
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className="text-xl font-medium mb-5 uppercase">get in touch</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+91 8340670539</li>
                <li>mukulraj312@gmail.com</li>
            </ul>
        </div>

      </div>
      <div>
        <hr />
        <p className="text-center py-5 text-sm">Copyright 2024@ forever.com - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
