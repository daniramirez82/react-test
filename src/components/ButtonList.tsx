
interface Props {
    label:string
}

const ButtonList = ({label}:Props)=>{

    return (
        <div className=" pl-8 pr-4 py-4 bg-base flex justify-between items-center text-white rounded-sm dark:bg-optional">
            <span>{label}</span>
            <img className="ml-8" src="/icons/arrow.svg" alt="down arrow" />
        </div>
    )
}

export default ButtonList;