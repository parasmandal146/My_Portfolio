import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarker, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='contact'
            className='py-20 bg-dark-100'
        >
            <div className="container mx-auto px-6">
                <h2 className='text-3xl font-bold text-center mb-4'>
                    Get In <span className='text-purple'>Touch</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to discuss potential opportunities? Feel free to reach out!</p>

                <div className="grid grid-cols-1 lg:grid-cols-2  gap-12 md:gap-30 max-w-5xl mx-auto">
                    {/* Contact form */}
                    <div>
                        <form className='space-y-6'>
                            <div className=''>
                                <label className='block text-gray-300 mb-2' htmlFor="name">Your Name</label>
                                <input 
                                className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                                type="text" name="" id="" />
                            </div>
                            <div className=''>
                                <label className='block text-gray-300 mb-2' htmlFor="email">Email Address</label>
                                <input 
                                className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                                type="email" name="" id="" />
                            </div>
                            <div className=''>
                                <label className='block text-gray-300 mb-2' htmlFor="message">Your message</label>
                                <textarea 
                                className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                                type="text" name="" id="" />
                            </div>
                            <button type='submit' className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>
                                Send
                            </button>
                        </form>
                    </div>
                    {/* Contact info */}
                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className='text-purple text-2xl mr-4'>
                                <FaMapMarkerAlt/>
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                <p className='text-gray-400'>Noida, Uttar Pradesh</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className='text-purple text-2xl mr-4'>
                                <FaEnvelope/>
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                                <p className='text-gray-400'>prashant873yadav@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className='text-purple text-2xl mr-4'>
                                <FaPhone/>
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                                <p className='text-gray-400'>+91 9125312553</p>
                            </div>
                        </div>

                        <div className='pt-4'>
                            <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                            <div className='flex space-x-4'>
                                <a href="https://github.com/Prashantyadav91" target='_main' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'>
                                    <FaGithub/>
                                </a>
                                <a href="https://www.linkedin.com/in/prashant-yadav-a524b1243/" target='_main' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue  hover:bg-blue  hover:text-white transition duration-300'>
                                    <FaLinkedin/>
                                </a>
                                <a href="https://www.instagram.com/iamprashant.13/" target='_main' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink hover:text-white transition duration-300'>
                                    <FaInstagram/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </motion.div>
    )
}

export default Contact
