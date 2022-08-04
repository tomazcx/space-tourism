import classNames from "classnames"

interface PropsInterface{
    name: string;
    selected: string;
    setFun (value: number):void;
    num: number;
}

export const NavButtonDestination = (props: PropsInterface) =>{
    return (
        <span className={classNames('hover:text-gray-500 hover:border-b hover:border-gray-500  uppercase text-gray-400 cursor-pointer', {
            'text-white border-b border-white' : props.name === props.selected
        })}
        onClick={() => props.setFun(props.num)}
        >{props.name}</span>
    )
}