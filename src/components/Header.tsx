import { SortBy } from "../types.d";

interface HeaderProps {
    handleColorChange: () => void;
    handleSorting: (sorting: SortBy) => void;
    sorting: SortBy;
    handleResetUsers: () => void;
    setFilterCountry: (value: string) => void;
    filterCountry: string;
  }

const Header = ({handleColorChange, handleSorting, sorting, handleResetUsers, setFilterCountry, filterCountry}:HeaderProps) => {
  return (
    <div className="w-full container m-auto">
      <h1 className="bg-slate-900"> Prueba tecnica</h1>
      <div className=" flex gap-4 p-4 ">
        <button
          className="bg-slate-400 text-slate-900 p-3 rounded-lg"
          onClick={handleColorChange}
        >
          Colorear
        </button>
        <button
          className="bg-slate-400 text-slate-900 p-3 rounded-lg"
          onClick={() => handleSorting(SortBy.COUNTRY)}
        >
          {sorting === SortBy.COUNTRY ? "Desordenar" : "Ordenar"}
        </button>
        <button
          className="bg-slate-400 text-slate-900 p-3 rounded-lg"
          onClick={handleResetUsers}
        >
          Reset Users
        </button>
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
