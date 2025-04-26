'use client'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    phonenumber: z.number().min(11, {
        message: "Number must be at least 11 digits.",
    }),
    password: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    confirmpassword: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})
type FormValues = z.infer<typeof formSchema>
const Register = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    })
    const onSubmit = (data: FormValues) => {
        console.log("Form submitted data:", data)
    }
    return (
        <div>
            <div className='h-full w-full '>
                <h1 className='text-2xl font-bold text-center p-8 '>FinTrack</h1>
                <div className=' w-[33%] mx-auto space-y-4 rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-950 '>
                    <h1 className='text-3xl font-bold text-center'>Create an Account</h1>
                    <p className='opacity-50 text-center'>Enter your details to create your account</p>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Name" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="you@example.com" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phonenumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input type='number' placeholder="+1 (555) 123-2342" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="......." {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="confirmpassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="......." {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors text-white h-10 px-4 py-2 w-full bg-emerald-600 hover:bg-emerald-700" type="submit">Create Account</button>
                            <p className='text-center'>Already have an account?
                                <Link href="/login">login</Link>
                            </p>
                        </form>

                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Register