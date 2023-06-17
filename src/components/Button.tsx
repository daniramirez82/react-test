
interface ButtonProps {
    label: string,
    handleClick: ()=>void,
    isActive?: boolean,
}

const Button = ({label, handleClick, isActive = false}:ButtonProps) => {
  return (
    <button
      className={` text-slate-900 ${isActive ? "bg-slate-200" : "bg-slate-400"} px-3 py-1 rounded-lg`} onClick=
      {handleClick}> <span>{label}</span>

    </button>
  );
};
export default Button;