import { useRouter } from 'next/router'
import React, { use } from 'react'
import { useEffect } from 'react'

const ProtectedRoute = ({childern}:{childern:React.ReactNode}) => {
    const router = useRouter()

    useEffect(() => {
        const isLoggedin = localStorage.getItem('isLoggedIn')
        if(!isLoggedin){
            router.push('/admin')
        }
    },[router])
    
  return (
    <>
        {childern}
    </>
  )
}

export default ProtectedRoute