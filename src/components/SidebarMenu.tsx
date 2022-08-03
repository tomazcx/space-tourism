import { Link } from 'react-router-dom'
import close from '../assets/shared/icon-close.svg'

interface SidebarInterface{
    closeFun (value: boolean):void;
}

export const SidebarMenu = (props: SidebarInterface) =>{
    return(
        <aside className="fixed right-0 h-screen pt-8 w-8/12 animate-show-sidebar backdrop-blur-3xl px-6 ">
            <div className="w-full flex justify-end mb-8">
            <img src={close} width={17} alt="Icon close"  onClick={() => props.closeFun(false)} />
            </div>
            

            <div className="flex flex-col gap-6">
                <Link to={'/'}  onClick={() => props.closeFun(false)} className="flex items-center gap-3 uppercase"><span className='text-white'>00</span><span className='text-gray-400'>home</span> </Link>
                <Link to={'/destination'}  onClick={() => props.closeFun(false)} className="flex items-center gap-3 uppercase"><span className=' text-white'>01</span><span className='text-gray-400'>destination</span> </Link>
                <Link to={'/crew'}  onClick={() => props.closeFun(false)} className="flex items-center gap-3 uppercase"><span className=' text-white'>02</span><span className='text-gray-400'>crew</span> </Link>
                <Link to={'/technology'}  onClick={() => props.closeFun(false)} className="flex items-center gap-3 uppercase"><span className=' text-white'>03</span><span className='text-gray-400'>technology</span> </Link>
            </div>
        </aside>
    )
}