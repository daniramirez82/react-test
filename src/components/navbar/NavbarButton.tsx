import MenuIcon from "./MenuIcon"

interface Props {
    name: string,
    isSelected: boolean,
}

const NavbarButton = ({name, isSelected}: Props)=>{
    return(
        <div className="px-6 py-3 flex items-center">
            <div><MenuIcon color="none" name={name} size={32}/></div>
            <div className={`${isSelected ? "text-brand" : "text-text-optional"} pl-3`}>{name}</div>
        </div>
    )
}

export default NavbarButton;