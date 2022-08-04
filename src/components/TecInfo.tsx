interface InfoInterface{
    info: {
        name: string;
        description: string;
    }
    
}

export const TecInfo = ({info}: InfoInterface) =>{
    return(
        <div className="flex flex-col gap-4 px-4 xl:px-0">
            <h1 className="text-white text-5xl xl:6xl uppercase font-mono text-center xl:text-left">{info.name}</h1>
            <p className="text-gray-400 xl:max-w-[470px] text-center xl:text-left">
                {info.description}
            </p>
        </div>
    )
}