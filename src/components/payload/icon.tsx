import Image from 'next/image'
import React from 'react'
import logo from '/public/dashboard-images/mansoura-one-city-logo-transparent.webp'

export default function Icon() {
  return (
    <div>
      <Image src={logo} className="w-32 object-contain" alt="Mansuora one city logo" />
    </div>
  )
}
