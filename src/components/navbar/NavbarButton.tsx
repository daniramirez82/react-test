import MenuIcon from "./MenuIcon";

interface Props {
  name: string;
  onClick: (name:string) => void;
  menuSelection: string;
}

const NavbarButton = ({ name, menuSelection, onClick }: Props) => {
  return (
    <div className="flex flex-col h-full cursor-pointer transition-all" onClick={()=> onClick(name)}>
      <div
        className={`px-6 h-full flex items-center`}
      >
        <div>
          <MenuIcon color="none" name={name} size={26} />
        </div>
        <div
          className={`${
            menuSelection === name
              ? "text-brand font-bold"
              : "text-text-optional"
          } pl-3 font-medium text-sm`}
        >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </div>
      </div>
      <div
        className={`h-1 rounded-t-md ${
          menuSelection === name ? "bg-brand" : ""
        }`}
      ></div>
    </div>
  );
};

export default NavbarButton;
