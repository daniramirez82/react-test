import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { type User, SortBy } from "./types.d";
import UserList from "./components/UserList";
import Loader from "./components/Loader";
import { useUsers } from "./helpers/useUsers";
import Header from "./components/Header";
import Button from "./components/Button";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./store";
import NewHeader from "./components/NewHeader";
import MainContent from "./components/content/MainContent";
import { useDarkMode } from "./darkModeContex";

function App() {
  const [colorLines, setColorLines] = useState(false);
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE);
  const [filterCountry, setFilterCountry] = useState("");
  const [asending, setAsending] = useState<boolean>(false);
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
  const {isDarkMode} = useDarkMode()
  const sortOrder = useSelector((state: RootState) => state.sortOrder);

  const originalUsers = useRef(users);

  const handleSorting = (sort: SortBy) => {
    setSorting(sort);
  };

  const handleColorChange = () => {
    setColorLines(!colorLines);
  };

  const handleEraseLine = (id: string) => {
    // const tempUsers = users.filter((user) => user.login.uuid != id);
    // setUsers(tempUsers);
  };

  const handleResetUsers = () => {
    // setUsers(originalUsers.current);
  };

  const getSortedUsers = (
    sorting: SortBy,
    users: User[],
    asending: boolean
  ) => {
    let sorted: User[];
    switch (sorting) {
      case SortBy.NAME:
        sorted = users.toSorted((a, b) =>
          a.name.first.localeCompare(b.name.first)
        );
        return asending ? sorted : sorted.reverse();
      case SortBy.LAST:
        sorted = users.toSorted((a, b) =>
          a.name.last.localeCompare(b.name.last)
        );
        return asending ? sorted : sorted.reverse();
      case SortBy.COUNTRY:
        sorted = users.toSorted((a, b) =>
          a.location.country.localeCompare(b.location.country)
        );
        return asending ? sorted : sorted.reverse();
      default:
        return users;
    }
  };

  const sortedUsers = useMemo(
    () => getSortedUsers(sorting, users, sortOrder[sorting]),
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
    <div className={`container m-auto font-inter ${isDarkMode ? "dark" : ""}`}>
      <NewHeader />
      <div className="relative dark:bg-base">
        <MainContent
          filterCountry={filterCountry}
          setFilterCountry={setFilterCountry}
          users={filteredUsers}
          changeSorting={handleSorting}
          colorLines={colorLines}
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
        <div className="flex items-center justify-center py-4">
          {hasNextPage && (
            <Button label="Cargar mas" handleClick={() => fetchNextPage()} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
