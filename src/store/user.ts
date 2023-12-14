import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {User} from '../common/types';

/**
 * This store can be used to store the current user.
 */

type UserSate = {
  user: User | null;
};

const initialUserState: UserSate = {
  // Dummy user
  user: {
    id: 0,
    name: 'John Doe',
    email: 'john@example.com',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    set: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clear: state => {
      state.user = null;
    },
  },
});

export const {set, clear} = userSlice.actions;

export default userSlice.reducer;
