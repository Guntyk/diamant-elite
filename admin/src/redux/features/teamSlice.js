import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import TeamService from 'services/TeamService';

const initialState = {
  team: [],
  error: null,
  isLoading: false,
};

export const createEmployee = createAsyncThunk('team/createEmployee', async (newEmployeeData, { rejectWithValue }) => {
  const { result, error } = await TeamService.createEmployee(newEmployeeData);

  if (result) {
    return result;
  }

  return rejectWithValue(error || 'Під час додавання нового працівників сталася помилка. Спробуйте пізніше');
});

export const getTeam = createAsyncThunk('team/getTeam', async (_, { rejectWithValue }) => {
  const { result, error } = await TeamService.getTeam();

  if (result) {
    return result;
  }

  return rejectWithValue(error || 'Під час отримання даних працівників сталася помилка. Спробуйте пізніше');
});

export const deleteEmployee = createAsyncThunk('team/deleteEmployee', async (id, { rejectWithValue }) => {
  const { result, error } = await TeamService.deleteEmployee(id);

  if (result) {
    return result;
  }

  return rejectWithValue(error || 'Під час видалення даних працівника сталася помилка. Спробуйте пізніше');
});

const teamSlice = createSlice({
  name: 'team',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createEmployee.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.team = [action.payload, ...state.team];
        state.error = null;
      })
      .addCase(createEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    builder
      .addCase(getTeam.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTeam.fulfilled, (state, action) => {
        state.isLoading = false;
        state.team = action.payload;
        state.error = null;
      })
      .addCase(getTeam.rejected, (state, action) => {
        state.isLoading = false;
        state.team = [];
        state.error = action.payload;
      })
      .addCase(deleteEmployee.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.team = state.team.filter(({ id }) => id !== action.payload.id);
        state.error = null;
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default teamSlice.reducer;
