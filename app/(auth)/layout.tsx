import React from 'react'

type Props = {
  children: React.ReactNode
}

const AuthLayout = ({children}: Props) => {
  return (
    <div>
      <main>
        {children}

      </main>
    </div>
  )
}

export default AuthLayout