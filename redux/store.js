import { configureStore } from '@reduxjs/toolkit';
import number from '@/redux/slices/slice';

const store = configureStore({
    reducer: number,
});

const getStore = () => store;

export default getStore;