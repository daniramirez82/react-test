import ButtonList from "../ButtonList";

interface Props {
  userName: string;
  email: string;
  name: string;
  lastName: string;
  country: string;
  image: string;
}

const UserRow = ({
  userName,
  email,
  name,
  lastName,
  country,
  image,
}: Props) => {
  return (
    <tr className="border-b border-b-lines">
      <td className="p-4">
        <img className="rounded-full w-20" src={image} alt={name} />
      </td>
      <td>
        <div className="flex flex-col pl-4 w-auto">
          <div className="flex relative w-fit">
            <span className="pr-6 font-semibold tracking-tight">{userName}</span>
            <img
              className="absolute right-0 top-0"
              src="/icons/verified.svg"
              alt="verified"
            />
          </div>
          <div className="text-text-secondary text-xs">{email}</div>
        </div>
      </td>
      <td className="text-text-secondary">{name}</td>
      <td className="text-text-secondary">{lastName}</td>
      <td className="text-text-secondary"> {country}</td>
      <td className="pr-4">
        <div className="flex justify-end">
          <ButtonList label="Administrator" />
          <img className="pl-4" src="/icons/trash.svg" alt="trash" />
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
