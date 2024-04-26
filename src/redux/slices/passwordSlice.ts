import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PasswordState {
  value: string | null;
}

const initialState: PasswordState = {
  value: null,
};

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    setPassword: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.value = action.payload;
    },
  },
});

export const { setPassword } = passwordSlice.actions;
export const passwordSelector = (state: { password: PasswordState }) =>
  state.password.value;

export default passwordSlice.reducer;
