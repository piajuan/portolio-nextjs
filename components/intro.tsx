import React from 'react'
import Image from "next/image"

export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center">
            <div>
                <Image
                    src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2200&q=80"
                    alt="Jane Doe"
                    width="80"
                    height="90"
                    quality="95"
                    priority={true}
                />
            </div>
        </div>
    </section>
  )
}
