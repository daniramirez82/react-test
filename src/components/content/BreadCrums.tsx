import BreadCrumsItem from "./BreadCrumsItem";
import style from "./BreadCrums.module.css";
import { useState } from "react";
import { MenuItem } from "../../types.d";

interface Props {
  setFilterCountry: (value: string) => void;
  filterCountry: string;
}

const BreadCrums = ({ setFilterCountry, filterCountry }: Props) => {

  const initialState: MenuItem = {item: "Members" , pos: 2}

  const [menuSelected, setMenuSelected] = useState<MenuItem>(initialState);

  console.log(menuSelected)

  const items: MenuItem[] = [
    { item: "Personal", pos: 1 },
    { item: "Members", pos: 2 },
    { item: "Integrations", pos: 3 },
    { item: "Billing", pos: 4 },
  ];

  const handleClick = (menuItem: MenuItem) => {
    setMenuSelected(menuItem);
  };

  return (
    <div className={`border-b border-b-lines grid ${style["grid-container"]}`}>
      {items.map((item) => (
        <BreadCrumsItem item={item} key={item.item} onClick={handleClick} />
      ))}
      <div></div>

      <div className="relative">
        <input
          className="bg-bg-light pl-12 py-2 text-text-secondary rounded-sm"
          type="text"
          placeholder="Spain, Poland ..."
          value={filterCountry}
          onChange={(e) => setFilterCountry(e.target.value)}
        />
        <img
          className="absolute top-2 left-2"
          src="/icons/search.svg"
          alt="search"
        />
      </div>
      <div className={`bg-lines  ${style[`col-start-${menuSelected.pos}`]}`}></div>
    </div>
  );
};

export default BreadCrums;
