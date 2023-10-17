import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const SignOut = () => {
  return (
    <Link href='/' className='text-red-600' onClick={() => signOut()}>LOG OUT</Link>
  )
}

const SignIn = () => {
    return (
        <Link href='/api/auth/signin' className='hover:bg-slate-400 hover:text-black'>LOG IN</Link>
    )
}

export {SignIn, SignOut}