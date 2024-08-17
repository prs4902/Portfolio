import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'
const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async(data) => {
        const userInfo={
            name:data.name,
            email:data.email,
            message:data.message
        }
        try{
           await axios.post("https://getform.io/f/aejyzxeb", userInfo);
           toast.success("Your message has been sent");
        }
        catch(error){
           console.log(error);
           toast.error("Something went wrong");
           
        }
    }
    return (
        <>
            <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 my-16 md:px-20'>
                <h1 className='text-3xl font-bold mb-4'>Contact Me!</h1>
                <span>Please fill out the form below to contact me.</span>
                <div className='flex flex-col items-center justify-center mt-5 '>
                    <form
                    onSubmit={handleSubmit(onSubmit)}
                        // action="https://getform.io/f/aejyzxeb"
                        // method="POST"
                        className='bg-slate-200 w-96 rounded-xl px-8 py-6'>
                        <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="fullname" className='block text-gray-700'>Full Name</label>
                            <input {...register("name", { required: true })}
                                type="text"
                                name='name'
                                id="name"
                                placeholder='Enter Your Full Name' className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                            {errors.name && <span className='text-red-500'>Full Name is required</span>}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="email" className='block text-gray-700'>Email Address</label>
                            <input
                                {...register("email", { required: true })}
                                type="text"
                                name='email'
                                id="email"
                                placeholder='Enter Your Email'
                                className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                            {errors.email && <span className='text-red-500'>Email is required</span>}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="fullname" className='block text-gray-700'>Message</label>
                            <textarea
                                {...register("message", { required: true })}
                                type="text"
                                name='message'
                                id="message"
                                placeholder='Enter Your Message Here'
                                className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                            {errors.message && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <button type='submit' className=' text-sm rounded-xl hover:bg-slate-800 duration-200 bg-black text-white py-2 px-3 '>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact