import NavBar from "./navbar/Navbar";
import ToogleSwitch from "./navbar/ToogleSwitch";
const NewHeader = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between h-20 bg-base px-8 rounded-t-xl text-white">
        <div className="flex items-center">
          <div>
            <img src="/images/logo.svg" alt="logo page" />
          </div>
          <h1 className="pl-6">My Users</h1>
        </div>
        <NavBar />
      </div>
      <div className="flex justify-end w-full">
        <ToogleSwitch/>
      </div>
    </div>
  );
};

export default NewHeader;
