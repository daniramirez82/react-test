import NavBar from "./navbar/Navbar";
const NewHeader = () => {
  return (
    <div className="flex justify-between h-20 bg-base px-8 rounded-t-xl text-white">
      <div className="flex items-center">
        <div>
          <img src="/images/logo.svg" alt="logo page" />
        </div>
        <h1 className="pl-6">My Users</h1>
      </div>
      <NavBar/>
    </div>
  );
};

export  default NewHeader;
