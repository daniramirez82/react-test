import { useRef } from "react";
import { SortBy } from "../types";
import { useSelector, useDispatch } from 'react-redux';
import { setSortOrder } from "../sortOrderSlice";
import type { RootState } from "../store";

interface Props {
    id: SortBy,
    changeSort: (id:SortBy)=> void,
    isActive: SortBy,
}

const TableHeaderCell = ({id, changeSort, isActive}: Props) => {
  const showArrow = useRef(false);
  const sortOrder = useSelector((state: RootState) => state.sortOrder);
  const dispatch = useDispatch();


  const handleCellClick = () => {
   showArrow.current = true;
    const newSortOrder = {
        ...sortOrder,
        [id]: !sortOrder[id],
    }
    dispatch(setSortOrder(newSortOrder));
    changeSort(id);
  };

  return (
    <div className={`cursor-pointer flex ${isActive ===id ? "bg-orange-800":""} items-center`} onClick={handleCellClick}>
      <span>{id[0].toUpperCase() + id.slice(1)}</span>
      <div className={`p-1`}>
        {showArrow.current && isActive === id && (
          <div className={`${!sortOrder[id] ? "bg-red-600 rotate-180" : ""}`}>
            &darr;
          </div>
        )}
      </div>
    </div>
  );
};

export default TableHeaderCell;
