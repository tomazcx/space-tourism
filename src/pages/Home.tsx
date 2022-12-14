import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <main className="w-screen  pb-24">
            <section className="grid grid-cols-1 mx-auto desktop:grid-cols-2 w-11/12">
                <div className="flex flex-col text-center desktop:text-left gap-4 items text-white mx-auto">
                    <span className="title-page text-lg">so, you want to travel to</span>
                    <h1 className="uppercase text-7xl desktop:text-9xl font-mono">space</h1>
                    <span className="text-gray-400 max-w-[400px]">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</span>
                </div>
                <Link to={'/destination'} className="hover:outline-[45px] hover:outline hover:outline-gray-700 transition-all cursor-pointer bg-white rounded-full h-[200px] w-[200px]  mx-auto mt-12 desktop:mt-[100px] flex items-center justify-center">
                    <span className="font-mono text-2xl uppercase">Explore</span>
                </Link>
            </section>
        </main>
    )
}