"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser";
import { Toaster, toast } from 'sonner';
import { motion } from 'framer-motion';
import { Montserrat } from 'next/font/google';

    
const montserrat = Montserrat({
    weight: '400',
    subsets:['latin']
})

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        }
    }
}

const item = {
    hidden: { scale: 0 },
    show: {scale: 1}
}

export default function Form() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const sendEmail = (params) => {
        const toastId = toast.loading("Sending your message , Please wait...")
        emailjs
            .send(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                params,
                process.env.NEXT_PUBLIC_PUBLIC_KEY
            )
            .then(
                () => {
                    toast.success("Get you Message 🎉", { id: toastId })
                    reset()
                }, (error) => {
                    toast.error("Unexpected error while sending message! Try again  later😓", { id: toastId });
                    console.log(error)
                }
        )
    }

    const onSubmit = (data) => {
        const templateParams = {
            to_name: "Rid01Code",
            from_name: data.Name,
            reply_to: data.Email,
            message: data.Message
        }
        sendEmail(templateParams)
    };
    console.log(errors);
    
    return (
        <>
            <Toaster richColors={true} />
            <motion.form
                variants={container}
                initial="hidden"
                animate="show"
                onSubmit={handleSubmit(onSubmit)}
                className='max-w-md w-full flex flex-col items-center justify-center space-y-4'>
                <motion.input
                    variants={item}
                    type="text"
                    placeholder="Name"
                    {...register("Name", {
                        required: "This field is required",
                        minLength: {
                            value: 3,
                            message: "Name Should be atleast three characters  long"
                        }
                    })}
                    className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
                />
                {
                    errors.Name && <span className='inline-block self-start text-accent'>{errors.Name.message}</span>
                }
                
                <motion.input
                    variants={item}
                    type="email"
                    placeholder="Email"
                    {...register("Email", {
                        required: "This field is required", pattern: /^\S+@\S+$/i,
                        minLength: {
                            value: 3,
                            message: "Email Should be atleast three characters  long"
                        }
                    })}
                    className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
                />
                {
                    errors.Email && <span className='inline-block self-start text-accent'>{errors.Email.message}</span>
                }
                
                <motion.textarea
                    variants={item}
                    placeholder='Message'
                    {...register("Message", {
                        max: {
                            value: 300,
                            message: "Message should  not be more than 300 characters"
                        },
                        min: {
                            value: 2,
                            message: "Message  should be atleast two characters long"
                        }
                    })}
                    className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
                />
                {
                    errors.Message && <span className='inline-block self-start text-accent'>{errors.Message.message}</span>
                }
    
                <motion.input
                    variants={item}
                    value="Shoot your message"
                    type="submit"
                    className={`px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize ${montserrat.className}`}
                />
            </motion.form>
        </>
    );
}