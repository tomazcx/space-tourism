interface InfoInterface {
    info: {
        name: string;
        description: string;
        distance: string;
        travel: string;

    }
}

export const DestinationInfo = ({ info }: InfoInterface) => {
    return (
        <div className="text-white flex flex-col gap-4 items-center xl:items-start mx-auto">
             <h1 className="uppercase text-7xl medium:text-8xl  font-mono">{info.name}</h1>
            <p className="text-gray-400 mb-8 xl:max-w-[470px] text-center xl:text-left">{info.description}</p>
            <hr className="border-t-gray-600" />
            <div className="flex flex-col medium:flex-row items-center justify-between gap-8">
                <div className="flex flex-col gap-3 items-center xl:items-start">
                    <span className="uppercase text-gray-400">avg. distance</span>
                    <span>{info.distance}</span>
                </div>
                <div className="flex flex-col gap-3 items-center xl:items-start">
                    <span className="uppercase text-gray-400">est. travel time</span>
                    <span>{info.travel}</span>
                </div>
            </div>
        </div>
    )
}