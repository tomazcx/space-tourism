import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className="bg-no-repeat min-h-screen w-screen bg-fixed bg-homeMobile tablet:bg-homeTablet desktop:bg-homeDestkop flex flex-col items-center justify-end pb-24">
            <div className="grid grid-cols-1 desktop:grid-cols-2 w-11/12">
                <div className="flex flex-col text-center mt-32 desktop:mt-48 desktop:text-left gap-4 items text-white mx-auto">
                    <span className="uppercase text-lg text-gray-400 tracking-[4.75px]">so, you want to travel to</span>
                    <h1 className="uppercase text-7xl tablet:text-9xl font-mono">space</h1>
                    <span className="text-gray-400 max-w-[400px]">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</span>
                </div>
                <Link to={'/destination'} className="cursor-pointer bg-white rounded-full h-[200px] w-[200px] mt-12 mx-auto desktop:mt-[250px] flex items-center justify-center">
                    <span className="font-mono text-2xl uppercase">Explore</span>
                </Link>
            </div>
        </div>
    )
}