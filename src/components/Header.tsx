import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg';
import { NavLink } from './NavLink'

interface HeaderProps{
    funSidebar (value:boolean):void;
}

export const Header = (props:HeaderProps) => {


    return (
        <>
            
            <header className="w-full flex items-center justify-between pl-12 pr-12 medium:pr-0   ">

                <img src={logo} alt="Icon logo" width={35} />
                <hr className='w-[38%] hidden xl:block left-[15%] border-gray-500 z-20 absolute' />

                <img onClick={() => props.funSidebar(true)} src={hamburger} alt="Icon hamburguer" className='medium:hidden cursor-pointer' />
                <nav className='hidden backdrop-blur-3xl backdrop-brightness-105  opacity-90  text-sm font-sans text-white medium:flex items-center gap-12 px-24 justify-end h-20'>
                    <NavLink key={"00"} num='00' text='home' param='/' />
                    <NavLink key={"01"} num='01' text='destination' param='/destination' />
                    <NavLink key={"02"} num='02' text='crew' param='/crew' />
                    <NavLink key={"03"} num='03' text='technology' param='/technology' />
                </nav>
            </header>
        </>

    )
}