import NavbarButton from "./NavbarButton";
const NavBar = () => {
  const items = ["home", "notification", "messages", "more"];

  return (
    <div className="flex items-center bg-text-secondary">
      {items.map((item) => {
        return <NavbarButton isSelected={false} name={item} key={item} />;
      })}
    </div>
  );
};

export default NavBar;
