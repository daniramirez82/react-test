import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { type User, SortBy } from "./types.d";
import UserList from "./components/UserList";
import { useUsers } from "./helpers/useUsers";

function App() {
  const [colorLines, setColorLines] = useState(false);
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE);
  const [filterCountry, setFilterCountry] = useState("");
  const [page, setPage] = useState(1);
  const { isLoading, error, users, fetchNextPage, hasNextPage } = useUsers();
  const originalUsers = useRef(users);

  const handleColorChange = () => {
    setColorLines(!colorLines);
  };

  const handleSorting = (sort: SortBy) => {
    setSorting(sort);
  };

  const handleEraseLine = (id: string) => {
    // const tempUsers = users.filter((user) => user.login.uuid != id);
    // setUsers(tempUsers);
  };

  const handleResetUsers = () => {
    // setUsers(originalUsers.current);
  };

  const getSortedUsers = (sorting:SortBy, users: User[]) => {
    switch (sorting) {
      case SortBy.NAME:
        return users.toSorted((a, b) => a.name.first.localeCompare(b.name.first));
      case SortBy.LAST:
        return users.toSorted((a, b) => a.name.last.localeCompare(b.name.last));
      case SortBy.COUNTRY:
        return users.toSorted((a, b) => a.location.country.localeCompare(b.location.country));
      default:
        return users;
    }
  };
  
  const sortedUsers = useMemo(() => getSortedUsers(sorting, users), [sorting, users]);
  

  const filteredUsers = (() => {
    return filterCountry != "" && filterCountry.length > 0
      ? sortedUsers.filter((user) => {
          return user.location.country
            .toLocaleLowerCase()
            .includes(filterCountry.toLowerCase());
        })
      : sortedUsers;
  })();

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

      <UserList
        changeSorting={handleSorting}
        users={filteredUsers}
        colorLines={colorLines}
        handleEraseLine={handleEraseLine}
      />
      {isLoading && (
        <div className="text-"> Se Esta Cargando </div>
      )}
      { hasNextPage && <button onClick={() => fetchNextPage()}>Cargar mas</button>}
    </div>
  );
}

export default App;
