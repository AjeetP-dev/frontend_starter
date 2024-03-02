import { combineReducers, configureStore } from '@reduxjs/toolkit';
import sliceConfiguration from './slices';

let objectOfReducers = {}
Object.keys(sliceConfiguration).forEach((slice_key: any) => {
  const slice = sliceConfiguration?.[slice_key]
  objectOfReducers = { ...objectOfReducers, [slice.name]: slice.reducer }
});

const reducer = combineReducers(objectOfReducers);

const store = configureStore({ reducer });

export default store;