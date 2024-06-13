import { SignIn } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const SignInPage = (props: Props) => {
  return (
    <div className=' flex-center glassmorphism-auth h-screen w-full'>
      <SignIn />
    </div>
  )
}

export default SignInPage