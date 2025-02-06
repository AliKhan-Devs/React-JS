import React from 'react'
import Hero from './Hero'
import ServicesIntro from './ServicesIntro'
import Choose from './Choose'
import OurProcess from './OurProcess'
import StatsSection from './StatsSection'
import GetinTouch from './GetinTouch'

export default function Home() {
    return (
        <div>
            <Hero mainHeading="NexSky" Heading="EMPOWRING TOMORROW'S TECH" desc="NexSky provides top-notch web development, graphic designing, UI/UX designing, WordPress development, DSA, C++, and cybersecurity consulting services." margin="8"/>
            <ServicesIntro/>
            <Choose />
            <OurProcess />
            <StatsSection/>
            <GetinTouch/>
        </div>
    )
}
