import BreadCrumsItem from "./BreadCrumsItem";

const BreadCrums = () => {
  const items = [
    { item: "Personal", isSelected: false },
    { item: "Members", isSelected: true },
    { item: "Integrations", isSelected: false },
    { item: "Billing", isSelected: false },
  ];

  return (
    <div className="border-b border-b-lines flex justify-between items-center">
      <div className="flex">
        {items.map((item) => (
          <BreadCrumsItem item={item} key={item.item} />
        ))}
      </div>
      <div className="relative">
        <input className="bg-bg-light pl-12 py-2 text-text-secondary rounded-sm" type="text" placeholder="Spain, Poland ..." />
        <img className="absolute top-2 left-2" src="/icons/search.svg" alt="search" />
      </div>
    </div>
  );
};

export default BreadCrums;
