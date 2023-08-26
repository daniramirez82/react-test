import { useDarkMode } from "../../darkModeContex";
import styles from "./ToogleSwitch.module.css";

const ToogleSwitch = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleChange = () => {
    toggleDarkMode();
  };

  return (
    <div className="relative flex justify-between items-center pt-2 pr-8">
      <div className="pr-2 dark:text-bg-light">Light </div>
      <div
        id="switch"
        onClick={handleChange}
        className="rounded-3xl relative w-14 h-7 cursor-pointer border border-base dark:border-lines"
      >
        <div className={`${isDarkMode ? "left-7":"left-1"} absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-2xl bg-lines transition-all ease-linear delay-150`}></div>
      </div>
      <div className="pl-2 dark:text-bg-light">Dark </div>
    </div>
  );
};

export default ToogleSwitch;
