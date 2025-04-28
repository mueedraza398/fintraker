'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LuDollarSign } from 'react-icons/lu'

// Schema
const formSchema = z
  .object({
    username: z.string().min(2, { message: 'Full Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Enter a valid email address.' }),
    phonenumber: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
    confirmpassword: z.string().min(6, { message: 'Confirm Password must be at least 6 characters.' }),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: 'Passwords do not match.',
    path: ['confirmpassword'],
  })

type FormValues = z.infer<typeof formSchema>

export default function Register() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log('Form Submitted:', data)
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-gray-100 dark:bg-gray-900">
       <div className='flex flex-row-reverse'>
      <h1 className="text-2xl font-bold text-center mb-4">FinTrack</h1>
            <LuDollarSign className="text-4xl text-emerald-600 mb-6" />
            </div>
      

      <div className="w-full max-w-md space-y-6 rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-950">
        <div className="text-center space-y-1">
          <h2 className="text-3xl font-bold">Create an Account</h2>
          <p className="opacity-50 text-sm">Enter your details to create your account</p>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Full Name</label>
            <Input placeholder="Your Name" {...form.register('username')} />
            {form.formState.errors.username && (
              <p className="text-xs text-red-500">{form.formState.errors.username.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="you@example.com" {...form.register('email')} />
            {form.formState.errors.email && (
              <p className="text-xs text-red-500">{form.formState.errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Phone Number</label>
            <Input type="text" placeholder="+1 (555) 123-2342" {...form.register('phonenumber')} />
            {form.formState.errors.phonenumber && (
              <p className="text-xs text-red-500">{form.formState.errors.phonenumber.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <Input type="password" placeholder="••••••••" {...form.register('password')} />
            {form.formState.errors.password && (
              <p className="text-xs text-red-500">{form.formState.errors.password.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Confirm Password</label>
            <Input type="password" placeholder="••••••••" {...form.register('confirmpassword')} />
            {form.formState.errors.confirmpassword && (
              <p className="text-xs text-red-500">{form.formState.errors.confirmpassword.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
          >
            Create Account
          </Button>

          <p className="text-center text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-emerald-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
