import Link from 'next/link';
import React from 'react'
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

export default function Navbar() {

    const socials = [
        {
            link: 'https://github.com/rdaavee',
            label: 'Github',
            Icon: FaGithubSquare,
        },
        {
            link: 'https://www.facebook.com/rdaavee/',
            label: 'Facebook',
            Icon: FaFacebookSquare,
        },
        {
            link: 'https://www.linkedin.com/in/rdavee/',
            label: 'Linkedin',
            Icon: FaLinkedin,
        },
    ]


    return (
        <nav className='py-10 flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>Ran.dev</h1>
            <div className='flex items-center gap-5'>
                {socials.map((social, index) => {
                    const Icon = social.Icon
                    return (
                        <Link
                            href={social.link}
                            key={index}
                            aria-label={social.label}>
                            <Icon className='w-5 h-5 hover:scale-125 transition-all' />
                        </Link>
                    );
                })}
            </div>
        </nav>
    )
}
