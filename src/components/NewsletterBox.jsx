// import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event)=>{
        event.preventDefault();
    }

  return (
    <div className="text-center mt-16">
      <p className="text-2xl font-medium text-gray-800 selection:bg-red-800 selection:text-white">Subscribe now & get 20% off</p>
      <p className="text-gray-400 mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, repellat officiis. Nesciunt cum ipsam itaque necessitatibus velit magnam ullam fugiat, esse beatae incidunt cumque nihil id? Porro eius doloremque minus?</p>

      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 my-6 mx-auto border pl-3">
        <input type="email" className="w-full sm:flex-1 outline-none" placeholder="Enter your email" required />
        <button type="submit" className="bg-black text-white text-xs px-10 py-4 rounded-lg">SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
