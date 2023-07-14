
interface ButtonProps {
    label: string,
    handleClick: ()=>void,
    isActive?: boolean,
}

const Button = ({label, handleClick, isActive = false}:ButtonProps) => {
  return (
    <button
      className={` text-white bg-base  px-4 py-1 rounded-sm hover:-translate-y-1 transition-all hover:scale-125`} onClick=
      {handleClick}> <span>{label}</span>

    </button>
  );
};
export default Button;