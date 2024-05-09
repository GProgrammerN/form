'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from 'zod'

const schemaForm = z.object({
    personal: z.object({
        firstname: z.string().min(1, "Please, inform a valid name."),
        lastname: z.string().min(1, "Please, inform a valid surname."),
        email: z.string().email("Please, inform a valid email."),
        phone: z.string().min(1, "Please, inform a valid phone number."),
    })
})

type FormProps = z.infer<typeof schemaForm>;

export default function Form() {
    const [step, setStep] = useState(0);
    const { handleSubmit, register, formState: { errors } } = useForm<FormProps>({
        criteriaMode: 'all',
        mode: 'onSubmit',
        resolver: zodResolver(schemaForm),
        defaultValues: {
            personal: {
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
            }
        }
    });
    const handleFormSubmit = ((data: FormProps) => {
        console.log(data)
    })

    console.log(errors)

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="
        flex flex-col text-nowrap
        bg-gray-200 rounded-xl
        mt-4 md:mt-12 lg:mt-16 pb-12 mx-auto px-2 md:px-12 select-none
        w-[98vw] md:w-fit">
            {step === 0 && (<><div className="md:flex md:flex-wrap">
                <div className="flex mt-12 md:mr-2 border-b-2 border-black/40 shadow-lg">
                    <label htmlFor="firstname" className="font-semibold">First Name</label>
                    <input type="text" {...register('personal.firstname')} placeholder="John" id="firstname" className="ml-1 bg-inherit border-none focus:outline-none w-full" autoFocus />
                </div>
                <div className="flex mt-12 md:ml-2 border-b-2 border-black/40 shadow-lg">
                    <label htmlFor="lastname" className="font-semibold">Last Name</label>
                    <input type="text" {...register('personal.lastname')} placeholder="Doe" id="lastname" className="ml-1 bg-inherit border-none focus:outline-none w-full" />
                </div>
            </div>
                <div className="flex mt-12 border-b-2 border-black/40 shadow-lg">
                    <label htmlFor="email" className="font-semibold">Email</label>
                    <input type="text" {...register('personal.email')} placeholder="example@mail.com" id="email" className="ml-1 bg-inherit border-none focus:outline-none w-full" />
                </div><div className="flex mt-12 border-b-2 border-black/40 shadow-lg w-full">
                    <label htmlFor="phone" className="font-semibold">Phone Number</label>
                    <input type="text" {...register('personal.phone')} placeholder="+11 (11) 1111-1111" id="phone" className="ml-1 bg-inherit border-none focus:outline-none w-full" />
                </div>
                <button onClick={() => { handleFormSubmit }
                } className="bg-violet-600 hover:bg-violet-800 rounded-lg h-10 mt-12 text-white">Proceed</button>
                <span className="flex flex-col font-extrabold">
                    {errors.personal?.firstname?.message && (
                        <span className="mt-4">{errors.personal?.firstname?.message}</span>
                    )}
                    {errors.personal?.lastname?.message && (
                        <span className="mt-4">{errors.personal?.lastname?.message}</span>
                    )}
                    {errors.personal?.email?.message && (
                        <span className="mt-4">{errors.personal?.email?.message}</span>
                    )}
                    {errors.personal?.phone?.message && (
                        <span className="mt-4">{errors.personal?.phone?.message}</span>
                    )}
                </span>
            </>)
            }
            {step === 1 && (
                <>
                    <button onClick={() => { setStep(0) }}>Next Step</button>
                </>)
            }
        </form>
    )
}