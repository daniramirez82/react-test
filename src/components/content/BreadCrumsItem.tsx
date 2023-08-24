import { MenuItem } from "../../types.d"

interface Props {
    item: MenuItem
    onClick: (menuItem:MenuItem)=> void
}
const BreadCrumsItem = ({item, onClick}: Props)=>{

    return (
        <div className={ `flex items-center justify-center px-4 cursor-pointer` } onClick={()=> onClick(item)} >
            <div className="p-2 dark:text-white">{item.item}</div>
        </div>
    )
}

export default BreadCrumsItem;