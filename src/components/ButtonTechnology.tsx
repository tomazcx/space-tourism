import classNames from "classnames";

interface ButtonInterface{
    value: number;
    selected: number;
    setFun (value:number):void;
}

export const ButtonTechnology = (props : ButtonInterface) =>{
    return(
        <button 
        onClick={() => props.setFun(props.value)}
        className={classNames("h-[60px] transition-colors text-3xl font-mono w-[60px] text-gray-400 rounded-full flex items-center hover:bg-white hover:text-gray-900 cursor-pointer justify-center border border-gray-500", {
            'bg-white text-gray-900' : props.selected === props.value,
            'bg-transparent text-gray-400' : props.selected !== props.value
        })}>
            {props.value +1}
        </button>
    )
}