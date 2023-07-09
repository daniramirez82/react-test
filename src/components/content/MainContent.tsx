import BreadCrums from "./BreadCrums";
import UserRow from "./UserRow";
import { SortBy, User } from "../../types.d";
import TableHeaderCell from "../TableHeaderCell";
import { useState } from "react";

interface Props {
  users: User[];
  changeSorting: (sort: SortBy) => void;
  colorLines: boolean;
}

const MainContent = ({ users, changeSorting }: Props) => {
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.NONE);
  const handleClick = (sort: SortBy) => {
    changeSorting(sort);
    setSortBy(sort);
  };

  return (
    <div className="w-full">
      <div className="text-3xl font-medium pt-16 pb-8">Users</div>
      <BreadCrums />
      <table className="w-full bg-bg-light rounded-md mt-12">
        <thead>
          <tr className="bg-base text-white h-12 rounded-md">
            <td width="90px"></td>
            <td>
              <span className="pl-4">User Info </span>
            </td>
            <td>
              <TableHeaderCell
                id={SortBy.NAME}
                changeSort={handleClick}
                isActive={sortBy}
              />
            </td>
            <td>
              <TableHeaderCell
                changeSort={handleClick}
                id={SortBy.LAST}
                isActive={sortBy}
              />
            </td>
            <td>
              <TableHeaderCell
                changeSort={handleClick}
                id={SortBy.COUNTRY}
                isActive={sortBy}
              />
            </td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <UserRow
                image={user.picture.medium}
                country={user.location.country}
                email={user.email}
                lastName={user.name.last}
                name={user.name.first}
                userName={user.login.username}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MainContent;
