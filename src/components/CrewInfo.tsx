interface InfoInterface{
    info:{
        name: string;
        role: string;
        bio: string;
    }
}

export const CrewInfo = ({info} : InfoInterface) =>{
    return(
        <div className="flex flex-col gap-4">
            <span className="text-3xl text-gray-300 font-mono uppercase text-center xl:text-left">{info.role}</span>
            <span className="text-white text-4xl medium:6xl font-mono uppercase text-center xl:text-left">{info.name}</span>
            <p className="text-gray-400 mt-6 xl:max-w-[470px] text-center xl:text-left">
                {info.bio}
            </p>
        </div>
    )
}