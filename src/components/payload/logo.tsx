import React from 'react'
import logo from '/public/dashboard-images/mansoura-one-city-logo-transparent.webp'
import Image from 'next/image'
export default function Logo() {
  return (
    <div>
      <Image src={logo} className="w-80 object-contain" alt="Mansuora one city logo" />
    </div>
  )
}
