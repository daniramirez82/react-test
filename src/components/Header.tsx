import { SortBy } from "../types.d";
import Button from "./Button";

interface HeaderProps {
  handleColorChange: () => void;
  handleSorting: (sorting: SortBy) => void;
  sorting: SortBy;
  handleResetUsers: () => void;
  setFilterCountry: (value: string) => void;
  filterCountry: string;
}

const Header = ({
  handleColorChange,
  handleSorting,
  sorting,
  handleResetUsers,
  setFilterCountry,
  filterCountry,
}: HeaderProps) => {
  return (
    <div className="w-full container m-auto bg-red-600">
      <div>
        
      </div>
      <div className=" flex gap-4 p-4 ">
        <Button handleClick={handleColorChange} label="Colorear" />
        <Button
          handleClick={() => handleSorting(SortBy.COUNTRY)}
          label={sorting === SortBy.COUNTRY ? "Desordenar" : "Ordenar"}
        />
        <Button handleClick={handleResetUsers} label={"Reset Users"} />
        <input
          className="text-black"
          type="text"
          onChange={(e) => {
            setFilterCountry(e.target.value);
          }}
          value={filterCountry}
        />
      </div>
    </div>
  );
};

export default Header;
