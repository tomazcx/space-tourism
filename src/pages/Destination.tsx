import { useEffect, useState } from 'react'
import moon from '../assets/destination/image-moon.png'
import mars from '../assets/destination/image-mars.png'
import europa from '../assets/destination/image-europa.png'
import titan from '../assets/destination/image-titan.png'
import { DestinationInfo } from '../components/DestinationInfo';
import { NavButtonDestination } from '../components/NavButtonDestination';
import data from '../data/data.json'

export const Destination = () => {

    const images = [moon, mars, europa, titan]
    const [destinationId, setId] = useState(0)


    return (
        <main className="w-screen pb-24 ">
            <section className="grid grid-cols-1 mx-auto xl:grid-cols-2 gap-12 xl:gap-0 items-center w-11/12 xl:pl-32 xl:pr-16">
                <div className="flex flex-col gap-16 items-center xl:items-start">
                    <h1 className="text-centermedium:text-left medium:flex medium medium:justify-start medium:gap-6"><span className="text-gray-500 font-bold text-lg mr-8 medium:mr-0">01</span> <span className="title-page text-sm medium:text-lg">Pick your destination</span></h1>
                    <img src={images[destinationId]} alt="Image destination" width={350} className="desktop:ml-12" />
                </div>
                <div className='flex flex-col justify-between gap-12 items-center xl:items-start '>
                    <nav className='flex items-center gap-6'>
                        <NavButtonDestination key={'0'} name='Moon' num={0} selected={data.destinations[destinationId].name} setFun={setId} />
                        <NavButtonDestination key={'1'} name='Mars' num={1}  selected={data.destinations[destinationId].name} setFun={setId} />
                        <NavButtonDestination key={'2'} name='Europa' num={2}  selected={data.destinations[destinationId].name} setFun={setId} />
                        <NavButtonDestination key={'3'} name='Titan' num={3}  selected={data.destinations[destinationId].name} setFun={setId} />
                    </nav>
                    <DestinationInfo info={data.destinations[destinationId]} />
                </div>
            </section>
        </main>
    )
}