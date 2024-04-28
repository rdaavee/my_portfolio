import Link from 'next/link'
import React from 'react'
import { ContactMeBtn } from '@/components/ui/contact-me'

export default function HeroSection() {
    return (
        <div className='min-h-[65vh] flex flex-col-reverse lg:flex-row gap-14 lg:gap-0 items-center justify-between'>
            <div className='space-y-10 text-center lg:text-left'>
                <h1 className='text-4xl lg:text-7xl font-bold'>Nice to meet you!<br />
                    <span
                        className='bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600'>I&rsquo;m Ranier.
                    </span>
                </h1>
                <p
                    className='md:w-96 text-lg text-neutral-200'>
                    {"A student dedicated to building responsive and beautiful websites, while actively learning modern technologies for web development."}
                </p>
                <Link
                    href={"mailto:rdavee0412@gmail.com"} className='inline-block group'>
                    <div>
                        <ContactMeBtn borderRadius='0.5rem' className='p-3 font-bold'>
                            Contact Me ✉️
                        </ContactMeBtn>
                    </div>
                </Link>
            </div>
        </div>
    )
}
