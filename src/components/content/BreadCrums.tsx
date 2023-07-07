import BreadCrumsItem from "./BreadCrumsItem";

const BreadCrums = ()=>{

    const items = [{item: "Personal", isSelected: false}, {item: "Members", isSelected: true}, {item: "Integrations", isSelected: false}, {item: "Billing", isSelected: false} ]

    return (
        <div className="border-b-lines flex justify-between">
            <div>{items.map((item)=> <BreadCrumsItem item={item} key={item.item}/> )}</div>
            <div>input search</div>
        </div>
    )
}

export default BreadCrums;