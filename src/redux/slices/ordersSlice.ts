import { createSlice } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [
      // Adding some mock past orders for analytics
      { id: 'ORD001', date: '2026-05-10', total: 120.50, items: 2, status: 'Delivered' },
      { id: 'ORD002', date: '2026-05-12', total: 45.00, items: 1, status: 'In Transit' },
    ],
  },
  reducers: {
    addOrder: (state, action) => {
      state.orders.unshift(action.payload); // Add new orders at the top
    },
  },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
