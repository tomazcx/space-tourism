import classNames from "classnames"

interface PropsDot{
    funSelect (value: number):void;
    selected : number;
    value: number;
}

export const DotSlide = (props : PropsDot) =>{
    return(
        <div 
        onClick={() => props.funSelect(props.value)}
        className={classNames('h-[15px] w-[15px] rounded-full cursor-pointer hover:bg-gray-500' ,{
            "bg-white" : props.selected == props.value,
            "bg-gray-700" : props.selected !== props.value
        })}></div>
    )
}