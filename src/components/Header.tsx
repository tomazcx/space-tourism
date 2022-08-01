import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg';
import { NavLink } from './NavLink'

export const Header = () => {

    return (
        <header className="absolute z-10 w-full flex items-center justify-between pl-12 pr-12 header:pr-0 top-8 header:top-0 desktop:top-12 ">
            <img src={logo} alt="Icon logo" width={35} />
            <hr className='w-[38%] hidden line:block left-[15%] border-gray-500 z-20 absolute' />

            <img src={hamburger} alt="Icon hamburguer" className='header:hidden cursor-pointer' />
            <nav className='hidden backdrop-blur-3xl backdrop-brightness-105  opacity-90  text-sm font-sans text-white header:flex items-center gap-12 px-24 justify-end h-20'>
                <NavLink num='00' text='home' param='/' />
                <NavLink num='01' text='destination' param='/destination' />
                <NavLink num='02' text='crew' param='/crew' />
                <NavLink num='03' text='technology' param='/technology' />



            </nav>
        </header>
    )
}