'use client'

import { SkillsCard } from '@/components/ui/skills-card'
import React from 'react'
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
    SiJavascript,
    SiBootstrap,
    SiTailwindcss,
    SiReact,
    SiTypescript,
    SiPhp,
    SiGit,
} from "react-icons/si";

export default function Skills() {

    const skills = [
        {
            text: 'HTML',
            Icon: FaHtml5,
        },
        {
            text: 'CSS',
            Icon: FaCss3Alt,
        },
        {
            text: 'JavaScript',
            Icon: SiJavascript,
        },
        {
            text: 'Bootstrap',
            Icon: SiBootstrap,
        },
        {
            text: 'Tailwind CSS',
            Icon: SiTailwindcss,
        },
        {
            text: 'PHP',
            Icon: SiPhp,
        },
        {
            text: 'TypeScript',
            Icon: SiTypescript,
        },
        {
            text: 'React',
            Icon: SiReact,
        },
        {
            text: 'Git',
            Icon: SiGit,
        },

    ]

    return (
        <div className= 'mt-10 max-w-5xl mx-auto px-8' >
        <h1 className='font-bold text-4xl flex flex-col items-center justify-center' > Skills < /h1>
            < SkillsCard items = { skills } />
                </div>
    )
}
