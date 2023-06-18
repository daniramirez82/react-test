import React, { useState } from "react";
import { SortBy, User } from "../types.d";
import Button from "./Button";
import TableHeaderCell from "./TableHeaderCell";

interface Props {
  changeSorting: (sort: SortBy) => void;
  handleEraseLine: (id: string) => void;
  colorLines: boolean;
  users: User[];
}

const UserList = ({
  users,
  colorLines,
  handleEraseLine,
  changeSorting,
}: Props) => {
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.NONE);
  const handleClick = (sort: SortBy) => {
    changeSorting(sort);
    setSortBy(sort);
  };

  return (
    <table className="w-full">
      <thead className="bg-slate-800">
        <tr className="p-10 h-12">
          <td>Foto</td>
          <td>
            <TableHeaderCell id={SortBy.NAME} changeSort={handleClick} isActive={sortBy} />
          </td>
          <td>
            <TableHeaderCell id={SortBy.LAST} changeSort={handleClick} isActive={sortBy} />
          </td>
          <td>
            <TableHeaderCell id={SortBy.COUNTRY} changeSort={handleClick} isActive={sortBy} />
          </td>

          <td>Acciones</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr
            key={user.login.uuid}
            className={`${
              colorLines ? "odd:bg-gray-600 even:bg-gray-500" : ""
            }`}
          >
            <td>
              <img
                className="rounded-full"
                src={user.picture.thumbnail}
                alt={user.name.first}
              />
            </td>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.location.country}</td>
            <td>
              <Button
                label="Borrar"
                handleClick={() => handleEraseLine(user.login.uuid)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
