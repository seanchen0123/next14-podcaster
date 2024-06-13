import Image from 'next/image'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div>
      <main className=" relative h-screen w-full">
        <div className=" absolute size-full">
          <Image
            src={'/images/bg-img.png'}
            alt="background"
            fill
            className=" size-full"
          />
        </div>
        {children}
      </main>
    </div>
  )
}

export default AuthLayout
