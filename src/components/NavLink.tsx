import { Link, useLocation, useResolvedPath } from "react-router-dom"
import classNames from 'classnames'

interface LinkInterface {
    num: string;
    text: string;
    param: string;
}

export const NavLink = (props: LinkInterface) => {

    const page = useLocation()

    return (
        <Link to={props.param} 
        className={classNames('h-full uppercase flex items-center gap-2 hover:border-b-2 hover:text-gray-300 hover:border-gray-500', {
            'border-b-2 border-white' : props.param === page.pathname
        })}>
            <span className="font-bold hidden desktop:inline">{props.num}</span>
            {props.text}
        </Link>
    )
}