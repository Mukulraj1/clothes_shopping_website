// import React from 'react'

import { assets } from "../assets/assets"
import NewsletterBox from "../components/NewsletterBox"
import Title from "../components/Title"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT '} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full md:max-w-[450px]" alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quidem. Facilis, nobis rem. Blanditiis autem facilis quos, eum natus aspernatur aliquam delectus officiis amet, fugit cum. Nostrum laborum asperiores veritatis blanditiis illum placeat unde alias delectus, obcaecati consequuntur eos hic animi similique voluptate reprehenderit dolore earum expedita qui cupiditate esse accusantium nulla quas. Dicta aliquam esse magni facilis error excepturi quaerat eligendi quasi quos id!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, saepe. Eius aliquid praesentium sed voluptatem harum nobis sint necessitatibus, tenetur iusto provident dignissimos magni odit ipsa doloribus veniam nesciunt quas fugit esse? Doloremque quidem recusandae sit, aut laudantium eaque?</p>
        <b className="text-gray-800">Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis suscipit tempore magni? Expedita voluptatem ipsa magni eius assumenda quaerat odio perspiciatis! Atque adipisci ex omnis assumenda dignissimos velit dolorum eius.</p>
        </div>

      </div>
      <div className="text-4xl py-4">
      <Title text1={'WHY '} text2={'CHOOES US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate fuga asperiores adipisci accusamus ipsum iusto aliquam ullam vel!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate fuga asperiores adipisci accusamus ipsum iusto aliquam ullam vel!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate fuga asperiores adipisci accusamus ipsum iusto aliquam ullam vel!</p>
        </div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
