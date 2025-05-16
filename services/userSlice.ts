import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { hasCompletedOnboarding: false },
  reducers: {
    completeOnboarding(state) {
      state.hasCompletedOnboarding = true;
    },
  },
});

export const { completeOnboarding } = userSlice.actions;
export default userSlice.reducer;
