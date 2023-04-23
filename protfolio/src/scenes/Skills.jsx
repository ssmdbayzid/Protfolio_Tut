import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import LineGradient from '../components/LineGradient'
import skills from '../assets/skills-image.png'


const Skills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-48"    >
        <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
        className="md:w-1/3"
         initial="hidden"
         whileInView="visible"
         viewport={{once:true, amount:0.5}}
         transition={{duration:0.5}}
         variants={{
             hidden: {opacity: 0, x: - 50},
             visible:{opacity:1, x:0}
         }}
        >
        <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span  className="text-red">SKILLS</span>
        </p>
        <LineGradient width="w-1/3" />
         <p className="mt-10 md:mt-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, accusantium?
         </p>
         
        </motion.div>
         <div className="mt-16 md:mt-0">
            { isAboveMediumScreens ? ( <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
                
             <img
             src={skills}
             alt="skills"
            className="h z-10"
             />
            </div>):( <img
             src={skills}
             alt="skills"
            className="h z-10"
             />)
            }
         </div>
        </div>

        {/* SKILLS  */}
        <div className="md:flex md:justify-between gap-32 mt-16">
            {/* EXPERIENCE  */}

            <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden: {opacity: 0, y: 50},
                visible:{opacity: 1, y: 0}
            }}
            >
                <div className="relative h-32">
                    <div className="z-10">
                        <p className="font-playfair font-semibold text-5xl">01</p>
                        <p className="font-playfair font-semibold text-3xl">Experience</p>
                    </div>
                    <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-01]" />

                    <div className="mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor, quae a obcaecati sed fugiat nam quis voluptatem libero, commodi fuga ut incidunt sint earum?
                    </div>
                    
                </div>
            </motion.div>

            {/* INNOVATIVE  */}

            <motion.div
            className="md:w-1/3 md:mt-10 mt-32"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{ delay: 0.2, duration:0.5}}
            variants={{
                hidden: {opacity: 0, y: 50},
                visible:{opacity: 1, y: 0}
            }}
            >
                <div className="relative h-32">
                    <div className="z-10">
                        <p className="font-playfair font-semibold text-5xl">02</p>
                        <p className="font-playfair font-semibold text-3xl">Innovative</p>
                    </div>
                    <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-01]" />

                    <div className="mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor, quae a obcaecati sed fugiat nam quis voluptatem libero, commodi fuga ut incidunt sint earum?
                    </div>
                    
                </div>
            </motion.div>

            {/* IMAGINATIVE  */}

            <motion.div
            className="md:w-1/3 md:mt-10 mt-32"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{ delay: 0.4, duration:0.5}}
            variants={{
                hidden: {opacity: 0, y: 50},
                visible:{opacity: 1, y: 0}
            }}
            >
                <div className="relative h-32">
                    <div className="z-10">
                        <p className="font-playfair font-semibold text-5xl">03</p>
                        <p className="font-playfair font-semibold text-3xl">Imaginative</p>
                    </div>
                    <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-01]" />

                    <div className="mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor, quae a obcaecati sed fugiat nam quis voluptatem libero, commodi fuga ut incidunt sint earum?
                    </div>
                    
                </div>
            </motion.div>
        </div>
      </section>
  )
}

export default Skills
