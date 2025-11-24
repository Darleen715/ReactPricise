// 账单列表相关store
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
  name: "billStore",
  initialState: {
    billList: [],
  },
  reducers: {
    getBillList(state, action) {
      state.billList = action.payload;
    },
  },
});

const { getBillList } = billStore.actions;
const fetchBillList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:8888/ka");
    dispatch(getBillList(res.data));
  };
};

export { fetchBillList, getBillList };

const reducer = billStore.reducer;
export default reducer;
