import Icons from "./nav-icons.svg"; // Path to your icons.svg

interface Props {
    name: string,
    color: string,
    size: number
}

const MenuIcon = ({ name, color, size }: Props) => (
  <svg className="bg-brand"  fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#${name}`} />
  </svg>
);



export default MenuIcon;