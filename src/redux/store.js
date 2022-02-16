import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './reducer';
import { contactsApi } from './slice';

export const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

// import { configureStore /*getDefaultMiddleware*/ } from "@reduxjs/toolkit";
// // import {
// //   FLUSH,
// //   REHYDRATE,
// //   PAUSE,
// //   PERSIST,
// //   PURGE,
// //   REGISTER,
// // } from 'redux-persist';

// import contactReducer from "./reducers";

// // const middleware = [
// //   ...getDefaultMiddleware({
// //     serializableCheck: {
// //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// //     },
// //   }),
// // ];

// const store = configureStore({
//   reducer: {
//     contacts: contactReducer,
//   },
//   // middleware,
//   devTools: process.env.NODE_ENV !== "production",
// });

// export default store;
