import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsappIcon() {
  return (
    <div className="fixed bottom-4 z-20 right-8">
      <Link href="https://wa.me/2349068406794" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp
          className="w-14 h-14 p-2 rounded-full shadow-lg hover:opacity-90 text-white bg-green-500"
        />
      </Link>
    </div>


  )
}
