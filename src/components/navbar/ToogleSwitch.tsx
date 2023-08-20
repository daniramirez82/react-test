import { useDarkMode } from "../../darkModeContex";
import styles from "./ToogleSwitch.module.css";


const ToogleSwitch = () => {
  const {isDarkMode,toggleDarkMode} = useDarkMode();

  const handleChange = ()=>{
    toggleDarkMode();
  }

  return (
    <div>
      <label htmlFor="switch"> Dark Mode: </label>
      <input id="switch" type="checkbox" onChange={handleChange} />
    </div>
  );
};

export default ToogleSwitch;
