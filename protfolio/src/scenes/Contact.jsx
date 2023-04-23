import React from 'react'
import LineGradient from '../components/LineGradient'
import { motion } from 'framer-motion'
import {useForm} from 'react-hook-form'
import contactImg from '../assets/contact-image.jpeg'


const Contact = () => {
    const {register, trigger, formState:{errors}} = useForm()
const onSubmit = async (e) => {
    const isValid = await trigger()
    if(!isValid){
        e.preventDefault();
    }
}

  return (
    <section id="contact" className="py-48">
    <motion.div
        
         initial="hidden"
         whileInView="visible"
         viewport={{once:true, amount:0.5}}
         transition={{duration:0.5}}
         variants={{
             hidden: {opacity: 0, x: - 50},
             visible:{opacity:1, x:0}
         }}
        >
        <div>
        <p className="font-playfair font-semibold text-4xl mb-5">
            <span  className="text-yellow">CONTACT ME</span> TO GET STARTED
        </p>
        <div className="flex md:justify-end my-5">
        <LineGradient width="w-2/4 mx-auto" />
        </div>
        </div>       

        </motion.div>
        
        < div
        className="md:flex md:justify-between gap-16 mt-5">

        {/* IMAGEW & FORM  */}
        <motion.div
         className="basis-1/2 flex justify-center"
         initial="hidden"
         whileInView="visible"
         viewport={{once:true, amount:0.5}}
         transition={{duration:0.5}}
         variants={{
             hidden: {opacity: 0, y: - 50},
             visible:{opacity:1, y:0}
         }}
        >
        <img src={contactImg} alt="contactImage" />
        </motion.div>

        <motion.div
        className="basis-1/2 mt-10 md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        transition={{ delay: 0.2, duration: 0.5}}
        variants={{
            hidden: {opacity: 0, y: - 50},
            visible:{opacity:1, y:0}
        }}
        >
        <form
        target="_black"
        onSubmit={onSubmit}   
        action=''     
        method="POST"
        >
            <input
            className="w-full bg-blue font-semibold placeholder-opaque-black p-3" type="text" placeholder="Name"
            {...register("name", {
                required: true,
                maxLength: 100,
            })}
            />
            { errors.name && (
                <p className="text-red mt-1">
                    {errors.name.type === "required" && "This field is required. "}
                    {errors.name.type === "maxLength" && "Max length is 100 char."}

                </p>
            )}

         <input
            className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-3" type="text" placeholder="Email"
            {...register("email", {
                required: true,
               pattern: /^[A-Z0-9]._%+-]+@[A-Z0-9.-]+\.[A-Z]{2},$/i,
            })}/>
                
           {errors.email && (<p className="text-red mt-1">
            
            {errors.email.type === "required" && "This is required."}
            {errors.email.type === "pattern" && "Invalid email address."}
            </p>)}

         <input
            className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-3" type="text" placeholder="Message" row="4" cols="50"
            {...register("message", {
                required: true,
               maxLength: 2000,
            })}/>
                
           {errors.message && (<p className="text-red mt-1">
            
            {errors.message.type === "required" && "This is required."}
            {errors.message.type === "maxLength" && "Max length is 100 char."}
            </p>)}

        </form>

        </motion.div>
        </div> 


    </section>
  )
}

export default Contact