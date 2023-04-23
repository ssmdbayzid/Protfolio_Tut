import { motion } from 'framer-motion'
import React from 'react'
import LineGradient from '../components/LineGradient'


const Testimonial = () => {
    const testimonialStyle = `mx-auto relative max-w-[400x] h-[350px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`
  return (<section id="testimonials" className="pt-32 pb-16">

    {/* HEADING  */}
    <motion.dev
    className="md:w-1/3 text-center md:text-left"
    initial="hidden"
    whileInView="visible"
    viewport={{once:true, amount:0.5}}
    transition={{duration:0.5}}
    variants={{
        hidden: {opacity: 0, x: - 50},
        visible:{opacity: 1, x: 0}
    }}
    >
        <p className="font-playFair font-semibold text-4xl mb-5 text-red">
            TESTIMONIALS
        </p>
        <LineGradient width=" ml-20 w-40 text-start" />

        <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod incidunt enim saepe dicta consequuntur.
        </p>
    </motion.dev>

    {/* TESTIMONIAL  */}
    <div className="md:flex md:justify-between gap-8">
    <motion.dev
         className={`bg-blue ${testimonialStyle} before:content-person1`}
         initial="hidden"
         whileInView="visible"
         viewport={{once:true, amount:0.5}}
         transition={{duration:0.5}}
         variants={{
             hidden: {opacity: 0,scale: 0.8},
             visible:{opacity: 1, scale: 1}
         }}
    >   
        <p className="font-playFair text-6xl">"</p>
        <p className="text-center text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ut!
        </p>        
    </motion.dev>
   
    <motion.dev
         className={`bg-red ${testimonialStyle} before:content-person2`}
         initial="hidden"
         whileInView="visible"
         viewport={{once:true, amount:0.5}}
         transition={{delay: 0.2, duration: 0.5}}
         variants={{
            hidden: {opacity: 0,scale: 0.8},
            visible:{opacity: 1, scale: 1}
         }}
    >   
        <p className="font-playFair text-6xl">"</p>
        <p className="text-center text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ut!
        </p>        
    </motion.dev>
    
    <motion.dev
         className={`bg-yellow ${testimonialStyle} before:content-person3`}
         initial="hidden"
         whileInView="visible"
         viewport={{once:true, amount:0.5}}
         transition={{delay: 0.4, duration:0.5}}
         variants={{
            hidden: {opacity: 0,scale: 0.8},
            visible:{opacity: 1, scale: 1}
         }}
    >   
        <p className="font-playFair text-8xl">"</p>
        <p className="text-center text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ut!
        </p>        
    </motion.dev>
    </div>
        
    </section>
  )
}

export default Testimonial