import BreadCrums from "./BreadCrums";


const MainContent = () => {
  return (
    <div className="w-full bg-secondary">
      <div className="text-3xl font-medium pt-16">Users</div>
      <BreadCrums/>
      <div>List Content</div>
    </div>
  );
};

export default MainContent;
