import { useState } from "react";
import NavbarButton from "./NavbarButton";
import { Menu } from "../../types.d";
const NavBar = () => {
  const items = ["home", "notification", "messages", "more"];
  const [menuSelection, setMenuSelection] = useState("home");

  const handleClick = (name: string) => {
    setMenuSelection(name);
  };

  return (
    <div className="flex items-center dark:bg-base">
      {items.map((item) => {
        return (
          <NavbarButton
            menuSelection={menuSelection}
            name={item}
            key={item}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default NavBar;
