import { createSlice } from '@reduxjs/toolkit';
import { IState } from './common';
import { categoriesReducer } from './reducer';

const initialState: IState = {
  isLoading: false,
  categories: [],
  activeCategoryId: null,
};

const { reducer } = createSlice({
  name: 'categoriesReducer',
  initialState,
  reducers: {},
  extraReducers: categoriesReducer,
});
export { reducer };
