import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { type User, SortBy } from "./types.d";
import UserList from "./components/UserList";
import Loader from "./components/Loader";
import { useUsers } from "./helpers/useUsers";
import Header from "./components/Header";

function App() {
  const [colorLines, setColorLines] = useState(false);
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE);
  const [filterCountry, setFilterCountry] = useState("");
  const [page, setPage] = useState(1);
  const {
    isLoading,
    error,
    users,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useUsers();
  const originalUsers = useRef(users);

  console.log(status, "isFetching---->", isFetching);

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

  const getSortedUsers = (sorting: SortBy, users: User[]) => {
    switch (sorting) {
      case SortBy.NAME:
        return users.toSorted((a, b) =>
          a.name.first.localeCompare(b.name.first)
        );
      case SortBy.LAST:
        return users.toSorted((a, b) => a.name.last.localeCompare(b.name.last));
      case SortBy.COUNTRY:
        return users.toSorted((a, b) =>
          a.location.country.localeCompare(b.location.country)
        );
      default:
        return users;
    }
  };

  const sortedUsers = useMemo(
    () => getSortedUsers(sorting, users),
    [sorting, users]
  );

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
    <>
      <Header
        filterCountry={filterCountry}
        handleColorChange={handleColorChange}
        handleSorting={handleSorting}
        sorting={sorting}
        handleResetUsers={handleResetUsers}
        setFilterCountry={setFilterCountry}
      />
      <div className="relative">
        <UserList
          changeSorting={handleSorting}
          users={filteredUsers}
          colorLines={colorLines}
          handleEraseLine={handleEraseLine}
        />
        {isLoading && (
          <div className="h-40 w-full p-9 flex justify-center items-center rounded-lg text-slate-950">
            <Loader />
          </div>
        )}
        {isFetchingNextPage && (
          <div className="h-40 w-full  absolute bottom-5 p-9 flex justify-center items-center rounded-lg text-slate-950 overflow-hidden">
            <div className="bg-opacity-10 bg-slate-400 backdrop-blur-md absolute w-full h-full"></div>
            <Loader />
          </div>
        )}
        {hasNextPage && (
          <button
            className="p-3 rounded-lg m-4 bg-indigo-900"
            onClick={() => fetchNextPage()}
          >
            Cargar mas
          </button> //TODO make a state for the buttos be clicked or unselected
        )}
      </div>
    </>
  );
}

export default App;
