import { useState } from "react";
import { SortBy, type User } from "../types.d";
import Button from "./Button";

interface Props {
  changeSorting: (sort: SortBy, asending: boolean) => void;
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
  const [asendingName, setAsendingName] = useState<boolean>(false);
  const [asendingLast, setAsendingLast] = useState<boolean>(false);
  const [asendingCountry, setAsendingCountry] = useState<boolean>(false);

  const handleClick = (sort: SortBy) => {
    let asending: boolean = false;
    switch (sort) {
      case SortBy.NAME:
        asending = !asendingName;
        setAsendingName(!asendingName);
        break;
      case SortBy.LAST:
        asending = !asendingLast;
        setAsendingLast(!asendingLast);
        break;
      case SortBy.COUNTRY:
        asending = !asendingCountry;
        setAsendingCountry(!asendingCountry);
        break;
    }
    changeSorting(sort, asending);
  };

  return (
    <table className="w-full">
      <thead className="bg-slate-800">
        <tr className="p-10 h-12">
          <td>Foto</td>
          <td
            className="cursor-pointer flex"
            onClick={() => handleClick(SortBy.NAME)}
          >
            <span>Nombre</span>
            <div className={`p-1${!asendingName ? "bg-red-600 rotate-180" : ""}`}>
              &darr;
            </div>
          </td>
          <td
            className="cursor-pointer"
            onClick={() => handleClick(SortBy.LAST)}
          >
            Apellido
          </td>
          <td
            className="cursor-pointer"
            onClick={() => handleClick(SortBy.COUNTRY)}
          >
            Pais
          </td>
          <td>Acciones</td>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => {
          return (
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
                  handleClick={() => {
                    handleEraseLine(user.login.uuid);
                  }}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserList;
