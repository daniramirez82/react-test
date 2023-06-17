import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortBy } from "./types.d";

interface SortOrderState {
  [SortBy.NONE]: boolean;
  [SortBy.NAME]: boolean;
  [SortBy.LAST]: boolean;
  [SortBy.COUNTRY]: boolean;
}

const initialState: SortOrderState = {
  [SortBy.NONE]: false,
  [SortBy.NAME]: false,
  [SortBy.LAST]: false,
  [SortBy.COUNTRY]: false,
};

const sortOrderSlice = createSlice({
  name: "sortOrder",
  initialState,
  reducers: {
    setSortOrder: (state, action: PayloadAction<SortOrderState>) => {
      return action.payload;
    },
  },
});

export const { setSortOrder } = sortOrderSlice.actions;
export default sortOrderSlice.reducer;
