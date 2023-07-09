import BreadCrums from "./BreadCrums";


const MainContent = () => {
  return (
    <div className="w-full">
      <div className="text-3xl font-medium pt-16 pb-8">Users</div>
      <BreadCrums/>
      <div>List Content</div>
    </div>
  );
};

export default MainContent;
