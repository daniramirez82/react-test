
interface Props {
    item: {item: string, isSelected: boolean}
}
const BreadCrumsItem = ({item}: Props)=>{

    return (
        <div className={ `flex items-center justify-center px-4 ${item.isSelected ? "border-b-2 border-b-lines " : ""}` }>
            <div className="p-2">{item.item}</div>
        </div>
    )
}

export default BreadCrumsItem;