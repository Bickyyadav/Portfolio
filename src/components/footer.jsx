
import React, { useContext } from 'react'
import { BioContext } from '../context'

export default function Footer() {
  const myName = useContext(BioContext)
  return (
    <div className=' text-gray-600 flex gap-3 text-xs mb-4 pb-4 justify-center'>
        <div className=' font-bold'>
        2025
        </div>
        — Built by {myName}
    </div>
  )
}
