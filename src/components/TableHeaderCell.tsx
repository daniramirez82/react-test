import { useRef } from "react";
import { SortBy } from "../types";
import { useSelector, useDispatch } from 'react-redux';
import { setSortOrder } from "../sortOrderSlice";
import type { RootState } from "../store";

interface Props {
    id: SortBy,
    changeSort: (id:SortBy)=> void,
}

const TableHeaderCell = ({id, changeSort}: Props) => {
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
    <div className="cursor-pointer flex" onClick={handleCellClick}>
      <span>{id}</span>
      <div className={`p-1`}>
        {showArrow.current &&  (
          <div className={`${!sortOrder[id] ? "bg-red-600 rotate-180" : ""}`}>
            &darr;
          </div>
        )}
      </div>
    </div>
  );
};

export default TableHeaderCell;
