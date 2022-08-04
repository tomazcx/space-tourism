import douglas from '../assets/crew/image-douglas-hurley.png'
import anousheh from '../assets/crew/image-anousheh-ansari.png'
import mark from '../assets/crew/image-mark-shuttleworth.png'
import victor from '../assets/crew/image-victor-glover.png'
import { CrewInfo } from '../components/CrewInfo'
import data from '../data/data.json'
import { useState } from 'react'
import { DotSlide } from '../components/DotSlide'
import classNames from 'classnames'



export const Crew = () => {

    const [displayCrew, setCrew] = useState(0)
    const images = [douglas, mark, victor, anousheh]

    return (
        <main className="w-screen ">
            <section className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-12 items-center pb-16 sm:pb-0 w-11/12 mx-auto xl:pl-24 pt-12 xl:pt-0 ">

                <div className='flex flex-col h-full gap-16'>
                    <h1 className="text-center medium:text-left medium:flex medium medium:justify-start medium:gap-6"><span className="text-gray-500 font-bold text-lg mr-8 medium:mr-0">02</span> <span className="title-page text-sm medium:text-lg">meet your crew</span></h1>
                    <div className='xl:h-[500px] border-b border-gray-500 xl:w-full flex sm:hidden flex-col justify-end items-center xl:items-start'>
                        <img src={images[displayCrew]} alt="Crew image" className={displayCrew === 1 ? 'w-2/5 xl:w-7/12' : 'w-2/4 xl:w-9/12'} />
                    </div>
                    <div className='flex sm:hidden gap-4 justify-center xl:justify-start'>
                        <DotSlide key={'00'} selected={displayCrew} funSelect={setCrew} value={0} />
                        <DotSlide key={'01'} selected={displayCrew} funSelect={setCrew} value={1} />
                        <DotSlide key={'02'} selected={displayCrew} funSelect={setCrew} value={2} />
                        <DotSlide key={'03'} selected={displayCrew} funSelect={setCrew} value={3} />
                    </div>
                    <CrewInfo info={data.crew[displayCrew]} />
                    <div className='hidden sm:flex gap-4 justify-center xl:justify-start'>
                        <DotSlide key={'00'} selected={displayCrew} funSelect={setCrew} value={0} />
                        <DotSlide key={'01'} selected={displayCrew} funSelect={setCrew} value={1} />
                        <DotSlide key={'02'} selected={displayCrew} funSelect={setCrew} value={2} />
                        <DotSlide key={'03'} selected={displayCrew} funSelect={setCrew} value={3} />
                    </div>
                </div>
                <div className='xl:h-[500px] hidden xl:w-full sm:flex flex-col justify-end items-center xl:items-start'>
                    <img src={images[displayCrew]} alt="Crew image" className={displayCrew === 1 ? 'w-2/5 xl:w-7/12' : 'w-2/4 xl:w-9/12'} />
                </div>
            </section>
        </main>
    )
}