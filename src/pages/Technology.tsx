import launchVehicle from '../assets/technology/image-launch-vehicle-portrait.jpg'
import spaceport from '../assets/technology/image-spaceport-portrait.jpg'
import spaceCapsule from '../assets/technology/image-space-capsule-portrait.jpg'
import launchVehicleLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg'
import spaceportLandscape from '../assets/technology/image-spaceport-landscape.jpg'
import spaceCapsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg'
import data from '../data/data.json'
import { useState } from 'react'
import { TecInfo } from '../components/TecInfo'
import { ButtonTechnology } from '../components/ButtonTechnology'

export const Technology = () => {

    const images =[launchVehicle, spaceport, spaceCapsule]
    const imagesLandscape =[launchVehicleLandscape, spaceportLandscape, spaceCapsuleLandscape]

    const [technologyId, setId] = useState(0)

    return (
        <main className="w-full pb-24 flex flex-col gap-12 xl:gap-8 xl:pl-24 pt-8">
            <h1 className="text-center medium:text-left medium:flex medium medium:justify-start medium:gap-6"><span className="text-gray-500 font-bold text-lg mr-8 medium:mr-0">03</span> <span className="title-page text-sm medium:text-lg">space launch 101</span></h1>
            <section className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8">

                <div className="w-full block xl:hidden">
                    <img src={imagesLandscape[technologyId]} alt="Image technology" className='w-full' />
                </div>
                <div className="flex gap-24 flex-col xl:flex-row">
                    <div className="flex flex-row xl:flex-col gap-6 justify-center items-center">
                        <ButtonTechnology key={'00'} value={0} selected={technologyId} setFun={setId} />
                        <ButtonTechnology key={'01'} value={1} selected={technologyId} setFun={setId}  />
                        <ButtonTechnology key={'02'} value={2} selected={technologyId} setFun={setId} />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <span className='uppercase text-lg text-gray-400 text-center xl:text-left'>the terminology...</span>
                        <TecInfo info={data.technology[technologyId]} />
                    </div>
                </div>

                <div className="h-full ml-auto hidden xl:block">
                    <img src={images[technologyId]} alt="Vehicle image" />
                </div>
            </section>
        </main>
    )
}